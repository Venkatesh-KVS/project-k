// import React, { useState } from "react";
// import styled from "styled-components";
// import { useCart } from "react-use-cart";
// import { MdDelete, MdCurrencyRupee } from "react-icons/md";
// // import { HiPlusSm, HiMinusSm } from "react-icons/hi";

// const Cart = ({ handleChange }) => {
//   const [showComponent, setShowComponent] = useState(false);

//   function handleSubmit() {
//     setShowComponent(true);
//   }

//   const {
//     isEmpty,
//     // totalUniqueItems,
//     items,
//     // totalItems,
//     cartTotal,
//     // updateItemQuantity,
//     removeItem,
//     emptyCart,
//   } = useCart();

//   if (isEmpty)
//     return (
//       <div
//         className="empty container d-flex flex-column"
//         style={{
//           backgroundImage: 'url("/project-konnect/images/k-10.png")',
//           backgroundSize: "500px",
//           backgroundPositionX: "center center",
//           backgroundRepeat: "no-repeat",
//           boxShadow: "rgba(100, 100, 111, 0.2) 0px 0px 25px 0px",
//           margin: " 50px auto",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           height: "60vh",
//         }}
//       >
//         <h2
//           className="text-center"
//           style={{
//             fontSize: "2rem",
//             fontWeight: "bold",
//           }}
//         >
//           Your Cart is Empty
//         </h2>
//         <p className="m-3">Add Tests or Packages</p>
//       </div>
//     );
//   return (
//     <Wrapper className="py-4 container">
//       <h5>{/* Cart ({totalUniqueItems}) totalItems:({totalItems}) */}</h5>
//       <div className="cart-container gap-4">
//         <div className="cart-left">
//           <div className="tests">
//             {items.map((item, index) => {
//               return (
//                 <div
//                   className="tests-box d-flex justify-content-between mb-3"
//                   key={index}
//                 >
//                   <div className="name d-flex gap-3 justify-content-between align-items-center">
//                     <h3 className="title">{item.title}</h3>
//                     <h3 className="price d-flex">
//                       <MdCurrencyRupee />
//                       {item.price}
//                     </h3>
//                   </div>
//                   <div className="quantity d-flex  gap-2">
//                     {/* <HiPlusSm
//                       // onClick={() => updateItemQuantity(item.id, item.quantity + 1) }
//                       onClick={()=>handleChange(item, +1)}
//                     />
//                     <h5>{item.quantity}</h5>

//                     <HiMinusSm
//                       // onClick={() => updateItemQuantity(item.id, item.quantity - 1) }
//                       onClick={()=>handleChange(item, -1)}
//                     /> */}
//                   </div>

//                   <MdDelete
//                     className="remove"
//                     onClick={() => removeItem(item.id)}
//                   />
//                 </div>
//               );
//             })}

//             <div className="cart-bottom d-flex justify-content-between">
//               <button
//                 className="btn btn-clear-cart m-2"
//                 onClick={() => emptyCart()}
//               >
//                 Clear Cart
//               </button>
//               <div className="proceed-box d-flex gap-4">
//                 <h3>
//                   Total Price : <MdCurrencyRupee />
//                   {cartTotal}
//                 </h3>
//                 <button className="btn" onClick={handleSubmit}>
//                   Submit
//                 </button>
//               </div>
//             </div>
//             {showComponent && (
//               <div className="bookNow">
//                 <form className="form" submit="true">
//                   <input type="text" placeholder="Enter Your Name" />
//                   <input type="number" placeholder="Your Phone Number" />
//                   <input type="text" placeholder="Your Email" />
//                   <button className="btn" type="submit">
//                     Book Test's
//                   </button>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Cart;

// const Wrapper = styled.section`
//   .cart-left {
//     width: 100%;

//     .tests {
//       background-color: ${({ theme }) => theme.colors.white};
//       box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//       padding: 50px;
//       border-radius: 10px;
//       .tests-box {
//         background-color: ${({ theme }) => theme.colors.secondary};
//         padding: 1rem;
//         border-radius: 5px;
//         align-items: center;
//         .name {
//           width: 100%;
//           .title,
//           .price {
//             color: ${({ theme }) => theme.colors.white};
//             font-size: 1.25rem;
//             font-weight: 700;
//             margin-bottom: 0;
//           }
//           .price {
//             align-items: center;
//             margin-right: 25px;
//             svg {
//               fill: ${({ theme }) => theme.colors.white};
//             }
//           }
//         }
//         .quantity {
//           justify-content: center;
//           align-items: center;
//           text-align: center;
//           padding: 0 2rem;

//           svg {
//             fill: ${({ theme }) => theme.colors.white};
//             cursor: pointer;
//             &:hover {
//               fill: ${({ theme }) => theme.colors.white};
//             }
//           }

