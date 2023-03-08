import React, { useEffect, useState } from "react";
import "./_item.scss";
import { IconChevronDown } from "assets/images/images";
import { nanoid } from "nanoid";

interface ItemProps {
  text: String;
  id: any;
}

function Item({ text, id }: ItemProps) {
  return (
    <div className="item" key={id}>
      <div>{text}</div>
      <div>
        <img src={IconChevronDown} className="downArrow" />
      </div>
    </div>
  );
}

export default Item;
