import React from 'react'

const Hotels = ({imgsrc,title,description,price,btn}) => {
  return (
    <div>
      <>

      <div className="hotel-cards">
          <img src={imgsrc} alt="" />
          <h2 className='img-heading' >{title}</h2>
          <p className='img-para'>{description}</p>
          <h3>{price}</h3>
          <button>{btn}</button>
        </div>
      
      
      
      
      
      </>
    </div>
  )
}

export default Hotels
