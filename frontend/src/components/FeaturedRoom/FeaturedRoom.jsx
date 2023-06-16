
import './FeaturedRoom.css'

const FeaturedRoom = ({room}) => {
    return (
        <div className='mb-10 hotelDiv'>
            <div className='hotel hover:opacity-90'>
            <img class="hotelImg w-full" src={room.photos[0]} alt=""/>
            </div>
                
                <h1 className='hotelName'>{room.name}</h1>
                <h3 className='hotelLocation'>{room.city}</h3>
                <h3 className='hotelPrice'>Starting from ${room.price}</h3>
                <button className='ratingBtn'>9.9</button>
                <span className='review'>Excellent</span>
            </div>
      )
}

export default FeaturedRoom




