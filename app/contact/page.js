export default function Contact() {
  return (
    <div className="flex flex-col items-center mt-44 min-h-screen text-center text-slate-200">
      <h1 className="text-4xl font-bold mb-4 font-mono">Contact Me</h1>
      <div className="w-full max-w-md text-left">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            className="border border-gray-300 rounded p-2 w-full"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            className="border border-gray-300 rounded p-2 w-full"
          />
        </label>
        <label className="block mb-2">
          Message:
          <textarea
            name="message"
            className="border border-gray-300 rounded p-2 w-full h-48"
          />
        </label>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
  );
}
