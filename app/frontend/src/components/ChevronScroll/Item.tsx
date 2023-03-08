import React, { useEffect, useState } from "react";
import "./_item.scss";
import { IconChevronDown } from "assets/images/images";

interface ItemProps {
  text: String;
}

function Item({ text }: ItemProps) {
  return (
    <div className="item">
      <div>{text}</div>
      <div>
        <img src={IconChevronDown} className="downArrow" />
      </div>
    </div>
  );
}

export default Item;
