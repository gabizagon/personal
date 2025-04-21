"use client";
import React, { useState, useRef } from "react";
import { User, Mail, Phone, MessageSquare, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();
  
  const [form, setForm] = useState({ 
    firstName: "", 
    lastName: "", 
    email: "", 
    phone: "", 
    message: "",
    honeypot: "" // Hidden field for spam prevention
  });
  
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false
  });
  
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [progress, setProgress] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  
  // Calculate form progress
  React.useEffect(() => {
    const fields = ['firstName', 'lastName', 'email', 'phone', 'message'];
    const filledFields = fields.filter(field => form[field as keyof typeof form]?.trim().length > 0).length;
    setProgress((filledFields / fields.length) * 100);
  }, [form]);
  
  // Keyboard shortcut (C) to focus first input
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'c' && !['INPUT', 'TEXTAREA'].includes((e.target as Element).tagName)) {
        e.preventDefault();
        firstNameRef.current?.focus();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  const validateField = (name: string, value: string): string => {
    if (!value.trim()) return t('contact.form.required');
    
    switch (name) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : t('contact.form.invalidEmail');
      case "phone":
        return /^[0-9+\-\s()]*$/.test(value) ? "" : t('contact.form.invalidPhone');
      default:
        return "";
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    if (touched[name as keyof typeof touched]) {
      setErrors({
        ...errors,
        [name]: validateField(name, value)
      });
    }
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setTouched({
      ...touched,
      [name]: true
    });
    
    setErrors({
      ...errors,
      [name]: validateField(name, value)
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for honeypot (bot detection)
    if (form.honeypot) {
      console.log("Bot detected");
      return;
    }
    
    // Validate all fields
    const newErrors = {
      firstName: validateField("firstName", form.firstName),
      lastName: validateField("lastName", form.lastName),
      email: validateField("email", form.email),
      phone: validateField("phone", form.phone),
      message: validateField("message", form.message)
    };
    
    setErrors(newErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      message: true
    });
    
    // Check if there are any errors
    if (Object.values(newErrors).some(error => error)) {
      // Shake the form
      if (formRef.current) {
        formRef.current.classList.add("animate-shake");
        setTimeout(() => {
          formRef.current?.classList.remove("animate-shake");
        }, 500);
      }
      return;
    }
    
    setStatus("submitting");
    
    try {
      // Send data to webhook
      const response = await fetch("https://hook.eu2.make.com/lsscm4uhquvrj7xz9k6szsdynv8am7ps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName, 
          email: form.email,
          phone: form.phone,
          message: form.message
        }),
      });
      
      if (!response.ok) {
        throw new Error("Form submission failed");
      }
      
      // Reset form on success
      setForm({ 
        firstName: "", 
        lastName: "", 
        email: "", 
        phone: "", 
        message: "",
        honeypot: ""
      });
      
      setTouched({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        message: false
      });
      
      setStatus("success");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
      
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };
  
  // Create ripple effect
  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const circle = document.createElement("span");
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.width = "10px";
    circle.style.height = "10px";
    circle.style.background = "rgba(255, 255, 255, 0.7)";
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.transform = "scale(0)";
    circle.style.transition = "transform 0.6s, opacity 0.6s";
    circle.style.opacity = "1";
    
    button.appendChild(circle);
    
    setTimeout(() => {
      circle.style.transform = "scale(100)";
      circle.style.opacity = "0";
      
      setTimeout(() => {
        button.removeChild(circle);
      }, 600);
    }, 10);
  };

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary-900/40 rounded overflow-hidden">
        <motion.div 
          className="h-full bg-primary-400" 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <div className="mx-auto max-w-xl p-8 rounded-lg shadow-xl bg-gradient-to-br from-primary-900/70 to-primary-800/90 backdrop-blur-sm border border-primary-700/30 mt-2">
        <h2 className="text-3xl font-bold text-white mb-2">{t('contact.title')}</h2>
        <motion.div 
          className="h-1 bg-primary-400 mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        <form 
          ref={formRef}
          onSubmit={handleSubmit} 
          className="space-y-6"
          noValidate
        >
          {/* Honeypot field - hidden from users but bots will fill it */}
          <input 
            type="text" 
            name="honeypot" 
            value={form.honeypot} 
            onChange={handleChange} 
            style={{ display: 'none' }} 
            tabIndex={-1} 
            aria-hidden="true"
          />
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="relative">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-300 z-10" size={18} />
                <input
                  ref={firstNameRef}
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-10 pr-3 py-3 bg-primary-900/70 shadow-inner border-2 rounded-md transition-colors duration-300 outline-none text-white placeholder-primary-300/50 ${
                    errors.firstName && touched.firstName 
                      ? "border-red-500 focus:border-red-400" 
                      : "border-primary-600 focus:border-primary-400"
                  } focus:ring-4 focus:ring-primary-600/30`}
                  placeholder={t('contact.form.firstName')}
                  aria-label={t('contact.form.firstName')}
                />
                <label 
                  htmlFor="firstName" 
                  className={`absolute left-10 text-sm transition-all duration-200 pointer-events-none ${
                    form.firstName 
                      ? "-top-2.5 text-primary-300 bg-primary-900 px-1 text-xs" 
                      : "top-1/2 -translate-y-1/2 text-primary-300/70"
                  }`}
                >
                  {form.firstName ? t('contact.form.firstName') : ""}
                </label>
              </div>
              <AnimatePresence>
                {errors.firstName && touched.firstName && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-xs mt-1 ml-1"
                  >
                    {errors.firstName}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            
            {/* Last Name */}
            <div className="relative">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-300 z-10" size={18} />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full pl-10 pr-3 py-3 bg-primary-900/70 shadow-inner border-2 rounded-md transition-colors duration-300 outline-none text-white placeholder-primary-300/50 ${
                    errors.lastName && touched.lastName 
                      ? "border-red-500 focus:border-red-400" 
                      : "border-primary-600 focus:border-primary-400"
                  } focus:ring-4 focus:ring-primary-600/30`}
                  placeholder={t('contact.form.lastName')}
                  aria-label={t('contact.form.lastName')}
                />
                <label 
                  htmlFor="lastName" 
                  className={`absolute left-10 text-sm transition-all duration-200 pointer-events-none ${
                    form.lastName 
                      ? "-top-2.5 text-primary-300 bg-primary-900 px-1 text-xs" 
                      : "top-1/2 -translate-y-1/2 text-primary-300/70"
                  }`}
                >
                  {form.lastName ? t('contact.form.lastName') : ""}
                </label>
              </div>
              <AnimatePresence>
                {errors.lastName && touched.lastName && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-xs mt-1 ml-1"
                  >
                    {errors.lastName}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Email */}
          <div className="relative">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-300 z-10" size={18} />
              <input
                type="email"
                name="email"
                id="email"
                required
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full pl-10 pr-3 py-3 bg-primary-900/70 shadow-inner border-2 rounded-md transition-colors duration-300 outline-none text-white placeholder-primary-300/50 ${
                  errors.email && touched.email 
                    ? "border-red-500 focus:border-red-400" 
                    : "border-primary-600 focus:border-primary-400"
                } focus:ring-4 focus:ring-primary-600/30`}
                placeholder={t('contact.form.email')}
                aria-label={t('contact.form.email')}
              />
              <label 
                htmlFor="email" 
                className={`absolute left-10 text-sm transition-all duration-200 pointer-events-none ${
                  form.email 
                    ? "-top-2.5 text-primary-300 bg-primary-900 px-1 text-xs" 
                    : "top-1/2 -translate-y-1/2 text-primary-300/70"
                }`}
              >
                {form.email ? t('contact.form.email') : ""}
              </label>
            </div>
            <AnimatePresence>
              {errors.email && touched.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-xs mt-1 ml-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          
          {/* Phone */}
          <div className="relative">
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-300 z-10" size={18} />
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full pl-10 pr-3 py-3 bg-primary-900/70 shadow-inner border-2 rounded-md transition-colors duration-300 outline-none text-white placeholder-primary-300/50 ${
                  errors.phone && touched.phone 
                    ? "border-red-500 focus:border-red-400" 
                    : "border-primary-600 focus:border-primary-400"
                } focus:ring-4 focus:ring-primary-600/30`}
                placeholder={t('contact.form.phone')}
                aria-label={t('contact.form.phone')}
              />
              <label 
                htmlFor="phone" 
                className={`absolute left-10 text-sm transition-all duration-200 pointer-events-none ${
                  form.phone 
                    ? "-top-2.5 text-primary-300 bg-primary-900 px-1 text-xs" 
                    : "top-1/2 -translate-y-1/2 text-primary-300/70"
                }`}
              >
                {form.phone ? t('contact.form.phone') : ""}
              </label>
            </div>
            <AnimatePresence>
              {errors.phone && touched.phone && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-xs mt-1 ml-1"
                >
                  {errors.phone}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          
          {/* Message */}
          <div className="relative">
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-primary-300 z-10" size={18} />
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full pl-10 pr-3 py-3 bg-primary-900/70 shadow-inner border-2 rounded-md transition-colors duration-300 outline-none text-white placeholder-primary-300/50 ${
                  errors.message && touched.message 
                    ? "border-red-500 focus:border-red-400" 
                    : "border-primary-600 focus:border-primary-400"
                } focus:ring-4 focus:ring-primary-600/30 resize-none`}
                placeholder={t('contact.form.message')}
                aria-label={t('contact.form.messageLabel')}
              />
              <label 
                htmlFor="message" 
                className={`absolute left-10 text-sm transition-all duration-200 pointer-events-none ${
                  form.message 
                    ? "-top-2.5 text-primary-300 bg-primary-900 px-1 text-xs" 
                    : "top-3 text-primary-300/70"
                }`}
              >
                {form.message ? t('contact.form.messageLabel') : ""}
              </label>
            </div>
            <AnimatePresence>
              {errors.message && touched.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-xs mt-1 ml-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          
          {/* Submit */}
          <div className="relative overflow-hidden">
            <button
              type="submit"
              disabled={status === "submitting"}
              onClick={createRipple}
              className="w-full h-12 relative flex items-center justify-center bg-primary-600 text-white rounded-md hover:bg-primary-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              aria-label={t('contact.form.submit')}
            >
              <div className="flex items-center gap-2 mr-2">
                <span className="font-medium">{t('contact.form.submit')}</span>
                <motion.div
                  initial={{ x: -5, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="flex items-center"
                >
                  <Send className="w-5 h-5" />
                </motion.div>
              </div>
              
              {status === "submitting" && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              )}
            </button>
          </div>
        </form>

        {/* Feedback banners */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-4 bg-green-900/70 text-green-100 rounded-md border border-green-600/50"
            >
              ✅ {t('contact.form.success')}
            </motion.div>
          )}
          
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-4 bg-red-900/70 text-red-100 rounded-md border border-red-600/50"
            >
              ❌ {t('contact.form.error')}
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="text-xs text-gray-300 mt-6 text-center">
          <p>{t('contact.form.keyboardShortcut')}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;