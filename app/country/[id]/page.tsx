const getCountryData = async (name: string) => {
  const url = `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`;
  const res = await fetch(url, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data[0];
};

import { soloCountryInterface } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export const generateMetadata = async ({params}:{params: {id: string}})=>{

  const id = params.id;
  const data: soloCountryInterface = await getCountryData(id);

  console.log(data.name.official)

  return {
    title: data.name.common,
    description: data.name.official
  }
}

const Country = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const data: soloCountryInterface = await getCountryData(id);
  // console.log(data);

  return (
    <main className="my-auto border-y-dimmed-texts border-y-[0.5px] pt-10 pb-10">
      <div className="secs flex flex-col md:flex-row md:items-center gap-5 md:gap-10 lg:gap-20">
        <figure className="relative w-100% md:min-h-44 md:w-56 aspect-video overflow-hidden md:flex-1">
          <Image
            src={data.flags?.svg}
            alt={data.flags?.alt}
            fill={true}
            className="object-cover p-6 sm:px-20 md:px-10"
          />
        </figure>
        <div className="flex flex-col gap-3 text-sm flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {data.name.official}
          </h2>
          <p>
            <span className="text-dimmed-texts">Native Name:</span>{" "}
            {Object.keys(data.name.nativeName)
              .map((curKey) => data.name.nativeName[curKey].common)
              .join(", ")}{" "}
          </p>
          <p>
            <span className="text-dimmed-texts">Population:</span>{" "}
            {data.population.toLocaleString()}{" "}
          </p>
          <p>
            <span className="text-dimmed-texts">Region:</span> {data.region}{" "}
          </p>
          <p>
            <span className="text-dimmed-texts">Sub Region:</span>{" "}
            {data.subregion}{" "}
          </p>
          <p>
            <span className="text-dimmed-texts">Capital:</span> {data.capital}{" "}
          </p>
          <p>
            <span className="text-dimmed-texts">Top Level Domain:</span>{" "}
            {data.tld}{" "}
          </p>
          <p>
            <span className="text-dimmed-texts">Currencies:</span>{" "}
            {Object.values(data.currencies)
              .map((curCurrency) => curCurrency.name)
              .join(", ")}{" "}
          </p>
          <p>
            <span className="text-dimmed-texts">Languages:</span>{" "}
            {Object.values(data.languages)
              .map((lang) => lang)
              .join(", ")}{" "}
          </p>
          <button className="mr-auto mt-6 py-3">
            <Link
              href="/country"
              className="w-full h-full py-3 px-8 rounded-md border-[0.5px] border-off-white"
            >
              Go Back
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Country;
