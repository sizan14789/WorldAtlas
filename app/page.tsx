import Image from "next/image";
import About from "./about/page";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full my-12 lg:my-auto ">
      <div className="secs flex flex-col gap-10 !mb-20 md:flex-row-reverse">
        <figure className="relative flex-1 min-h-56 min-w-52 md:min-w-96 aspect-video overflow-hidden">
          <Image
            src="/images/world.png"
            fill={true}
            alt="logo-world-atlas"
            className="object-cover p-3"
            priority
          />
        </figure>
        <div className="flex flex-col flex-1 gap-5 justify-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore the World, One Country at a time.
          </h2>
          <p className="text-sm text-dimmed-texts mb-4">
            Discover the history, culture and beauty of every nation. Sort,
            search and filter through the countries to find the details you
            need.
          </p>
          <button className="mr-auto">
            <Link
              href="/country"
              className="w-full h-full py-3 px-6 rounded-md border-2"
            >
              Start Exploring
            </Link>
          </button>
        </div>
      </div>
      <About />
    </main>
  );
}
