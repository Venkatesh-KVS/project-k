import React from "react";
import { useParams } from "react-router-dom";
import { packagesData } from "../data/AllData";

const Details = () => {
  const { id } = useParams();
  const selectedItem = packagesData.find((item) => item.id === id);

  if (!selectedItem) {
    return <div>Item not found.</div>;
  }
  return (
    <>
      <div>
        <h2>{selectedItem.title}</h2>
      </div>
    </>
  );
};

export default Details;
