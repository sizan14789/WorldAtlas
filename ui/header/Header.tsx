"use client";

import Link from "next/link";
import headers from "@/json/header.json";
import { AlignRight } from "lucide-react";
import { useState } from "react";
import { HeaderInterface } from "@/utils";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  const [closed, setClosed] = useState<boolean>(true);
  const handleNavToggle = () => {
    setClosed(!closed);
  };

  return (
    <header className="w-screen bg-gray py-5 relative mb-10">
      <div className="secs flex justify-between">
        <div className="logo flex items-center">
          <Link href="/" className="text-3xl font-bold">
            WorldAtlas
          </Link>
        </div>

        <ul className="hidden gap-10 items-center md:flex">
          {headers &&
            (headers as HeaderInterface[]).map((each) => {
              const isActive =
                each.url === "/"
                  ? path === "/" // Exact match for Home
                  : path.startsWith(each.url);

              return (
                <Link
                  key={each.id}
                  href={each.url}
                  className={` ${
                    isActive ? "text-blue-700" : "text-dimmed-texts"
                  }`}
                >
                  {each.name}
                </Link>
              );
            })}
        </ul>

        <ul
          className={`md:hidden flex flex-col items-center pt-[8rem] fixed bg-gray z-10  md:bg-transparent h-screen top-[5.375rem]  right-0 transition-all w-1/2 min-w-48 ${
            closed ? "translate-x-full" : "translate-x-0"
          }`}
        >
          {headers &&
            (headers as HeaderInterface[]).map((each) => {
              const isActive =
                each.url === "/"
                  ? path === "/" // Exact match for Home
                  : path.startsWith(each.url);

              return (
                <Link
                  key={each.id}
                  href={each.url}
                  className={`w-full pt-8 pb-6 border-b-dimmed-texts border-b-2 text-center ${
                    isActive ? "text-blue-700" : "text-dimmed-texts"
                  }`}
                >
                  {each.name}
                </Link>
              );
            })}
        </ul>

        <div
          className={`cursor-pointer  p-2 transition-all md:hidden hover:text-blue-600 ${
            closed ? "rotate-0" : "rotate-180"
          }`}
          onClick={handleNavToggle}
        >
          <AlignRight size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
