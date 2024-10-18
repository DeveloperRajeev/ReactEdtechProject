import React from "react";
//https://github.com/DeveloperRajeev/ReactEdtechProject
import data from '../data.json';
import StyleMeetingComp from "./Styledmeeting";

export default function Meeting({userName}) {


 const EmailInput = (data, key, userName)=> {
  if (userName === "sanjeevMishra@gmail.com")
    {
      return data.filter((item)=>(item[key]==="sanjeevMishra@gmail.com"))
    }

  if (userName === "jaimaasharda1998@gmail.com"){
  
  return data.filter((item)=>(item[key] === "jaimaasharda1998@gmail.com"
  )) }
 };

 const filteredData = EmailInput(data,"email", userName);
 console.log(userName)
 console.log(filteredData);
 return (
  <StyleMeetingComp>
      <h1>Meeting scheduled</h1>
      {filteredData.map((item)=>(
        <div key={item.email}>
          <p> Name : {item.Name} </p>
          <p>grade : {item.Grade}</p>
          
          <a href={item.Name} target="_blank" rel="noopener noreferrer">
           Join Meeting
        </a>



          </div>








      ))}
    </StyleMeetingComp>
  )
}
 