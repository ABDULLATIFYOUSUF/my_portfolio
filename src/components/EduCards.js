import React from 'react'

function EduCards({Eduitem}) {
  return (
    

      <div className="card bg-primary text-primary-content w-96 md:w-[350px] border h-48">
  <div className="card-body">
    <h1 className="card-title font-bold">{Eduitem.qual}</h1>
    <h2 className='text-slate-900 font-bold'>{Eduitem.school}</h2>
    <h3 className='font-bold'>{Eduitem.duration}</h3>
  </div>
</div>
    
  )
}

export default EduCards
