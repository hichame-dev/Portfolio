import React, { useState } from "react";
import "./Contact.scss";

function Contact() {
    // État du formulaire (nom, email, message)
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    // État des erreurs de validation
    const [errors, setErrors] = useState({});

    // Indique si le message a été envoyé avec succès
    const [submitted, setSubmitted] = useState(false);

    // Fonction de validation de l'email (regex simple)
    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Mise à jour des champs du formulaire à chaque frappe clavier
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation des champs
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
        if (!formData.email.trim()) {
            newErrors.email = "L’email est requis.";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Format d’email invalide.";
        }
        if (!formData.message.trim()) newErrors.message = "Le message est requis.";

        setErrors(newErrors);

        // Si aucune erreur, on envoie les données à FormSubmit
        if (Object.keys(newErrors).length === 0) {
            const form = new URLSearchParams();
            form.append("name", formData.name);
            form.append("email", formData.email);
            form.append("message", formData.message);

            fetch("https://formsubmit.co/Hichame_Dev@outlook.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: form.toString(), // format que FormSubmit attend
            })
                .then(() => {
                    setSubmitted(true); // on affiche le message de succès
                    setFormData({ name: "", email: "", message: "" }); // on vide le formulaire
                    setTimeout(() => setSubmitted(false), 3000); // on cache après 3s
                })
                .catch(() =>
                    setErrors({ submit: "Erreur réseau. Vérifie ta connexion." })
                );
        }
    };

    return (
        <section id="contact" className="contact-page">
            <div className="contact-form-wrapper">
                <h1>Entrons en contact</h1>
                <p>N'hésitez pas à me laisser un message. Je vous répondrai rapidement.</p>

                {submitted && (
                    <div className="success-message">✅ Message envoyé avec succès !</div>
                )}

                {errors.submit && <p className="error-message">{errors.submit}</p>}

                <form className="form" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && <p className="error-text">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        {errors.message && <p className="error-text">{errors.message}</p>}
                    </div>

                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
