import React from "react";
import { styled } from "styled-components";

const NutritionPackage = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <p>
          Deficiency of either Vitamins or Micronutrients in our body can result
          in long term adverse effects on multiple systems which can be
          prevented by proper nutrition and supplements. Konnect Nutrition
          Package covers essential tests to check the status of these Vitamins
          and Micronutrients in your body.
        </p>
        <ol>
          <li className="points">
            <strong>Complete Blood Picture (CBP) </strong>
          </li>

          <li className="points">
            <strong>Vitamin B12 </strong>
          </li>
          <li className="points">
            <strong>Vitamin D </strong>
          </li>
          <li className="points">
            <strong>Serum Iron </strong>
          </li>
          <li className="points">
            <strong>Serum Calcium </strong>
          </li>
          <li className="points">
            <strong>Serum Magnesium </strong>
          </li>
          <li className="points">
            <strong>Serum Phosphorus </strong>
          </li>
          <li className="points">
            <strong>Serum Zinc </strong>
          </li>
        </ol>
      </div>
    </Wrapper>
  );
};

export default NutritionPackage;
const Wrapper = styled.section``;
