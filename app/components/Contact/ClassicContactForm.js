import { useState } from 'react';

export default function ClassicContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const formFields = [
    { label: "Name", type: "text", name: "name" },
    { label: "Email", type: "email", name: "email" },
    { label: "Message", type: "textarea", name: "message" }
  ];

  return (
    <div className="flex flex-col items-center w-full min-w-80 mt-24 text-center text-slate-200">
      <h1 className="text-4xl font-bold mb-4 font-mono">Contact Me</h1>
      <div className="w-full max-w-md text-left">
        {formFields.map((field, index) => (
          <label key={index} className="block mb-2">
            {field.label}:
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full h-48 text-black"
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full text-black"
              />
            )}
          </label>
        ))}
        <button
          onClick={() => onSubmit(formData)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
  );
}
