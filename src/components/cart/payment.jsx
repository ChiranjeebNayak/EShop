import React from 'react'

function Payment() {
  return (
    <div className='container p-3'>
      <h5 className='card-title text-center lh-lg fw-bold'>Payment</h5>
      <div className='row'>
      <p className="col-6 fw-bold">Total Amount</p>
      <p className="col-6 fw-bold text-end">100.00</p>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button">Pay Online</button>
        <button className="btn btn-primary" type="button">Cash On Delivery</button>
      </div>
    </div>
  )
}

export default Payment