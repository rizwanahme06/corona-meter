import React, { useEffect } from 'react';
import { useState } from 'react';
import { csv } from 'd3';
import data from '../src/csv_file/covid_data.csv';
import './App.css';
// import Select from 'react-select';


function App() {

  const [country, setcountry] = useState([]);
  const [datafilter, setDatafilter] = useState([]);
  const [searchid, setSearchid] = useState(" ")


  useEffect(() => {
    csv(data).then((data) => {
      // console.log(data);
      setcountry(data);
    });
  }, []);

  let unique = [...new Set(country.map((item) => {
    return item.Country
  }))];

  const handle = (event) => {
    const search = event.target.value;

    setSearchid(search);
    if (search !== ' ') {
      const filtercountry = country.filter((item) => {
        return item.include(search)
      })

      setDatafilter(filtercountry);
    }

    else {
      setDatafilter(country);
    }
  }



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
            <select id="country_select" className='country' onChange={(e) => { handle(e) }}>
              {unique.map((data) => (
                <option key={data.id} value={data.id}>{data}</option>
              ))}
            </select>
          </div>
          <label className='period'>Period:
            <input type="date" name="Period" id='period'
              min="2020-01-03" max="2022-09-16" onChange={(e) => { handle(e) }} />
          </label>
        </div>

        {
          searchid.length > 1 ? (
            datafilter.map((fullcountry, fullperiod) => (
              <div className="result" key={fullperiod}>
                <div className='ncasses'>
                  <span className='no_ofcases'>
                    New Case:
                  </span>
                  <div className='reno_cases'>
                    {fullcountry.New_cases}
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
                    {fullcountry.Cumulative_cases}
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
            ))
            ): (
              country.map((count,full)=>(
                <div className="result" key={full}>
                <div className='ncasses'>
                  <span className='no_ofcases'>
                    New Case:
                  </span>
                  <div className='reno_cases'>
                    {count.New_cases}
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
                    {count.Cumulative_cases}
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
              ))
            )
        }
      </div>
    </div>
  );
}

export default App;
