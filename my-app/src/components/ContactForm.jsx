export default function ContactForm() {
  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-semibold mb-4 text-center">Contact</h2>
      <form className="max-w-lg mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nom:</label>
          <input type="text" id="name" placeholder="Votre nom" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input type="email" id="email" placeholder="Votre email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
          <textarea id="message" placeholder="Votre message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
}
