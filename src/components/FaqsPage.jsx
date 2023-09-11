import React, { useState } from "react";
import '../styles/FaqsPage.css'
import desktopImage from "../assets/bg-pattern-desktop.svg"
import mobileImage from "../assets/bg-pattern-mobile.svg"
import box from "../assets/illustration-box-desktop.svg"
import desktopWoman from "../assets/illustration-woman-online-desktop.svg"
import mobileWoman from "../assets/illustration-woman-online-mobile.svg"
import {RiArrowDownSLine} from "react-icons/ri"


export const FaqsPage =()=>{
    const [open, setOpen] = useState([false,false,false,false,false]);
    const [rotation, setRotation] = useState([0,0,0,0,0]);
    const [bold,setBold] = useState([false,false,false,false,false])

    const handleArrowClick=(optionValue)=>{
        const newOpen = open.map((item, index)=>index === optionValue ?!item :false);
        const newRotation = rotation.map((item, index)=> index ===optionValue? (item ===0? -180 :0):0);
        const newBold = bold.map((item, index)=> index === optionValue?!item:false);

        setRotation(newRotation);
        setOpen(newOpen);
        setBold(newBold);
    }

    const rotateStyles =(index)=>(
        {
            transform:`rotate(${rotation[index]}deg)`,
            transition: `transform 0.5s ease`,
        }) 
    
    const questionStyles =(index)=(
        {
            fontWeight :bold[index]? 900:400,
        });
    



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
                        <p className="question" style={questionStyles(0)}>How many team members can I invite?</p>
                        <button style={rotateStyles(0)} onClick={()=>{handleArrowClick(0)}}>
                            < RiArrowDownSLine />
                        </button> 
                     </div>
                            {open[0]? <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>:""} 
                    </div>
                        <hr />

                    <div className="faqsdiv">
                     <div>
                        <p className="question" style={questionStyles(1)}>What is the maximum file upload size?</p>
                        <button style={rotateStyles(1)} onClick={()=>{handleArrowClick(1)}}>
                            <RiArrowDownSLine className="arrow"/>
                        </button> 
                     </div>
                             {open[1]?<p className="sub">No more than 2GB. All files in your account must fit your allotted storage space</p>:""}
                    </div>
                        <hr />

                     <div className="faqsdiv">
                        <div>
                            <p className="question" style={questionStyles(2)}>How do I reset my password?</p>
                            <button style={rotateStyles(2)} onClick={()=>{handleArrowClick(2)}}>
                                <RiArrowDownSLine className="arrow"/>
                            </button> 
                        </div>
                             {open[2]?<p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>:""}
                     </div>
                        <hr />

                     <div className="faqsdiv">
                      <div>
                        <p className="question" style={questionStyles(3)}>Can I cancel my subscription?</p>
                        <button style={rotateStyles(3)} onClick={()=>{handleArrowClick(3)}}>
                            <RiArrowDownSLine className="arrow"/>
                        </button>  
                      </div>
                             {open[3]?<p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>:""}
                     </div>
                        <hr />

                     <div className="faqsdiv">
                      <div>
                        <p className="question" style={questionStyles(4)}>Do you provide additional support?</p>
                        <button style={rotateStyles(4)} onClick={()=>{handleArrowClick(4)}}>
                            <RiArrowDownSLine className="arrow"/>
                        </button>  
                      </div>
                             {open[4]?<p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>:""}
                    </div>
                        <hr />
            </div>
        </div>
        </div>
    )
}