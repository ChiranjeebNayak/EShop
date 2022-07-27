import React from 'react'
import img from '../../assets/grocery.png'
function cartItem(props) {
  let amount = props.price * props.qnt;
  return (
    <>
      <div className='container mt-2 mb-2' >
        <div className='row border text-center'>
        <div className="col" id="">
          <img src={props.img} alt="" className='img-fluid' style={{"height":"15vh"}}/>
        </div>
        <div className="col fw-bold lh-lg pt-4" id="">{props.itemName}</div>
        <div className="col fw-bold lh-lg pt-4" id="">{props.qnt}</div>
        <div className="col fw-bold lh-lg pt-4" id="">{props.price}</div>
        <div className="col fw-bold lh-lg pt-4" id="">{amount}.00</div>
        </div>
       </div>
    </>
  )
}

export default cartItem