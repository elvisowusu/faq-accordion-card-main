import React, { useState } from "react";
import '../styles/FaqsPage.css'
import desktopImage from "../assets/bg-pattern-desktop.svg"
import mobileImage from "../assets/bg-pattern-mobile.svg"
import box from "../assets/illustration-box-desktop.svg"
import desktopWoman from "../assets/illustration-woman-online-desktop.svg"
import mobileWoman from "../assets/illustration-woman-online-mobile.svg"
import {RiArrowDownSLine} from "react-icons/ri"


export const FaqsPage =()=>{
    const [open, setOpen] = useState(false);
    const [rotation, setRotation] = useState(0);

    const handleArrowClick=(list)=>{
        setRotation(list);
        setOpen(!open);
    }

    const rotateArrow=(optionValue) =>{
        return optionValue ===rotation?
        {transform:`rotate(${180}deg)`,
        transition: `transform ${0.5}s ease`,}:{};
    }
    




    return(
        <div className="relative">
        
        <div className="mainPage">

            <div className="picture">
                <img className="desktopImg" src={desktopImage} alt="" />
                <img className="desktopWoman" src={desktopWoman} alt="" />
            </div>
                <img className="box" src={box} alt="" />
            <div className="faqs">
                <h1>FAQ</h1>
                    <div className="faqsdiv">
                     <div>
                        <p className="question">How many team members can I invite?</p>
                        <button style={rotateArrow(1)} onClick={()=>{handleArrowClick(1)}} >
                            < RiArrowDownSLine className={`arrow ${open && rotaa ===1? 'open' :''}`}/>
                        </button> 
                     </div>
                            {open && list === 1? <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>:""} 
                        <hr />
                    </div>

                    <div className="faqsdiv">
                     <div>
                        <p className="question">What is the maximum file upload size?</p>
                        <button style={rotateArrow(2)} onClick={()=>{handleArrowClick(2)}}>
                            <RiArrowDownSLine className="arrow"/>
                        </button> 
                     </div>
                             <p className="sub">No more than 2GB. All files in your account must fit your allotted storage space</p>
                        <hr />
                    </div>

                     <div className="faqsdiv">
                        <div>
                            <p className="question">How do I reset my password?</p>
                            <button style={rotateArrow(3)} onClick={()=>{handleArrowClick(3)}}>
                                <RiArrowDownSLine className="arrow"/>
                            </button> 
                        </div>
                             <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <hr />
                     </div>

                     <div className="faqsdiv">
                      <div>
                        <p className="question">Can I cancel my subscription?</p>
                        <button style={rotateArrow(4)} onClick={()=>{handleArrowClick(4)}}>
                            <RiArrowDownSLine className="arrow"/>
                        </button>  
                      </div>
                             <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <hr />
                     </div>

                     <div className="faqsdiv">
                      <div>
                        <p className="question">Do you provide additional support?</p>
                        <button style={rotateArrow(5)} onClick={()=>{handleArrowClick(5)}}>
                            <RiArrowDownSLine className="arrow"/>
                        </button>  
                      </div>
                             <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <hr />
                    </div>
            </div>
        </div>
        </div>
    )
}