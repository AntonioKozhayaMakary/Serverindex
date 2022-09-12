import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


const ProductSingle = ({ Product , Pressed }) => {

 

    return (
        <div className="col"  >
            <div className="card shadow-sm">
                <img src={Product.ImgSrc} />
                <div className="card-body">
                    <p className="card-text"><b>{Product.Title}</b></p>
                    <p className="card-text">{Product.Descr.slice(0, 100)}</p>
                    <p className="card-text"><b>{Product.Price} L.L</b></p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" id="btn" className="btn btn-sm btn-outline-secondary" onClick={Pressed} >Add Now</button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export {ProductSingle}
