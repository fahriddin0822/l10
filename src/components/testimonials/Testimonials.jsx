import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Best coffee I've ever had! The atmosphere is amazing and staff is super friendly.",
      rating: 5,
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "My go-to place for morning coffee. Their brew is consistently excellent!",
      rating: 5,
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="category__text font-bold mb-12 text-center">Says our customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-black/30 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-400"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;