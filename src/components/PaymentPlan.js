import React, { Fragment,useState } from 'react';
import Navbar from './Navbar';
import Icon from '../assets/images/Icon.png';
import Icon1 from '../assets/images/Icon-1.png';
import Icon2 from '../assets/images/Icon-2.png';
import Icon3 from '../assets/images/Icon-3.png';
import Razorpay from '../assets/images/Razorpay-Icon.png';
import {TbClockExclamation} from "react-icons/tb";

function PaymentPlan() {

  const [memberShip, setMemberShip] = useState(0);
  const [flag, setFlag] = useState(true)


  const countHandler = (event) => {
    // console.log(event,"---------------rtr");
    if(event){
      setMemberShip(event)
      setFlag(!flag)

    }else{
      setMemberShip(0)
      setFlag(!flag)
    }
  }

  const paymentSubmitHandler = () =>{
    alert(`We've confirmed your ₹ ${memberShip} payment. can you want to continue.`)
  }

  return (
    <Fragment>
      <Navbar />
        <div className='main-container'>
          <div className='left-container'>
            <h1><p>Access curated courses worth</p> 
            <span style={{textDecoration:'line-through',textDecorationColor:"red"}}>₹ 18,500</span> at just <span className='text-color'>₹ 99</span> per year!</h1>
            <div className='pargraph1'>
              <img src={Icon} className="pargraph1-icon" alt="icon" />
              <a><span className='text-blue'>100+</span> Job relevant courses</a>
            </div>
            <div className='pargraph1'>
              <img src={Icon1} className="pargraph1-icon" alt="icon" />
              <a><span className='text-blue'>20,000+</span>  Hours of content</a>
            </div>
            <div className='pargraph1'>
              <img src={Icon2} className="pargraph1-icon" alt="icon" />
              <a><span className='text-blue'>Exclusive</span>  webinar access</a>
            </div>
            <div className='pargraph1'>
              <img src={Icon3} className="pargraph1-icon" alt="icon" />
              <a>Scholarship worth<span className='text-blue'> ₹94,500</span></a>
            </div>
            <div className='pargraph1'>
              <img src={Icon3} className="pargraph1-icon" alt="icon" />
              <a><span className='text-blue'>Ad Free</span> learning experience</a>
            </div>
          </div>
          <div className='right-container'>
            <form>
              <div className='progress-bar'>
                <p className='stage'><div className='circle'>1</div>Sign UP</p>
                <p className='stage'><div className='circle'>2</div>Subscribe</p>
              </div>
              <h6 className='form-header'>Select your subcription plan</h6>
              <div className='input-container-disable'>
                <div className='text-container'>
                  <input type="radio" id="radioButton" name="radioGroup" value="option" style={{fontSize:"15px",width:"20px",height:"20px",marginRight:"8px"}} disabled checked/>
                  <span className='text-field'>12 Months Subscription </span>
                </div>
                <div className='right-text-container'>
                  <p className='top-text'>Total <span style={{fontSize:"11px",fontWeight:"700"}}> ₹99</span></p>
                  <span className='bottom-text'>₹8<span style={{color:"#BEBEBE",fontWeight:"400"}}> /mo</span></span>
                </div>
              </div>

              <div className='input-container'>
                <div className='text-container'>
                  <input type="checkbox" id="checkbox" className='option-input' value="174" checked={memberShip === "174"}  onClick={(e)=>countHandler(e.target.value,flag)}/>
                  <span className='text-field'>12 Months Subscription </span>
                </div>
                <div className='right-text-container'>
                  <p className='top-text'>Total <span style={{fontSize:"11px",fontWeight:"700"}}> ₹174</span></p>
                  <span className='bottom-text'>₹15<span style={{color:"#BEBEBE",fontWeight:"400"}}> /mo</span></span>
                </div>
              </div>

              <div className='input-container'>
                <div className='text-container'>
                <input type="checkbox" id="checkbox" className='option-input' value="149" checked={memberShip === "149"} onClick={(e)=>countHandler(e.target.value,flag)}/>
                <span className='text-field'>6 Months Subscription </span>
                </div>
                <div className='right-text-container'>
                  <p className='top-text'>Total <span style={{fontSize:"11px",fontWeight:"700"}}> ₹149</span></p>
                  <span className='bottom-text'>₹25<span style={{color:"#BEBEBE",fontWeight:"400"}}> /mo</span></span>
                </div>
              </div>

              <div className='input-container'>
              <div className='text-container'>
                <input type="checkbox" id="checkbox" className='option-input' value="99" checked={memberShip === "99"} onClick={(e)=>countHandler(e.target.value,flag)}/>
                <span className='text-field'>3 Months Subscription </span>
                </div>
                <div className='right-text-container'>
                  <p className='top-text'>Total <span style={{fontSize:"11px",fontWeight:"700"}}> ₹99</span></p>
                  <span className='bottom-text'>₹33<span style={{color:"#BEBEBE",fontWeight:"400"}}> /mo</span></span>
                </div>
                
              </div>
              {/* ---------------------------hr line start */}
              <div className='hr'></div>
              {/* ---------------------------hr line end */}

              {/* ---------------------------summery container start */}
              <div className='summery-container'>
                <span className='text-field'>Subscription Fee </span>
                  <p className='top-text'>Total <span style={{fontSize:"11px",fontWeight:"700"}}> ₹18,500 </span></p>
              </div>

              <div className='alert-container'>
                <div className='text-conatiner'>
                  <p className='alet-text'>Limited time offer</p>
                  <p className='alert-down-text'><i><TbClockExclamation/></i><span>Offer valid till 25th March 2023</span></p>
                </div>
                <p className='top-text'><span style={{fontSize:"11px",fontWeight:"700"}}> -₹18,401 </span></p>
              </div>

              <div className='summery-container'>
                <span className='text-field'>Total <span style={{fontWeight:"400"}}>(Incl. of 18% GST)</span></span>
                <span style={{fontSize:"14px",fontWeight:"700",color:"#3C4852",fontFamily:"Roboto"}}>₹{memberShip} </span>
              </div>

              <div className='button-container'>
                <button className='secondary-button'>Cancel</button>
                <button className='primery-button' onClick={paymentSubmitHandler}>proceed to pay</button>

              </div>

              <div className='button-container'>
              <img src={Razorpay} className="Razorpay-container" alt="Razorpay" />

              </div>
             
            </form>
           
          </div>
        </div>
    </Fragment>
  )
}

export default PaymentPlan