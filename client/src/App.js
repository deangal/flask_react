import React, { useEffect,useState } from 'react'
import axios from "axios"
function App() {


  const [data, setData] = useState()

  useEffect(async() => {
    var config = {
      method: 'get',
      url: 'http://127.0.0.1:5000/members',
      headers: { 
          'Content-Type': 'application/json'
      },
      data : data
      };
  
      await axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
      console.log(error);
      });
  

  }, [])  
  console.log(data);


  return (
    <div>
    {data != undefined ? data.members.map( (item,index) => (
      <div key={index}>{item.name}</div>
    )): "loading"}
    </div>
  )
}


export default App