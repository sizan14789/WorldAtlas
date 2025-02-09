import React from "react";
import { CountryData } from "@/utils";

const CountryCard = ({each}:{each: CountryData}) => {
  return (
    <div
      key={each.id}
      className="p-8 max-w-72 flex flex-col gap-4 rounded-md border-off-white border-[0.5px]"
    >
      <h2 className="text-2xl">{each.name}</h2>
      <p className="text-sm">
        <span className="text-dimmed-texts">Capital:</span> {each.capital}{" "}
      </p>
      <p className="text-sm">
        <span className="text-dimmed-texts">Population:</span> {each.population}{" "}
      </p>
      <p className="text-sm">
        <span className="text-dimmed-texts">Interesting Fact:</span>{" "}
        {each.interestingFact}{" "}
      </p>
    </div>
  );
};

export default CountryCard;
