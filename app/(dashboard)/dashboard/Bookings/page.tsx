import React from 'react';
const BookingPage = () => {
  // Define an array of booking objects
  const bookings = [
    {
      image: "/images/Harrow.jpg",
      customerName: 'Moses Kuria',
      equipmentName: 'Tractor',
      dateBooked: '2023-10-01',
      dateReturned: '2023-10-15',
      category: 'Farming',
    },
    {
      image: "/images/chaffcutter.png",
      customerName: 'Alice Johnson',
      equipmentName: 'Harvester',
      dateBooked: '2023-09-15',
      dateReturned: '2023-09-30',
      category: 'Dairy',
    },
    {
      image: "/images/hand tractor.png",
      customerName: 'Alice Johnson',
      equipmentName: 'Harvester',
      dateBooked: '2023-09-15',
      dateReturned: '2023-09-30',
      category: 'Farming',
    },
    {
      image: "/Images/Dairy4.png",
      customerName: 'Alice Meant',
      equipmentName: 'Wheelbarrow',
      dateBooked: '2023-09-15',
      dateReturned: '2023-09-30',
      category: 'Farm',
    },
    {
      image: "/Images/Dairy9.png",
      customerName: 'Sylvia Mueni',
      equipmentName: 'Harvester',
      dateBooked: '2023-09-15',
      dateReturned: '2023-09-30',
      category: 'Dairy',
    },
    {
      image: "/Images/Farm11.png",
      customerName: 'Ivy Njoki',
      equipmentName: 'Harvester',
      dateBooked: '2023-09-15',
      dateReturned: '2023-09-30',
      category: 'Dairy',
    },
    {
      image: "/Images/Poult4.png",
      customerName: 'Faith Omenta',
      equipmentName: 'Harvester',
      dateBooked: '2023-09-15',
      dateReturned: '2023-09-30',
      category: 'Dairy',
    },
    {
      image: "/disc.png",
      customerName: 'Emilly kuan',
      equipmentName: 'Harvester',
      dateBooked: '2023-09-15',
      dateReturned: '2023-09-30',
      category: 'Dairy',
    },
  ];
  return (
    <div className="min-h-screen flex items-center justify-center ml-64">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {bookings.map((booking, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <img
              src={booking.image}
              alt="Equipment"
              className="w-full h-auto rounded-lg"
            />
            <div className="text-left">
              <div className="pb-4"> {/* Add padding to this div */}
                <h1 className="text-xl font-semibold">{booking.customerName}</h1>
                <p className="text-gray-600">Equipment: {booking.equipmentName}</p>
                <p className="text-gray-600 text-sm">Date Booked: {booking.dateBooked}</p>
                <p className="text-gray-600 text-sm">Date Returned: {booking.dateReturned}</p>
                <p className="text-gray-600 text-sm">Category: {booking.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BookingPage;







