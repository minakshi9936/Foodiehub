export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
         

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-pulse">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-[#FF7A00] mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At FoodieHub, we believe that great food brings people together. For over 20 years,
              we've been serving authentic, handcrafted dishes that celebrate the rich traditions
              of culinary excellence.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our passionate chefs use only the finest locally-sourced ingredients to create
              memorable dining experiences. Every dish tells a story, and every meal is crafted
              with love and attention to detail.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you're celebrating a special occasion or enjoying a casual meal with friends,
              FoodieHub offers an atmosphere where exceptional food meets warm hospitality.
            </p>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:an">
            <img
              src="https://t3.ftcdn.net/jpg/04/20/54/26/240_F_420542655_U2DpwyhfhyYKAWlrwWdNWMkE882yYwUs.jpg"
              alt="Restaurant interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
