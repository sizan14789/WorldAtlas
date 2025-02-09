"use client";

import { countryInterface } from "@/utils";
import Card from "@/ui/CountryCardMain/Card";
import React, { useEffect, useState } from "react";

const Helper = () => {
  const [countries, setCountries] = useState<countryInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch Data
  useEffect(() => {
    const url =
      "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags";

    const getAllCountries = async () => {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
      setLoading(false);
    };
    getAllCountries();
  }, []);

  // Search Part
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredData = () => {
    const filtered = (countries as countryInterface[]).filter(
      (cur) => cur.name.common.toLowerCase().includes(search.toLowerCase()) // Case-insensitive match
    );
    return filtered;
  };

  if (loading) {
    return (
      <main className="my-auto">
        <div className="secs flex flex-col">
          <h2 className="text-7xl text-center">Loading...</h2>
        </div>
      </main>
    );
  } else {
    return (
      <main className="my-auto">
        <div className="secs flex flex-col">
          <input
            type="search"
            placeholder="Search by name"
            className="mx-auto mb-10 brightness-10 border-dimmed-texts border-[0.5px] px-6 py-3 min-w-80 focus:border-dimmer focus:outline-none rounded-md bg-transparent"
            onChange={handleChange}
            value={search}
          />

          {filteredData().length === 0 ? (
            <h2 className="text-7xl text-center">No Country found</h2>
          ) : (
            <div className="flex flex-wrap justify-center gap-6">
              {(filteredData() as countryInterface[])
                .slice(0, 20)
                .map((each, index) => {
                  return <Card each={each} key={index} />;
                })}
            </div>
          )}
        </div>
      </main>
    );
  }
};

export default Helper;
