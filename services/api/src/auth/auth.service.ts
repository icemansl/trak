import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
  private prisma: PrismaService,
  private jwtService: JwtService,
) {}

  async register(data: RegisterDto) {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [
          { email: data.email },
          { username: data.username },
        ],
      },
    });

    if (existingUser) {
      throw new BadRequestException(
        'User with this email or username already exists',
      );
    }

    const passwordHash = await bcrypt.hash(data.password, 10);

    const user = await this.prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        passwordHash,
      },
    });

    const payload = {
  sub: user.id,
  email: user.email,
  username: user.username,
};

return {
  accessToken: this.jwtService.sign(payload),
};
  }

async login(data: LoginDto) {
  const user = await this.prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new BadRequestException('Invalid credentials');
  }

  const passwordMatch = await bcrypt.compare(
    data.password,
    user.passwordHash,
  );

  if (!passwordMatch) {
    throw new BadRequestException('Invalid credentials');
  }

  const payload = {
    sub: user.id,
    email: user.email,
    username: user.username,
  };

  return {
    accessToken: this.jwtService.sign(payload),
  };
}
}