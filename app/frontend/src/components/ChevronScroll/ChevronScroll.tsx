import React, { useEffect, useState } from "react";
import {
  iconArrowDown,
  iconChevronLeft,
  IconChevronRight
} from "../../assets/images/images";
import "./_scroll.scss";

interface ChevronScrollProps {
  children: any;
}

function ChevronScroll({ children }: ChevronScrollProps) {
  const [allChildren, setAllChildren] = useState([...children]);
  const [deletedComponents, setDeleted] = useState<any[]>([]);
  const [showingChildren, setShowingChildren] = useState([...children]); // [experience, hello, test]
  function handleScroll() {
    // find the first item
    // remove the first item from showing list
    setShowingChildren((prevChildren) => {
      const deleted = prevChildren[0];
      setDeleted([...deletedComponents, deleted]); // [experience, hello]
      prevChildren = prevChildren.slice(1);
      return prevChildren;
    });
  }

  function handleScrollRight() {
    setShowingChildren(() => {
      const deleted = showingChildren[showingChildren.length - 1];
      const toAdd = deletedComponents.slice().pop();
      setDeleted([deleted, ...deletedComponents.slice(0, -1)]);
      const newComponents = showingChildren.slice();
      newComponents.unshift(toAdd); // [hello, test]
      return newComponents;
    });
  }
  return (
    <div className="scroll">
      <button className="button-hide" onClick={handleScroll}>
        <img src={iconChevronLeft} className="chevronLeft" />
      </button>
      {showingChildren}
      <button className="button-hide">
        <img
          src={IconChevronRight}
          onClick={handleScrollRight}
          className="chevronRight"
        />
      </button>
    </div>
  );
}

export default ChevronScroll;
