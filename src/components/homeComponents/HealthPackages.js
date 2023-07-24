import React from "react";
import HpCard from "../requiredPages/HpCard";
import { packagesData } from "../data/AllData";
import styled from "styled-components";

const HealthPackages = () => {
  return (
    <Wrapper>
      <section className="r_section mb-5" id="hp_sec">
        <div>
          <div className="secFour-info w-50 mx-auto d-flex">
            <h2 className="r_heading_title">Health Packages</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="hp-box container flex-wrap">
            <div className="hpCards d-flex justify-content-between flex-wrap gap-3">
              {packagesData.slice(0, 3).map((item, index) => (
                <HpCard
                  key={index}
                  image={item.ftrImg}
                  title={item.title}
                  price={item.price}
                  code={item.code}
                  desc={item.desc}
                  info={item.temInfo}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default HealthPackages;

const Wrapper = styled.section`
  .hp-box {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  #hp_sec {
    padding: 50px 0;
    background: ${({ theme }) => theme.colors.bg_light};
  }
`;
