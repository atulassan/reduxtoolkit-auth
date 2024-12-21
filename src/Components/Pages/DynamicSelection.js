import React, { useState } from 'react';
/*
title 1
title content 1
 
title 2
title content 2
 
title 3
title content 3
*/
const coutries = [
        {country: 'India', cities:['Chennai', 'Bangalore', 'Cochi']}, 
        {country: 'Pakistan', cities:['kabul', 'Lahore', 'Karachi', 'Islamabad']}
    ];

export default function App() {
    const [citiesList, setCitiesList] = useState(coutries[0]['cities'])
    const [cntry, setCntry] = useState(coutries[0]['country']);
    
  return (
      <div>
          <h1>test</h1>
          <div id="tabContainer">
                <div id="country">
                     <select onChange={(e)=>{
                            setCntry(e.target.value);
                            let cities = coutries.filter((item) => {
                                 return item.country === e.target.value   
                            })
                            setCitiesList(cities[0]['cities']);
                            }}>
                              { coutries && coutries.map((item, key)=> 
                                  <option value={item.country}>{item.country}</option>
                              )}
                    </select>
                    </div> 
                     <div id="cities" style={{padding:'20px 0px 0px 0px'}}>
                         <select>
                              { citiesList.map((item, key)=> 
                                  <option value={item}>{item}</option>
                              )}
                    </select>
                     </div>
          </div>
      </div>
      
  )
}