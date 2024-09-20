import React, { useState } from "react";
import IconSwitch from "../IconSwitch/IconSwitch";
import ListView from "../ListView/ListView";
import CardsView from "../CardsView/CardsView";

const Store = ({ products }) => {
  const [isActive, setChange] = useState(false);
  const onSwitch = () => {
    setChange(!isActive);
  };

  let galleryContainer;

  if (isActive === true) {
    galleryContainer = <ListView items={products} />;
  } else if (isActive === false) {
    galleryContainer = <CardsView cards={products} />;
  }

  return (
    <>
      <div className="switch-button">
        <IconSwitch
          icon={isActive ? "view_list" : "view_module"}
          onSwitch={onSwitch}
        />
      </div>
      <div className="gallery">{galleryContainer}</div>
    </>
  );
};

export default Store;
