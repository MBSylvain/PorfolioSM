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
          <div className="mb-6 flex h-20 w-20 items-center justify-center border border-primary/30 bg-primary/10 text-4xl text-primary">
            <FaCheckCircle />
          </div>
          <h3 className="mb-2 text-2xl font-bold text-accent">
            Message envoyé !
          </h3>
          <p className="text-accent/60">Merci pour votre message.</p>
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
            <div className="flex items-center gap-3 border border-red-500/30 bg-red-50 p-4 text-sm text-red-600">
              <FaExclamationTriangle />
              <span>
                Oups ! Une erreur est survenue. Veuillez réessayer plus tard.
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent/55"
              >
                <FaUser className="text-primary" /> Prénom
              </label>
              <input
                type="text"
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
                placeholder="Ex: Sylvain"
                className={`w-full border bg-white/70 px-5 py-4 text-accent placeholder-accent/35 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.firstName ? "border-red-500/50" : "border-beigeGray"}`}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent/55"
              >
                <FaUser className="text-primary" /> Nom
              </label>
              <input
                type="text"
                id="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Ex: Mbeumou"
                className={`w-full border bg-white/70 px-5 py-4 text-accent placeholder-accent/35 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.name ? "border-red-500/50" : "border-beigeGray"}`}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent/55"
            >
              <FaEnvelope className="text-primary" /> Adresse Email
            </label>
            <input
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              className={`w-full border bg-white/70 px-5 py-4 text-accent placeholder-accent/35 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.email ? "border-red-500/50" : "border-beigeGray"}`}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-[10px] font-bold uppercase tracking-widest text-accent/55"
            >
              Objet de la demande
            </label>
            <select
              id="subject"
              value={values.subject}
              onChange={handleChange}
              className={`w-full appearance-none border bg-white/70 px-5 py-4 text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.subject ? "border-red-500/50" : "border-beigeGray"}`}
            >
              <option value="">Sujet du message</option>
              <option value="parcours">À propos de mon parcours</option>
              <option value="projet">Échanger sur un projet</option>
              <option value="autre">Autre demande</option>
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-[10px] font-bold uppercase tracking-widest text-accent/55"
            >
              Votre Message
            </label>
            <textarea
              id="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Dites-moi en plus sur votre projet..."
              className={`h-40 w-full resize-none border bg-white/70 px-5 py-4 text-accent placeholder-accent/35 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 ${errors.message ? "border-red-500/50" : "border-beigeGray"}`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-3 bg-primary py-5 font-extrabold text-white transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
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
