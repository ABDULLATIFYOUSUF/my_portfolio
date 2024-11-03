import React from 'react'

function Cards({item}) {
  return (
    

      <div className="card bg-primary text-primary-content w-96 md:w-[350px] border h-48">
  <div className="card-body">
    <h1 className="card-title font-bold">{item.name}</h1>
    <h2 className='text-slate-900 font-bold'>{item.Designation}</h2>
    <h3 className='font-bold'>{item.duration}</h3>
  </div>
</div>
     
  )
}

export default Cards
