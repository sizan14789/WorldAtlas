import { countryInterface } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const Card = ({each}:{each:countryInterface}) => {
  return (
    <div
      className="p-10 border-[0.5px] border-dimmed-texts rounded-md flex flex-col gap-3 w-[17rem] h-[27rem] md:w-[18.75rem] md:h-[29.5rem]"
    >
      <figure className="relative w-full h-full mb-4">
        <Image
          src={each.flags.png}
          alt={each.name.official}
          fill={true}
          className="object-cover"
        />
      </figure>
      <h2 className="text-3xl mb-4">
        {each.name.common.length > 12
          ? each.name.common.slice(0, 12) + "..."
          : each.name.common}
      </h2>
      <p>
        <span className="text-dimmed-texts">Population: </span>
        {each.population.toLocaleString()}
      </p>
      <p>
        <span className="text-dimmed-texts">Region: </span>
        {each.region}
      </p>
      <p>
        <span className="text-dimmed-texts">Capital: </span>
        {each.capital.map((each) => each)}
      </p>
      <button className="mr-auto mt-6">
        <Link
          href={`/country/${each.name.common}`}
          className="w-full h-full py-3 px-8 rounded-md border-[0.5px] border-off-white"
        >
          Read More
        </Link>
      </button>
    </div>
  );
};

export default Card;
