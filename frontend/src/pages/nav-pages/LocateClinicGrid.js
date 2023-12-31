import React from 'react';
import { styled } from "styled-components";
import ClinicData from "../../assets/data/ClinicData";
import { GoLocation } from 'react-icons/go'
import { IoIosCall, IoIosMail } from 'react-icons/io'

function LocateClinicGrid({noclinics}) {

  return (
    <Wrapper>
      <div className="clinics container p-0 ">
          <div className="clinic">
            {ClinicData.slice(0, noclinics).map((item) => (
              <div className="clinic-card">
                <div className="clinic-image">
                  <img src={item.areaImg} alt={item.area} />
                  <p className="area d-flex gap-2">
                    {item.area}
                    <a href={item.direction} target="blanck">
                      <GoLocation />
                    </a>
                  </p>
                </div>
                <div className="clinic-info">
                  <div className="span-box">
                    <span>24/7 </span>
                  </div>
                  <div className="top">
                    <h3>{item.clinicTitle}</h3>
                    <p>{item.address}</p>
                  </div>
                  <div className="bottom">
                    <hr />
                    <div className="contact">
                      <div className="c-align phone">
                        <IoIosCall />
                        <p>{item.phone}</p>
                      </div>
                      <div className="c-align mail ">
                        <IoIosMail />
                        <p>{item.mail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </Wrapper>
  )
}

export default LocateClinicGrid;
const Wrapper = styled.section`
.clinics {
      margin-bottom: 3rem;
      .clinic {
        gap: 20px;
        display: flex;
        flex-wrap: wrap;
        .clinic-card {
          background-color: white;
          border: px solid white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          position: relative;
          width: 32%;
          .area {
            position: absolute;
            background: url(/images/k-10.png),
              linear-gradient(360deg, #00ffbb80, #005bab);
            top: 0;
            left: 0;
            padding: 8px 28px;
            border-radius: 0 0 10px 0;
            font-size: 1rem;
            color: ${({ theme }) => theme.colors.white};
            font-weight: 600;
            align-items: center;
            &:hover svg {
              scale: 1.2;
            }
            svg {
              transition: 0.3s;
              fill: ${({ theme }) => theme.colors.white};
              font-size: 1.25rem;
            }
          }
          .clinic-image {
            overflow: hidden;
            img {
              width: 100%;
              height: 225px;
              object-fit: cover;
              object-position: center;
            }
          }
          .clinic-info {
            position: relative;
            margin: 0 15px 15px 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 280px;
            border-radius: 10px;
            box-shadow: rgba(50, 50, 93, 0.15) 0px 10px 20px -2px,
              rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
            background-position: left center;
            background-size: cover;
            background-color: white;

            .top {
              padding: 2rem 2rem 0 2rem;
            }
            .span-box {
              position: absolute;
              padding: 10px;
              display: flex;
              align-items: center;
              top: -35px;
              right: 15px;

              span {
                font-size: 0.85rem;
                font-weight: 600;
                color: ${({ theme }) => theme.colors.primary};
                background-color: ${({ theme }) => theme.colors.white};
                box-shadow: rgba(50, 50, 93, 0.15) 0px 10px 20px -2px,
                  rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 45px;
                height: 45px;
                border-radius: 50px;
              }
            }

            h3 {
              font-size: 1.25rem;
              color: ${({ theme }) => theme.colors.primary};
            }
          }
          .bottom {
            padding: 0 0 2rem 0;
            .c-align {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 5px;
              svg {
                fill: ${({ theme }) => theme.colors.primary};
                font-size: 1.25rem;
              }
              &:hover p {
                transition: 0.2s;
                color: ${({ theme }) => theme.colors.secondary};
              }
            }
          }
        }
      }
    }
`;
