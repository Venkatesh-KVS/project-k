import React from "react";
import HpCard from "./requiredPages/HpCard";
// import styled from "styled-components";
import { packagesData } from "./data/AllData";
import { styled } from "styled-components";


const Packages = () => {
  return (
    <Wrapper>
      <section className="r_section mb-5 py-5" id="hp_sec">
        <div>
          <div className="w-50 mx-auto text-center">
            <h2 className="r_heading_title">Health Packages</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <div className="hp-box container flex-wrap">
            <div className="hpCards d-flex justify-content-between flex-wrap gap-3">
              {packagesData.map((item, index) => (
                <HpCard
                  key={index}
                  image={item.imgUrl}
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
  )
    
};

export default Packages;
const Wrapper = styled.section`

`

