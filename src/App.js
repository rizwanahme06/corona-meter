import React, { useEffect } from 'react';
import { useState } from 'react';
import { csv } from 'd3';
import data from '../src/csv_file/covid_data.csv';
import './App.css';
// import Select from 'react-select';


function App() {

  const [country, setcountry] = useState([]);


  useEffect(() => {
    csv(data).then((data) => {
      // console.log(data);
      setcountry(data);
    });
  }, []);

  let unique =[ ...new Set(country.map((item) => {
    return item.Country
  }))];

  const handler = () =>{
    const value= "";
    return value;
  }
  const [value,setValue] = useState( handler);

  const handlerchanger=(e)=>{
   setValue(e.target.value); 
   console.log(e.target.value);
  };

  return (
    <div className="App">
      <div className='card'>
        <header className="header">
          <h1>
            Covid 19 Report
          </h1>
        </header>
        <div className="input-field">
          <div className='select'>
          <h2>Country</h2>
         <select id="country_select" className='country' onChange={handlerchanger} value={value}>
          {unique.map((data)=>(
            <option value={data}>{data}</option>
          ))}
         </select>
         </div>
          <label className='period'>Period:
            <input type="date" name="Period" id='period' />
          </label>
        </div>
        <div className="result">
          <div className='ncasses'>
            <span className='no_ofcases'>
              New Case:
            </span>
            <div className='reno_cases'>
              {/* {coun.New_cases} */}
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
