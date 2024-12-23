import ServiceCard from '../components/ServiceCard'
import { services } from '../constants/index.js'
const Services = () => {
  return (
    <section className="padding max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <ServiceCard {...service} key={index} />
      ))}
    </section>
  )
}

export default Services
