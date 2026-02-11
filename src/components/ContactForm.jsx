import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaRegCommentDots,
  FaCheckCircle,
} from "react-icons/fa";

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
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
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
  const [submitted, setSubmitted] = useState(false);

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
      setSubmitted(true);
      setValues(initialState);
      setTimeout(() => setSubmitted(false), 3500);
    }
  };

  return (
    <section
      id="contact"
      className="px-6 py-16 font-sans bg-white dark:bg-gray-900"
    >
      <h2 className="flex items-center justify-center gap-2 mb-6 text-3xl font-semibold text-center text-gray-900 dark:text-white">
        <FaRegCommentDots className="text-2xl text-primary" /> Contact
      </h2>

      <form
        className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-sm dark:bg-gray-800"
        onSubmit={handleSubmit}
        noValidate
      >
        {submitted && (
          <div className="flex items-center gap-2 px-4 py-3 mb-4 text-sm text-green-800 bg-green-100 rounded">
            <FaCheckCircle className="text-lg" />
            <span>Merci — votre message a bien été envoyé.</span>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 text-xs font-semibold tracking-wide text-gray-600 dark:text-gray-300 flex items-center gap-2"
            >
              <FaUser /> Prénom
            </label>
            <input
              type="text"
              id="firstName"
              value={values.firstName}
              onChange={handleChange}
              placeholder="Votre prénom"
              className={`w-full px-4 py-2 text-gray-800 bg-white border rounded-lg shadow-sm placeholder-gray-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 ${errors.firstName ? "border-red-500" : "border-gray-200"}`}
              aria-invalid={!!errors.firstName}
              aria-describedby="firstName-error"
            />
            {errors.firstName && (
              <p id="firstName-error" className="mt-1 text-xs text-red-500">
                {errors.firstName}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="name"
              className="mb-2 text-xs font-semibold tracking-wide text-gray-600 dark:text-gray-300 flex items-center gap-2"
            >
              <FaUser /> Nom
            </label>
            <input
              type="text"
              id="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className={`w-full px-4 py-2 text-gray-800 bg-white border rounded-lg shadow-sm placeholder-gray-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 ${errors.name ? "border-red-500" : "border-gray-200"}`}
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-red-500">
                {errors.name}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="email"
            className="mb-2 text-xs font-semibold tracking-wide text-gray-600 dark:text-gray-300 flex items-center gap-2"
          >
            <FaEnvelope /> Email
          </label>
          <input
            type="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Votre email"
            className={`w-full px-4 py-2 text-gray-800 bg-white border rounded-lg shadow-sm placeholder-gray-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 ${errors.email ? "border-red-500" : "border-gray-200"}`}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div className="mt-4">
          <label
            htmlFor="subject"
            className="mb-2 text-xs font-semibold tracking-wide text-gray-600 dark:text-gray-300"
          >
            Objet
          </label>
          <select
            id="subject"
            value={values.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 text-gray-800 bg-white border rounded-lg shadow-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-400 ${errors.subject ? "border-red-500" : "border-gray-200"}`}
            aria-invalid={!!errors.subject}
            aria-describedby="subject-error"
          >
            <option value="">Sélectionnez un service</option>
            <option value="developpement">Développement web</option>
            <option value="design">Design UI/UX</option>
            <option value="consultation">Consultation</option>
            <option value="autre">Autre</option>
          </select>
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-xs text-red-500">
              {errors.subject}
            </p>
          )}
        </div>

        <div className="mt-4">
          <label
            htmlFor="message"
            className="mb-2 text-xs font-semibold tracking-wide text-gray-600 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Votre message"
            className={`w-full h-36 px-4 py-3 text-gray-800 bg-white border rounded-lg shadow-sm placeholder-gray-400 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 ${errors.message ? "border-red-500" : "border-gray-200"}`}
            aria-invalid={!!errors.message}
            aria-describedby="message-error"
          ></textarea>
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-6">
          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-3 font-semibold text-white transition-transform bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg hover:from-indigo-700 active:scale-95"
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
