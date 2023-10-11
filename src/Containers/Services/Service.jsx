import React from 'react'
import Card from '../../Components/Card/Card';
import Data from '../../Components/Data/Data';
import "./Service.scss";
function Service() {
  return (
    <>
    <div className='my-5'>
   <h1 className='tab-center'>Our Services</h1>
    </div>
    <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                  <div className='row gy-4'>
                  {Data.map((val, index)=>{
                    return<Card key={index} img={val.img} title={val.title}/>
                  })}
                  </div>
                </div>
                </div>
                </div>
    </>
  )
}

export default Service