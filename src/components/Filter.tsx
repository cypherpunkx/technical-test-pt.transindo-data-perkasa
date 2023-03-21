import React, { Dispatch, SetStateAction } from "react";
import Badge from "./Badge";
import IconRemove from "/images/icon-remove.svg";

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

interface ValueProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

function Filter({ value, setValue }: ValueProps) {
  return (
    <div className="shadow-md bg-white p-4 rounded -mt-14">
      <div className="flex justify-start items-center gap-2">
        {value ? (
          <>
            <button className="flex group" onClick={() => setValue("")}>
              <Badge>{value}</Badge>
              <img
                src={IconRemove}
                alt=""
                className="text-black bg-desaturated-dark-cyan p-2 group-hover:bg-black"
              />
            </button>
            <button
              onClick={() => setValue("")}
              className="ml-auto text-desaturated-dark-cyan"
            >
              Clear
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Filter;
