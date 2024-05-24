import React from 'react'

const Alert = ({alertText, types}) => {
   
  return (
    <>
      <p  className={`alert alert-${types} d-flex justify-content-between`}>
        {alertText}<button className='btn-close'></button>
       </p>
    </>
  )
}

export default Alert
