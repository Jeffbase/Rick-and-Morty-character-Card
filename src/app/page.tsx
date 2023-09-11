"use client";
import { useState, useEffect } from "react";
import { Pagination } from "antd";
import { fetchCharacters } from "./characterService";
import CharacterCard from "./characterCard";
import { Spin } from "antd";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pagenum, setPagenum] = useState<number>(1);
  const [numChar, setNumChar] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePageChange = (page: number) => {
    setPagenum(page);
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetchCharacters();

        setCharacters(res);
        setNumChar(res.length);
        setLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="flex justify-center text-4xl font-bold text-gray-900">
          Rick and Morty characters
        </h1>
        {loading ? (
          <>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {characters
                .slice((pagenum - 1) * 9, pagenum * 9)
                .map((character) => (
                  <CharacterCard character={character} />
                ))}
            </div>

            <Pagination
              defaultCurrent={pagenum}
              defaultPageSize={9}
              total={numChar}
              showSizeChanger={false}
              onChange={handlePageChange}
              className="flex justify-center mt-10"
            />
          </>
        ) : (
          <Spin size="large" />
        )}
      </div>
    </div>
  );
}
