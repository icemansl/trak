import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-6xl font-bold">TRAK</h1>

        <p className="mt-4 text-xl text-gray-400">
          Track every movie and series you watch.
        </p>

        <button className="mt-8 px-6 py-3 rounded-xl bg-white text-black font-semibold">
          Get Started
        </button>
      </main>
    </>
  );
}