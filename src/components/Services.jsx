import ServicesCard from './ServicesCard';
import { servicesData } from '../utils/servicesData';

export default function Services() {
  return (
    <section id='services' className="py-48 bg-green-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServicesCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}