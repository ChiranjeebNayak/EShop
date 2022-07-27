import React from 'react'
import Layout from '../components/layout/layout'
import CartItem from '../components/cart/cartItem'
import Payment from '../components/cart/payment'
import Address from '../components/cart/address'
import Data from '../assets/cart.json'
function Cart() {
let amount=100.00;
let taxAmount = ((amount*5.00)/100.00);
let totalAmount = amount + taxAmount;
let cartSize = Data.length;
  return (
    <Layout>
      <div className='container '>
        <div className='row border'>
          <div className="col-lg-8 col-md-12">
            <div className='container '>
              <div className='p-3'>
                <h5 className='fw-bold lh-lg mt-3 mb-5'>Shopping Cart ({cartSize} item in your cart)</h5>
                {Data.map((item) => {
                  return (
                    <CartItem key={item.itemNo} img={item.itemImg} itemName={item.itemName} qnt={item.itemQuantity} price={item.ItemPrice} />
                  );
                })}
              </div>
            </div>
            <div className='container'>
              <div className='row'>
                <p className="col-6 fw-bold text-end ">Amount</p>
                <p className="col-6 fw-bold text-end ">{amount}.00</p>
                <p className="col-6 fw-bold text-end ">Tax</p>
                <p className="col-6 fw-bold text-end ">{taxAmount}.00</p>
                <p className="col-6 fw-bold text-end border">Total Amount</p>
                <p className="col-6 fw-bold text-end border">{totalAmount}.00</p>
              </div>

            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <Address />
            {/* <Payment /> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart