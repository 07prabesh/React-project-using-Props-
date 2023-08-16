import React from 'react';
import './App.css';
import Hotels from './Hotels';
import HotelData from './HotelData';

const App = () => {
  return (
    <div>
      <>
      <div className="container">
        <h1 className='heading'>Hotel Rooms</h1>

        {HotelData.map((values)=>{
          return(
            <>
               <Hotels
                imgsrc={values.imgsrc}
                title={values.title}
                description={values.description}
                price={values.price}
                btn={values.btn}
              
                />
            
            </>
          )
             
        
          
        })}


  


       


        

        

      </div>
      
      
      
      
      
      </>
    </div>
  )
}

export default App
