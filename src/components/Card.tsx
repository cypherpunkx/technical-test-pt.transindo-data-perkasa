import Logo from "../assets/images/photosnap.svg";
import Badge from "./Badge";
import { motion as m, AnimatePresence } from "framer-motion";

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
  setValue?: any;
  value?: string;
}

function Card({
  logo,
  company,
  position,
  postedAt,
  contract,
  location,
  languages,
  role,
  level,
  setValue,
  value,
}: CardProps) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative shadow-lg p-6 pt-16 sm:p-6 border-l-4 border-l-desaturated-dark-cyan bg-white rounded">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="absolute -top-5 left-5 sm:relative sm:inset-0 ">
            <img
              src={logo}
              alt={company}
              className="w-16 h-16 sm:w-full sm:h-full aspect-auto"
            />
          </div>
          <div className="w-full mr-auto space-y-2">
            <div className="space-x-4 text-white font-semibold">
              <span className="text-desaturated-dark-cyan ">{company}</span>
              <span className="rounded-full bg-desaturated-dark-cyan py-1 px-2">
                New!
              </span>
              <span className="rounded-full bg-black py-1 px-2">Featured</span>
            </div>
            <div>
              <h6 className="text-xl sm:text-2xl font-bold">{position}</h6>
            </div>
            <div className="space-x-4 text-dark-grayin-cyan">
              <span>{postedAt}</span>
              <span>.</span>
              <span>{contract}</span>
              <span>.</span>
              <span>{location}</span>
            </div>
            <hr className="block sm:hidden" />
          </div>
          <div className="flex flex-wrap sm:flex-nowrap justify-start gap-3 sm:gap-4">
            {[role, level, ...languages].map((item, i: number) => (
              <button
                key={i}
                onClick={() => setValue(item)}
                className={`${
                  value === item ? "bg-desaturated-dark-cyan text-white" : ""
                } text-desaturated-dark-cyan`}
              >
                <Badge>{item}</Badge>
              </button>
            ))}
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default Card;
