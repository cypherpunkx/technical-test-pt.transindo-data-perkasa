import React, { useMemo, useState } from "react";
import { Header, Card, Filter } from "./components";
import { motion as m, AnimatePresence } from "framer-motion";
import data from "./data/data.json";

interface CardProps {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: any[];
}

function App() {
  const [value, setValue] = useState("");

  const filter = useMemo(
    () =>
      data.filter(
        (item: CardProps) =>
          item.role.toLowerCase().includes(value.toLowerCase()) ||
          item.level.toLowerCase().includes(value.toLowerCase()) ||
          item.languages.some((i) =>
            i.toLowerCase().includes(value.toLowerCase())
          )
      ),
    [value]
  );

  return (
    <main>
      <header>
        <Header />
      </header>
      <m.div layout>
        <AnimatePresence>
          <article className="container mx-auto my-8 font-sans space-y-8 px-6 sm:px-0">
            {value ? <Filter value={value} setValue={setValue} /> : null}
            {filter.length > 0 ? (
              filter.map((emp) => (
                <div key={emp.id}>
                  <Card {...emp} setValue={setValue} value={value} />
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center">
                <h1 className="text-4xl">No Result...</h1>
              </div>
            )}
          </article>
        </AnimatePresence>
      </m.div>
    </main>
  );
}

export default App;
