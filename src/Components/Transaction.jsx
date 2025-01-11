import React from "react";
import { Header } from "./Header";


export default  function Transaction(){
    return (
        <div className="bg-black min-h-screen">
            < Header/>
            <div className="text-white text-4xl"> Transactions history
            </div>
            
        </div>
    )
}