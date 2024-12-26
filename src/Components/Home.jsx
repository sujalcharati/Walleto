import React from "react";
import Alltransaction from "./Alltransaction";
import Addtransaction from "./Addtransaction";
import { Header } from "./Header";
export const Home = ()=>{
    return(
        <div>
            <Header/>
            <Alltransaction/>
            <Addtransaction/>
        </div>
    )
}