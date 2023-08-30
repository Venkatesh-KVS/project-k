import React,{useState} from 'react';
import { useEffect } from 'react';
import { styled } from "styled-components";
import CartFormComp from './CartFormComp';


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
            {cart?.map((item)=>(
                <div className="cartItem d-flex align-items-center justify-content-between" key={item.id}>
                    <div>
                        <p>{item.name}</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        {/* <h2 className='itemsprice'>{item.name}</h2> */}
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
                {showComponent && ( <CartFormComp cart={cart} /> )}
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