//           h5 {
//             border-radius: 50px;
//             /* padding: 10px; */
//             height: 30px;
//             width: 30px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             text-align: center;
//             margin: 0;
//             font-size: 1rem;
//             border: 2px solid ${({ theme }) => theme.colors.white};
//             color: ${({ theme }) => theme.colors.white};
//           }
//         }
//         svg.remove {
//           fill: ${({ theme }) => theme.colors.white};
//           font-size: 2rem;
//           transition: all 0.3s;
//           &:hover {
//             scale: 1.3;
//             cursor: pointer;
//           }
//         }
//       }
//       .cart-bottom {
//         align-items: center;
//         .proceed-box {
//           align-items: center;
//           h3 {
//             color: ${({ theme }) => theme.colors.text};
//             font-size: 1.5rem;
//             font-weight: 600;
//             margin-bottom: 0;
//             svg {
//               fill: ${({ theme }) => theme.colors.text};
//             }
//           }
//           .btn {
//             background-color: ${({ theme }) => theme.colors.primary};
//             color: ${({ theme }) => theme.colors.white};
//           }
//         }
//       }
//       .bookNow {
//         background-color: ${({ theme }) => theme.colors.primary};
//         border-radius: 10px;
//         margin-top: 2rem;
//         form {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 0.5rem;
//           padding: 50px;
//           input {
//             width: 100%;
//             border-radius: 5px;
//             padding: 10px;
//             gap: 10px;
//             border: none;
//             background-color: ${({ theme }) => theme.colors.white};
//             &::placeholder {
//               color: #d1d1d1;
//               font-size: 15px;
//               padding: 10px;
//             }
//           }
//           .btn {
//             background-color: ${({ theme }) => theme.colors.secondary};
//             color: ${({ theme }) => theme.colors.white};
//           }
//         }
//       }
//     }
//   }
//   /* .cart-right {
//     background-color: ${({ theme }) => theme.colors.secondary};
//     width: 35%;
//     padding: 25px;
//     border-radius: 10px;
//     .proceed-box {
//       h3 {
//         color: ${({ theme }) => theme.colors.white};
//       }
//     }
//   } */

//   .btn-clear-cart {
//     background-color: red;
//     color: ${({ theme }) => theme.colors.white};
//   }
// `;
// --------------------------------------------------------------------------------------------


import React,{useState} from 'react';
import { useEffect } from 'react';
import { styled } from "styled-components";

const CartFormComp = () => {
    return (
        <section className="pt-5 gradient-custom">
            <h2 className='mb-4'>Submit Form</h2>
            <form>
              <div className="my-1">
                <div className="form-outline">
                  <input type="text" name='name' className="form-control form-control-sm p-2" placeholder='Enter Full Name' />
                </div>
              </div>

              <div className="my-1">
                <div className="form-outline">
                  <input type="email" name='email' className="form-control form-control-sm p-2" placeholder='Enter Email' />
                </div>
              </div>

              <div className="my-1">
                <div className="form-outline">
                  <input type="tel" name='mobile' className="form-control form-control-sm p-2" placeholder='Enter Mobile Number' />
                </div>
              </div>

              <div className="p1-4">
                <input className="btn btn-primary btn-sm py-1 px-3" type="submit" value="Submit" />
              </div>
            </form>
        </section>
    )
}

const Cart = ({cart, setCart}) => {
    const [price, setPrice] = useState(0);
    const [showComponent, setShowComponent] = useState(false);
    function showForm() {
        setShowComponent(true);
    }

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <Wrapper>
        <article className='container w-50 mx-auto m-5 p-5'>
            <h2 className='mb-4'>Cart</h2>
            {
                cart?.map((item)=>(
                    <div className="cartItem d-flex align-items-center justify-content-between" key={item.id}>
                        <div>
                            <p>{item.title}</p>
                        </div>
                        {/* <div>
                            <button onClick={()=>handleChange(item, +1)}> + </button>
                            <button>{item.amount}</button>
                            <button onClick={()=>handleChange(item, -1)}> - </button>
                        </div> */}
                        <div className='d-flex align-items-center'>
                            <h2 className='itemsprice'>{item.price}</h2>
                            <button className='removeBtn btn' onClick={()=>handleRemove(item.id)} >
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 384 512">
                                    <path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            <div className='totalSec d-flex align-items-center justify-content-between'>
                <div>
                    <span>Total Price of your Cart</span>
                    <span>Rs - {price}</span>
                </div>
                <div>
                    <button type='button' className='btn btn-primary btn-sm py-1 px-3' onClick={showForm}>Submit</button>
                </div>
            </div>
            <div>
                {showComponent && ( <CartFormComp /> )}
                {/* <CartFormComp /> */}
            </div>
        </article>
    </Wrapper>
  )
}

export default Cart;


const Wrapper = styled.section`
*{
    margin: 0;
    padding: 0;
}
article{
    margin: auto;
    background-image: 'url("/project-konnect/images/k-10.png")';
    background-size: "500px";
    background-position: "center center";
    background-repeat: "no-repeat";
    box-shadow: rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;
    border-radius: 10px;
}
.cartItem{
    padding: 10px 5px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
.removeBtn{
    width: 30px;
    height: 30px;
    background: red;
    border-radius: 5px;
    color: white;
}
.itemsprice{
    font-weight: 700;
    font-size: 18px;
    margin: 0 20px;
}
.totalSec{
    margin: 20px 0;
    font-weight: 700;
    font-size: 18px;
}`;
