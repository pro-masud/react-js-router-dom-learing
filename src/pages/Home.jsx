import React from 'react'
import Alert from '../componens/Alert/Alert'

const Home = () => {
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <Alert alertText="this is a text"  types="success" />
            <Alert alertText="this is a Danger Text"  types="danger" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
