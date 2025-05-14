import React, { useState } from "react";
import "./Contact.scss";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
        if (!formData.email.trim()) {
            newErrors.email = "L’email est requis.";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Format d’email invalide.";
        }
        if (!formData.message.trim()) newErrors.message = "Le message est requis.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // 👉 Ici tu peux connecter à FormSubmit, Netlify ou backend personnalisé
            fetch("https://formsubmit.co/ajax/ton@email.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success === "true") {
                        setSubmitted(true);
                        setFormData({ name: "", email: "", message: "" });
                        setTimeout(() => setSubmitted(false), 3000);
                    } else {
                        setErrors({ submit: "Une erreur est survenue. Réessayez plus tard." });
                    }
                })
                .catch(() =>
                    setErrors({ submit: "Une erreur est survenue. Vérifiez votre connexion." })
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
                        <label htmlFor="email">Email </label>
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
                        <label htmlFor="message">Message </label>
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
