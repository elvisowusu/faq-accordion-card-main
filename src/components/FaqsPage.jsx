import React from "react";
import '../styles/FaqsPage.css'
import desktopImage from "../assets/bg-pattern-desktop.svg"
import mobileImage from "../assets/bg-pattern-mobile.svg"
import box from "../assets/illustration-box-desktop.svg"
import desktopWoman from "../assets/illustration-woman-online-desktop.svg"
import mobileWoman from "../assets/illustration-woman-online-mobile.svg"
import {IoIosArrowDropdown} from "react-icons/io"


export const FaqsPage =()=>{
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
                    <div><p className="question">How many team members can I invite?</p><button><IoIosArrowDropdown/></button> </div>
                             <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <hr />
                    </div>

                    <div className="faqsdiv">
                    <div><p className="question">What is the maximum file upload size?</p><button><IoIosArrowDropdown/></button>  </div>
                             <p className="sub">No more than 2GB. All files in your account must fit your allotted storage space</p>
                        <hr />
                     </div>

                     <div className="faqsdiv">
                        <div><p className="question">How do I reset my password?</p><button><IoIosArrowDropdown/></button>  </div>
                             <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <hr />
                     </div>

                     <div className="faqsdiv">
                     <div><p className="question">Can I cancel my subscription?</p><button><IoIosArrowDropdown/></button>  </div>
                             <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <hr />
                     </div>

                     <div className="faqsdiv">
                     <div><p className="question">Do you provide additional support?</p><button><IoIosArrowDropdown/></button>  </div>
                             <p className="sub">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <hr />
                     </div>
            </div>
        </div>
        </div>
    )
}