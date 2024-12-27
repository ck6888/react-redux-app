import React from 'react';
const User =(props)=>{
    const {data }=props;
    console.log("data",data.name);
    return(
    <div>
        <h1>Name: {data.name}</h1>
        <h1>Age: {data.age}</h1>
    </div>)
}

export default User;