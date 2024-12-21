import React, { useState } from 'react';

export default function Tab() {
    const [accrdion, setAccrdion] = useState([
        {title: 'title1', content:'content1'}, 
        {title: 'title2', content:'content2'}, 
        {title: 'title3', content:'content3'},
        {title: 'title4', content:'content4'}, 
        {title: 'title4', content:'content4'}, 
        {title: 'title4', content:'content4'}, 
        {title: 'title4', content:'content4'}, 
        {title: 'title4', content:'content4'},
        {title: 'title4', content:'content4'}, 
        {title: 'title4', content:'content4'}, 
        {title: 'title4', content:'content4'}, 
        {title: 'title4', content:'content4'}
    ])
    
    const [accIndex, setAccIndex] = useState(0);

    const tabEvent = (key)=> {
        setAccIndex(key)
    }
    
  return (
      <div>
          <h1>Accordion</h1>
          <div id="tabContainer">
              { accrdion && accrdion.map((tab, key) => 
                <div className="tabcontent" key={key}>
                    <h3 onClick={()=>tabEvent(key)} style={{padding: '10px', border:'1px solid #000', margin:'0px 5px 0px 5px'}}>{tab.title}</h3>
                    { key === accIndex &&
                      <p style={{padding: '10px', border:'1px solid #000', margin:'0px 5px 0px 5px'}}>{tab.content}</p>
                    }
                </div>
              ) }
          </div>
      </div>
      
  )
}