import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mobiledecrementRequest, mobileIncrementRequest } from '../../Store/MobileStore/MobileActions'

const MobileComponent = () => {
    const mobileState=useSelector(state=>state?.mobileReducer?.mobiles)
    const [mobile, setMobile]=useState({
        buyMobile:0,
        sellMobile:0
    })
    const {buyMobile,sellMobile}=mobile
    // console.log(buyMobile,sellMobile)
    const handleChange=e=>{
        setMobile({...mobile, [e.target.name]:e.target.value})
    }
    const dispatch=useDispatch()

  return (
    <div>No of available mobiles &nbsp; &nbsp;
        {mobileState} <br/>
        <label htmlFor='id_buyMobile'>buyMobile </label>
        <input id="id_buyMobile" type="number"  name="buyMobile" value={buyMobile} onChange={e=>handleChange(e)}/> &nbsp; &nbsp;
        <button onClick={()=>dispatch(mobileIncrementRequest(buyMobile))}>buy_Mobile</button> <br/>
        <label htmlFor='id_sellMobile'>sellMobile </label>
        <input id='id_sellMobile' type="number"  name="sellMobile" value={sellMobile} onChange={e=>handleChange(e)}/> &nbsp; &nbsp;
        <button onClick={()=>dispatch(mobiledecrementRequest(sellMobile))}>sell_Mobile</button>
    </div>
  )
}

export default MobileComponent;