import React from 'react'
import img from '../../assets/grocery.png'
import Style from './style.module.css'
function Item(props) {
    let count=0;
    return (
            <div className={`col-4 border p-3`}>
                <div className='text-center'>
                    <img className={`img-fluid ${Style.cardimg}`} src={props.img} />
                </div>
                <div className="card-body">
                    <h4 className="card-title  m-2">{props.itemName}</h4>
                    <div className='row'>
                        <div className="col-6">
                            <p className="card-text">Price <span>{props.price}</span></p>
                        </div>
                        <div className="col-6">
                            <div className="row border border-danger bg-danger">
                                <button className='col-4 btn'>+</button>
                                <span className='col-4 text-center mt-2'>{count}</span>
                                <button className='col-4 btn '>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-6">
                            <button className={`btn btn-primary ${Style.btnbuy}`} type="submit">Buy</button>
                        </div>
                        <div className="col-6">
                            <button className={`btn btn-success  ${Style.btncart}`} type="submit">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Item