import React from 'react'
import './PropertyList.css'

const PropertyList = () => {
  return (
    <div className='mt-20 px-6 md:px-60 w-full'>
      <h1 className='font-bold text-xl md:text-2xl my-5'>Browse by property type</h1>
      <div className='grid grid-cols-1 md:grid-cols-5'>

        <div className='propertyDiv'>
        <div className='propertyImg rounded-lg hover:opacity-90'>
        <img className='w-full' src="https://q-xx.bstatic.com/xdata/images/hotel/max500/290409968.jpg?k=8f26fbcf79b93fc803ab01a8b53d379099a900518b591d23ac773356f0df19d4&o=" alt=""/>
        </div>
            
            <h1 className='propertyType'>Hotels</h1>
            <h3 className='propertyDetails'>789 hotels</h3>
        </div>

        <div className='propertyDiv'>
        <div className='propertyImg rounded-lg hover:opacity-90'>
        <img className='w-full' src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""/>
        </div>
            
            <h1 className='propertyType'>Apartments</h1>
            <h3 className='propertyDetails'>565 apartments</h3>
        </div>

        <div className='propertyDiv'>
        <div className='propertyImg rounded-lg hover:opacity-90'>
        <img className='w-full' src="https://media.istockphoto.com/id/536048545/photo/tropical-resort.jpg?s=612x612&w=0&k=20&c=TR9a_ToayikLVagrZlq8ebvZFRZx_WH25q9_9m884Jk=" alt=""/>
        </div>
            
            <h1 className='propertyType'>Hotels</h1>
            <h3 className='propertyDetails'>455 resorts</h3>
        </div>

        <div className='propertyDiv'>
        <div className='propertyImg rounded-lg hover:opacity-90'>
        <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoqWnXu27uVIyayR5EJdsqlE2Gc_3ASA90zUu2YO43TLm9mgiK5tRoGHyJ_dgbgJoxkQI&usqp=CAU" alt=""/>
        </div>
            
            <h1 className='propertyType'>Villas</h1>
            <h3 className='propertyDetails'>364 villas</h3>
        </div>

        <div className='propertyDiv'>
        <div className='propertyImg rounded-lg hover:opacity-90'>
        <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyBqikHS-zlCpf01q8wV6l-ZKI2l26SltTg&usqp=CAU" alt=""/>
        </div>
            
            <h1 className='propertyType'>Cabins</h1>
            <h3 className='propertyDetails'>118 cabins</h3>
        </div>

      </div>
    </div>
  )
}

export default PropertyList
