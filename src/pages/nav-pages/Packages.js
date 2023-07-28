import React from "react";
import HpCard from "../../components/requiredPages/HpCard";
// import styled from "styled-components";
import { packagesData } from "../../assets/data/AllData";
import { styled } from "styled-components";

const Packages = () => {
  return (
    <Wrapper>
      <section className=" py-5" id="hp_sec">
        <div>
          <div className="text-center ">
            <h2>Health Packages</h2>
            <p className="w1000 mx-auto">
              Konnect Diagnostic Centre: Empowering proactive health management
              through tailored Diagnostic Health Packages for early detection
              and prevention, promoting healthier lives.
            </p>
          </div>
          <div className="hp-box container mt-4 flex-wrap">
            <div className="hpCards d-flex justify-content-between flex-wrap gap-3">
              {packagesData.map((item, index) => (
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

export default Packages;
const Wrapper = styled.section``;
