const Booking = () => {
  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="category__text font-bold mb-12 text-center">Booking a table</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/src/assets/background_photo_coffee.jpeg"
              alt="Store location"
              className="w-full h-full object-cover"
            />
          </div>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-black/50 rounded-lg border border-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-black/50 rounded-lg border border-gray-700 text-white"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 bg-black/50 rounded-lg border border-gray-700 text-white"
            />
            <button className="w-full bg-[#C8A27A] hover:bg-[#B88E5F] text-white py-3 rounded-full transition-all duration-300">
              Book A Table
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;