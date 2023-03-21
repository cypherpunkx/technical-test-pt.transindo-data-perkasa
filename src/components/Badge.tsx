import React, { ReactNode } from "react";

interface BadgeProps {
  children?: ReactNode;
}

function Badge({ children }: BadgeProps) {
  return (
    <div
      className={`py-1 px-2 rounded bg-dark-grayin-cyan/10 active:bg-desaturated-dark-cyan active:text-white`}
    >
      {children}
    </div>
  );
}

export default Badge;
