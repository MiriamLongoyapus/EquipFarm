import Graph from './Graph/page'
import BookingPage from './Bookings/page'
import ProductList from './Catalog/page'

export default function Home() {
  return (
    <div>
      <Graph/>
      <BookingPage/>
      <ProductList/>
    </div>
  )
}
