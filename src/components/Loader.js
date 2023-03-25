import React from 'react'
import Loading from "./loading.gif"
function Loader() {
  return (
    <div>
      <div className="d-flex justify-content-center"> <img src={Loading} alt="" /></div>
      
    </div>
  )
}

export default Loader
