import { Artists } from "./components/Artists";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col w-full scroll-smooth">
      <Navbar/>
      <Hero />
      <Artists />
    </main>
  );
}
