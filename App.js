import React, { createElement } from "react";
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import BodyContainer from "./src/components/BodyContainer";
import Footer from "./src/components/Footer";


const Applayout = () =>{
    return(
        <div className="root"> 
            <Header />
            
            <BodyContainer  />
            <Footer />
        </div>
    )   
}




const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<Applayout />)