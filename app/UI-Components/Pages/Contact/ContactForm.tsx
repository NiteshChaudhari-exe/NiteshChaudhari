"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: null, message: "" });
        }, 5000);
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Status Messages */}
      {status.type && (
        <div
          className={`my-6 p-4 rounded-lg text-center ${
            status.type === "success"
              ? "bg-green-100 text-green-800 border border-green-400"
              : "bg-red-100 text-red-800 border border-red-400"
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 gap-5 mt-3 px-2 rounded-xl">
          <div className="name-details">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border px-4 py-5 border-gray-600 w-full focus:outline-none rounded-md focus:border-[--prim-color] transition"
              placeholder="Your Name *"
              required
            />
          </div>
          <div className="email-details">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border px-4 py-5 border-gray-600 w-full focus:outline-none rounded-md focus:border-[--prim-color] transition"
              placeholder="Email *"
              required
            />
          </div>
          <div className="subject-details">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border px-4 py-5 border-gray-600 w-full focus:outline-none rounded-md focus:border-[--prim-color] transition"
              placeholder="Subject (Optional)"
            />
          </div>
        </div>

        <div className="message-details mt-6 px-5 py-1">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border px-4 py-7 border-gray-600 w-full focus:outline-none rounded-md min-h-[150px] focus:border-[--prim-color] transition"
            placeholder="Message * (10-5000 characters)"
            required
            minLength={10}
            maxLength={5000}
          ></textarea>
        </div>

        <div className="flex items-center justify-center my-10">
          <button
            type="submit"
            disabled={loading}
            className={`btn nav-btn w-[200px] h-[50px] text-white text-xl font-medium px-4 py-2 rounded-md transition ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:opacity-90"
            }`}
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send Message <i className="bi bi-arrow-right-short"></i>
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
