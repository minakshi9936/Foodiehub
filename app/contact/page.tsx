import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-16 lg:px-32" id="contactus">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border px-4 py-2 rounded" required />
          <input type="email" placeholder="Your Email" className="w-full border px-4 py-2 rounded" required />
          <textarea placeholder="Your Message" className="w-full border px-4 py-2 rounded" rows={5} required></textarea> 
          <button className="bg-black text-white px-6 py-2 rounded">Send Message</button> <br/> <br/>
        </form>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-3">📍 Address: Your Company Address</p>
          <p className="text-gray-700 mb-3">📞 Phone: +91 1234567890</p>
          <p className="text-gray-700 mb-3">✉️ Email: contact@yourcompany.com</p>

          <div className="mt-4 flex gap-4">
            <a href="#" className="text-blue-600">Facebook</a>
            <a href="#" className="text-blue-400">Twitter</a>
            <a href="#" className="text-pink-600">Instagram</a>
            <a href="#" className="text-blue-700">LinkedIn</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
