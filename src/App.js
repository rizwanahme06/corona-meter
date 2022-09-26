import React, { useEffect } from 'react';
import { csv } from 'd3';
import  data from '../src/covid_data.csv';
import './App.css';

function App() {
  useEffect(() => {
    // let i = 0;
    let arr =[];
    csv(data, function (data)  {  
      
    for (let key in data){
      arr.push([key,data[key]])
    }
    });
    console.log(arr);
  }, [])
  
  // let i = 0;
  // csv(data, function (data)  {  
  //      let arr =[];
  // for (let key in data){
  //   arr.push([key,data[key]])
  // }
  // console.log(arr);
  // i++;});
  




  return (
    <div className="App">
      <div className='card'>
        <header className="header">
          <h1>
            Covid 19 Report
          </h1>
        </header>
        <div className="input-field">
          <label className='country'>Country: <input type="text" name="country" id="country" /></label>
          <label className='period'>Period:  <input type="text" name="Period" id='period' /></label>
        </div>
        {
          // data.map((item)=>{
          //   <div className="result">
          //   <div className='ncasses'>
          //     <span className='no_ofcases'>
          //       New Case:
          //     </span>
          //     <div className='reno_cases'>
          //       {item.New_cases}
          //     </div>
          //   </div>
          //   <div className='tcasses'>
          //     <span className='to_ofcases'>
          //       Total Cases:
          //     </span>
          //     <div className='reto_cases'>

          //     </div>
          //   </div>
          //   <div className='ncasseu'>
          //     <span className='n_ofcaseu'>
          //       New Casualties:
          //     </span>
          //     <div className='ren_caseu'>
          //       {item.Cumulative_cases}
          //     </div>
          //   </div>
          //   <div className='tcasseu'>
          //     <span className='t_ofcaseu'>
          //       Total Casualties:
          //     </span>
          //     <div className='ret_caseu'>
          //       {}
          //     </div>
          //   </div>
          // </div>
          // })
          // JSON.stringify{data};
        }
        <div className="result">
        <div className='ncasses'>
          <span className='no_ofcases'>
            New Case:
          </span>
          <div className='reno_cases'>
            0
          </div>
        </div>
        <div className='tcasses'>
          <span className='to_ofcases'>
            Total Cases:
          </span>
          <div className='reto_cases'>

          </div>
        </div>
        <div className='ncasseu'>
          <span className='n_ofcaseu'>
            New Casualties:
          </span>
          <div className='ren_caseu'>

          </div>
        </div>
        <div className='tcasseu'>
          <span className='t_ofcaseu'>
            Total Casualties:
          </span>
          <div className='ret_caseu'>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
