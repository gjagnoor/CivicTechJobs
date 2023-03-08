import React, { useEffect, useState } from "react";
import { iconChevronLeft } from "../../assets/images/images";
import "./_scroll.scss";

interface ChevronScrollProps {
  children: any;
}

function ChevronScroll({ children }: ChevronScrollProps) {
  return (
    <div className="scroll">
      <div>
        <img src={iconChevronLeft} className="chevronLeft" />
      </div>
      {children}
    </div>
  );
}

export default ChevronScroll;
