import React from 'react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Best Coffee Shop News",
      date: "2024-03-24",
      image: "/src/assets/background_photo_coffee.jpeg"
    },
    {
      id: 2,
      title: "Coffee Making Techniques",
      date: "2024-03-23",
      image: "/src/assets/background_photo_coffee.jpeg"
    },
    {
      id: 3,
      title: "New Coffee Varieties",
      date: "2024-03-22",
      image: "/src/assets/background_photo_coffee.jpeg"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="category__text font-bold mb-12 text-center">Our latest news</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-black/30 rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{new Date(item.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;