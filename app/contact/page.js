'use client'

import { useState } from "react";
import ContactForm from "../components/Contact/ContactForm";
import ClassicContactForm from "../components/Contact/ClassicContactForm";

async function SendEmails(data) {
  const response = await fetch('/api/sendEmails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: String(data.name),
      email: String(data.email),
      message: String(data.message),
    }),
  });

  return await response.json();
}

async function RateLimit(email) {
  const response = await fetch('/api/sendEmails/rateLimit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  return await response.json();
}

export default function Contact() {
  const [isClassicForm, setIsClassicForm] = useState(false);

  const handleSubmission = async (data) => {
    try {
      // Call the POST route for rate limiting
      const rateLimitResponse = await RateLimit(data.email);
  
      // Check for rate limit errors
      if (!rateLimitResponse.allowed) {
        alert(rateLimitResponse.message || "You have exceeded the rate limit. Please try again later.");
        return; // Exit early if rate limit is exceeded
      }
  
      // Call the SendEmails function only if rate limit is not exceeded
      const response = await SendEmails(data);
      if (response.error) {
        alert("Error: " + response.error);
        return;
      }
  
      // If no errors, show success message
      alert("Message sent successfully!");
  
      console.log("API Response:", response);
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };  

  const toggleForm = () => {
    setIsClassicForm(!isClassicForm);
  };

  return (
    <div className="flex flex-col items-center mt-48">
      <button
        onClick={toggleForm}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        {isClassicForm ? "Switch to DM Contact Form" : "Switch to Classic Contact Form"}
      </button>

      {isClassicForm ? (
        <ClassicContactForm onSubmit={handleSubmission} />
      ) : (
        <ContactForm onSubmit={handleSubmission} />
      )}
    </div>
  );
}