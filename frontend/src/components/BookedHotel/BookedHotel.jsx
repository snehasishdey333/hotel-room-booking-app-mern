// import { useContext } from "react"
// import { UserContext } from "../../Context/UserContext"

const BookedHotel = ({booking}) => {

    // const {user}=useContext(UserContext)
    // console.log(user)

  return (
    <div className="bg-gray-200 w-full flex p-4 space-x-4 rounded-md">
                    <div className="w-[30%] rounded-md">
                        <img className="rounded-md" src={booking.image} alt="hotel image" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-bold text-xl text-[#003580]">{booking.name}</h2>
                      <p className="text-lg text-black">{booking.address}</p>
                      <h3 className="text-xl text-black font-bold">${booking.price}</h3>
                      <div className="flex space-x-4">
                      <p className=" text-black text-lg">{booking.member} People</p>
                      <p className=" text-black text-lg">{booking.duration} Nights</p>
                      </div>
                      <p className=" text-black text-lg font-semibold">{booking.checkIn} - {booking.checkOut}</p>
                    </div>
                  </div>
  )
}

export default BookedHotel
