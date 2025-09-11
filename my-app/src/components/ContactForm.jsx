export default function ContactForm() {
  return (
    <section id="contact" className="px-6 py-16 bg-white">
      <h2 className="mb-4 text-3xl font-semibold text-center">Contact</h2>
      <form className="max-w-lg mx-auto space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block mb-2 text-sm font-bold text-gray-700">Prénom:</label>
            <input type="text" id="firstName" placeholder="Votre prénom" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">Nom:</label>
            <input type="text" id="name" placeholder="Votre nom" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">Email:</label>
          <input type="email" id="email" placeholder="Votre email" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-bold text-gray-700">Objet:</label>
          <select id="subject" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
            <option value="">Sélectionnez un service</option>
            <option value="developpement">Développement web</option>
            <option value="design">Design UI/UX</option>
            <option value="consultation">Consultation</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-700">Message:</label>
          <textarea id="message" placeholder="Votre message" className="w-full h-32 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700 focus:outline-none focus:shadow-outline" type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
}
