import React from "react";
import HpCard from "../requiredPages/HpCard";
import { packagesData } from "../data/AllData";
import styled from "styled-components";

const HealthPackages = () => {
  return (
    <Wrapper>
      <div className="secFour-info d-flex">
        <h2>Health Packages</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      {/* <div className="container flex-wrap ">
        <div className="hpCards d-flex justify-content-between m-3 flex-wrap gap-3">
          {packagesData.map((item, index) => (
            <HpCard
              key={index}
              title={item.title}
              price={item.price}
              code={item.code}
              desc={item.desc}
              info={item.temInfo}
              item={item}
            />
          ))}
        </div>
      </div> */}

<section className="r_section mb-5">
        <div className="r_container row">

          <div className="col-4 p-2 hp_card">
            <div className="p-2 border rounded">
              <img src="/project-konnect/images/health-packages/hp1.jpg" className="w-100 rounded" alt="" />
              <div className="p-2">
                <h2 className="r_heading_title_secondary"> Konnect Diabetic Package </h2>
                <span>Code: 002</span>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="hp_price">2499</h2>
                  <button type="button" className="btn btn-primary btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 p-2 hp_card">
            <div className="p-2 border rounded">
              <img src="/project-konnect/images/health-packages/hp2.jpg" className="w-100 rounded" alt="" />
              <div className="p-2">
                <h2 className="r_heading_title_secondary"> Konnect Master Health Checkup </h2>
                <span>Code: 003</span>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="hp_price">2999</h2>
                  <button type="button" className="btn btn-primary btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 p-2 hp_card">
            <div className="p-2 border rounded">
              <img src="/project-konnect/images/health-packages/hp3.jpg" className="w-100 rounded" alt="" />
              <div className="p-2">
                <h2 className="r_heading_title_secondary"> Konnect Executive Health Checkup </h2>
                <span>Code: 004</span>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="hp_price">5799</h2>
                  <button type="button" className="btn btn-primary btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Wrapper>
  );
};

export default HealthPackages;

const Wrapper = styled.section`
  .hp_card {
    h2{
      font-size: 16px;
      font-weight: 700;
    }
    h2.hp_price{
      margin: 0;
    }
  }
`;
