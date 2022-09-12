import React from 'react'

import { FaTrash } from 'react-icons/fa';

import { useState,} from 'react';
import { Pressable } from 'react-native';

const Cart = ({ Cart , Pressed , Refresh }) => {

  var [NbrOfProducts, setNbrOfProducts] = useState(1);

  var increase = () => {
    setNbrOfProducts(prevValue => prevValue + 1);
    Cart.Quantity = NbrOfProducts+1;
    Cart.TotalPrice = Cart.Quantity * Cart.Price
    Refresh()
  }

  var decrease = () => {
    if (NbrOfProducts > 1) {
      setNbrOfProducts(prevValue => prevValue - 1);
      Cart.Quantity = NbrOfProducts-1;
      Cart.TotalPrice = Cart.Quantity * Cart.Price
      Refresh()
    }
  }


  return (
    <div className='row'>
      <div className="col-1">
        <img
          src={Cart.ImgSrc}
          height="100"
          width="100"
          className="img-fluid" id="img-fluid"alt="Cotton T-shirt" />
      </div>

       
      <div  id="col">
        <h6 className="text-black mb-0">{Cart.Title}</h6>
      </div>
  

      <div className="input-group" id="input-group">
        <button type="button" onClick={decrease} id="controllers" className="input-group-text">-</button>
        <div className="form-control text-center" id="bordercolorblack">{NbrOfProducts}</div>
        <button type="button" onClick={increase} id="controllers" className="input-group-text">+</button>
      </div>
     


      <div  id="col">
        <h6 className="mb-0">L.L {Cart.Price}</h6>
      </div>

      <div className=" text-end" id="col">
       <Pressable onPress={Pressed}>
        <FaTrash />
        </Pressable>
      </div>


      
      <div  id="col">
        <h6 className="mb-0"><b>Total Price : {Cart.Price * NbrOfProducts} L.L</b></h6>
      </div>



      <hr className="my-4" />
      </div>
      
 
  )
}

export default Cart
