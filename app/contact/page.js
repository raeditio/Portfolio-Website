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
    body: JSON.stringify(data),
  });

  return await response.json();
}

export default function Contact() {
  const [isClassicForm, setIsClassicForm] = useState(false);

  const handleSubmission = async (data) => {
    try {
      const response = await SendEmails(data);
      // console.log(response.message); // "Emails sent successfully!"
    } catch (error) {
      console.error("Error:", error.message);
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