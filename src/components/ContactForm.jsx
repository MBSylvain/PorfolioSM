import React from "react";
import { useState } from "react";
import { FaUser, FaEnvelope, FaRegCommentDots, FaCheckCircle } from 'react-icons/fa';

export default function ContactForm() {
  const initialState = {
    firstName: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const initialErrors = {
    firstName: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName.trim()) {
      errors.firstName = "Le prénom est requis.";
    }
    if (!values.name.trim()) {
      errors.name = "Le nom est requis.";
    }
    if (!values.email.trim()) {
      errors.email = "L'email est requis.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Format d'email invalide.";
    }
    if (!values.subject) {
      errors.subject = "Veuillez sélectionner un service.";
    }
    if (!values.message.trim()) {
      errors.message = "Le message est requis.";
    }
    return errors;
  };


    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState(initialErrors);

    const handleChange = (e) => {
      const { id, value } = e.target;
      setValues((prev) => ({ ...prev, [id]: value }));
      setErrors((prev) => ({ ...prev, [id]: "" }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate(values);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        // Traitement du formulaire ici
        alert("Message envoyé !");
        setValues(initialState);
      }
    };

    return (
      <section id="contact" className="px-6 py-16 font-sans bg-white dark:bg-gray-900">
        <h2 className="flex items-center justify-center gap-2 mb-4 text-3xl font-semibold text-center text-gray-900 dark:text-white">
          <FaRegCommentDots className="text-2xl text-primary" /> Contact
        </h2>
        <form className="max-w-lg mx-auto space-y-6" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="flex items-center gap-1 mb-2 text-sm font-bold text-gray-700 dark:text-gray-200"><FaUser /> Prénom:</label>
              <input
                type="text"
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
                placeholder="Votre prénom"
                className={`w-full px-3 py-2 leading-tight text-gray-700 dark:text-gray-100 dark:bg-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.firstName ? "border-red-500" : ""}`}
                aria-invalid={!!errors.firstName}
                aria-describedby="firstName-error"
              />
              {errors.firstName && <p id="firstName-error" className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="name" className="flex items-center gap-1 mb-2 text-sm font-bold text-gray-700 dark:text-gray-200"><FaUser /> Nom:</label>
              <input
                type="text"
                id="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className={`w-full px-3 py-2 leading-tight text-gray-700 dark:text-gray-100 dark:bg-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.name ? "border-red-500" : ""}`}
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
              />
              {errors.name && <p id="name-error" className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="flex items-center gap-1 mb-2 text-sm font-bold text-gray-700 dark:text-gray-200"><FaEnvelope /> Email:</label>
            <input
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Votre email"
              className={`w-full px-3 py-2 leading-tight text-gray-700 dark:text-gray-100 dark:bg-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""}`}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
            {errors.email && <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">Objet:</label>
            <select
              id="subject"
              value={values.subject}
              onChange={handleChange}
              className={`w-full px-3 py-2 leading-tight text-gray-700 dark:text-gray-100 dark:bg-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.subject ? "border-red-500" : ""}`}
              aria-invalid={!!errors.subject}
              aria-describedby="subject-error"
            >
              <option value="">Sélectionnez un service</option>
              <option value="developpement">Développement web</option>
              <option value="design">Design UI/UX</option>
              <option value="consultation">Consultation</option>
              <option value="autre">Autre</option>
            </select>
            {errors.subject && <p id="subject-error" className="mt-1 text-xs text-red-500">{errors.subject}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-200">Message:</label>
            <textarea
              id="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Votre message"
              className={`w-full h-32 px-3 py-2 leading-tight text-gray-700 dark:text-gray-100 dark:bg-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.message ? "border-red-500" : ""}`}
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
            ></textarea>
            {errors.message && <p id="message-error" className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="flex items-center gap-2 px-4 py-2 font-bold text-white transition-transform bg-gray-700 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline active:scale-95"
              type="submit"
              aria-label="Envoyer le message"
            >
              <FaCheckCircle className="text-lg" /> Envoyer
            </button>
          </div>
        </form>
      </section>
    );
}
