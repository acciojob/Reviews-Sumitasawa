import React from 'react'
import Review from './Review'
const App = () => {

   
  return (
    <main>
      <section className='container'>
      <div className="title">
          <h2 id="review-heading">Our Reviews</h2>
          <div className="underline"></div>
        </div>
      <Review></Review>
      </section>
    </main>
  )
}

export default App
