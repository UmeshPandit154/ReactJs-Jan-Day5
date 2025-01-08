//1. Import Area



//1.1 import someDefaultImport from somelocation/somelibrary
import React from "react";
import MyComp3 from "./MyComp3";
//1.2 import { someNamedImport } from somelocation/somelibrary




//2. Function defination area
//we are going to create a functional component
function MyComp2() {
    //Every function return something
    return <span>MyComp2<MyComp3 /></span>

}

//3.Export area

export default MyComp2;