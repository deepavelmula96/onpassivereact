import React from 'react'
import _ from 'lodash';

const DayTen = () => {
let objA={
    name:"onpassive_outter1",
    newName:{
        name:'onpassive_innerValue2'
    },
    // problem with stringify
    date:new Date(),// convert to string 
    data:undefined // dispeaar
}
// let objB= JSON.parse(JSON.stringify(objA)) 
let objB= _.cloneDeep(objA)
objA.name="react_innerValue11"
objA.newName.name="react_innerValue22"
objA.date=new Date()
console.log("objA",objA)
console.log("objB",objB)
// Deep copy
// var deepCopy = _.cloneDeep(obj);
// console.log("deepacopy",deepCopy)
  return (
    <div>DayTen</div>
  )
}

export default DayTen