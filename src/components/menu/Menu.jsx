import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Americano malted grad',
      price: '5.99',
      image: '/src/assets/background_photo_coffee.jpeg'
    },
    {
      id: 2,
      name: 'Americano malted grad',
      price: '5.99',
      image: '/src/assets/background_photo_coffee.jpeg'
    },
    {
      id: 3,
      name: 'Americano malted grad',
      price: '5.99',
      image: '/src/assets/background_photo_coffee.jpeg'
    },
    {
      id: 4,
      name: 'Americano malted grad',
      price: '5.99',
      image: '/src/assets/background_photo_coffee.jpeg'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Coffee popular menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-black/30 rounded-lg">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-400">Best coffee in town</p>
                </div>
              </div>
              <span className="text-xl font-bold">${item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;