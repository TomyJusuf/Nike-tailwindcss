import Nav from './components/Nav.jsx'
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Service,
  SelectOffers,
  CustomersReviews,
  Subscribe,
  Footer,
} from './sections/index.js'

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />

      <PopularProducts />
      <SuperQuality />
      <Service />
      <SelectOffers />
      <CustomersReviews />
      <Subscribe />
      <Footer />
    </main>
  )
}
export default App
