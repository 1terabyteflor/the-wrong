import { Artists } from "./components/Artists";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col w-full scroll-smooth">
      <Hero />
      <Artists />
    </main>
  );
}
