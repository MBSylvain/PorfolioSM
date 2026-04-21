import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCheckCircle,
  FaPaperPlane,
  FaExclamationTriangle,
  FaSpinner,
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

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const validate = (vals) => {
    const errs = {};
    if (!vals.firstName.trim()) errs.firstName = "Requis";
    if (!vals.name.trim()) errs.name = "Requis";
    if (!vals.email.trim()) {
      errs.email = "Requis";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(vals.email)) {
      errs.email = "Format invalide";
    }
    if (!vals.subject) errs.subject = "Sélectionnez un service";
    if (!vals.message.trim()) errs.message = "Message requis";
    return errs;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStatus("loading");
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setStatus("success");
          setValues(initialState);
          setTimeout(() => setStatus("idle"), 6000);
        } else {
          setStatus("error");
        }
      } catch (err) {
        console.error("Submission error:", err);
        setStatus("error");
      }
    }
  };

  return (
    <div className="w-full">
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center text-4xl mb-6 animate-bounce">
            <FaCheckCircle />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
          <p className="text-white/50">Merci, je reviendrai vers vous dans les plus brefs délais.</p>
          <button 
            onClick={() => setStatus("idle")}
            className="mt-8 text-xs text-primary underline hover:text-white transition-colors"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {status === "error" && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500 text-sm">
              <FaExclamationTriangle />
              <span>Oups ! Une erreur est survenue. Veuillez réessayer plus tard.</span>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-[10px] uppercase tracking-widest font-bold text-white/40 flex items-center gap-2">
                <FaUser className="text-primary" /> Prénom
              </label>
              <input
                type="text"
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
                placeholder="Ex: Sylvain"
                className={`w-full px-5 py-4 bg-white/5 border rounded-2xl text-white placeholder-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.firstName ? "border-red-500/50" : "border-white/10"}`}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-white/40 flex items-center gap-2">
                <FaUser className="text-primary" /> Nom
              </label>
              <input
                type="text"
                id="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Ex: Mbeumou"
                className={`w-full px-5 py-4 bg-white/5 border rounded-2xl text-white placeholder-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.name ? "border-red-500/50" : "border-white/10"}`}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-white/40 flex items-center gap-2">
              <FaEnvelope className="text-primary" /> Adresse Email
            </label>
            <input
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              className={`w-full px-5 py-4 bg-white/5 border rounded-2xl text-white placeholder-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.email ? "border-red-500/50" : "border-white/10"}`}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-[10px] uppercase tracking-widest font-bold text-white/40">
              Objet de la demande
            </label>
            <select
              id="subject"
              value={values.subject}
              onChange={handleChange}
              className={`w-full px-5 py-4 bg-white/5 border rounded-2xl text-white appearance-none transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.subject ? "border-red-500/50" : "border-white/10"}`}
            >
              <option value="" className="bg-softBlack text-white">Sélectionnez un service</option>
              <option value="vitrine" className="bg-softBlack text-white">Site Vitrine</option>
              <option value="developpement" className="bg-softBlack text-white">Application Web (SaaS, Portal)</option>
              <option value="maintenance" className="bg-softBlack text-white">Maintenance / Refonte</option>
              <option value="autre" className="bg-softBlack text-white">Autre demande</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-white/40">
              Votre Message
            </label>
            <textarea
              id="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Dites-moi en plus sur votre projet..."
              className={`w-full h-40 px-5 py-4 bg-white/5 border rounded-2xl text-white placeholder-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none ${errors.message ? "border-red-500/50" : "border-white/10"}`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-3 py-5 bg-primary text-softBlack font-extrabold rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_-15px_rgba(20,184,166,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <FaSpinner className="animate-spin" /> Envoi en cours...
              </>
            ) : (
              <>
                <FaPaperPlane /> Envoyer le message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}


