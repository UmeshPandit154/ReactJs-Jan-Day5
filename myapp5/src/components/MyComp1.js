//1. Import Area

import MyComp2 from "./MyComp2";


//2. Functional Component defination area
function MyComp1(){
    //Every function return something
    return <h1>OKLABS2<MyComp2 /></h1>;
}


//3. Export Area
//I can export anything. function,class,variable,array

//3.1 Default Export

export default MyComp1;