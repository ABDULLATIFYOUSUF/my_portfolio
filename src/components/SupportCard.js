import React from 'react'

function SupportCard({item}) {
  return (
        <div className="card card-compact bg-base-100 w-fit mx-5 h-[500px] mb-10 shadow-xl">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.Description}</p>
    <div className="card-actions justify-end">
      <a href={item.URL} target='_blank' className="btn btn-primary">View</a>
    </div>
  </div>
</div>
  )
}

export default SupportCard
