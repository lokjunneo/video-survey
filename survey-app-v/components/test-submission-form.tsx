// src/components/SubmissionForm.jsx
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../utils/firebase'; // Import your initialized db instance

export default function SubmissionForm() {
    const [status, setStatus] = useState<string>("");
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const form = e.currentTarget;
      const formData = new FormData(form);
  
      // Convert FormData → plain object
      const data: Record<string, string> = {};
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
  
      try {
        await addDoc(collection(db, "submissions"), {
          ...data,
          password: data["password"], // required by your Firestore rule
          createdAt: new Date(),
        });
  
        setStatus("✅ Submission successful!");
        form.reset();
      } catch (err) {
        console.error("Error adding document:", err);
        setStatus("❌ Failed to submit");
      }
    };
  
    return (
      <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg">
        <h1 className="text-xl font-bold mb-4">Submit a Message</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="w-full border rounded px-3 py-2"
            type="text"
            name="password"
            placeholder="Enter password here:"
            required
          />
          <input
            className="w-full border rounded px-3 py-2"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
          <textarea
            className="w-full border rounded px-3 py-2"
            name="message"
            placeholder="Your message"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
        {status && <p className="mt-3">{status}</p>}
      </div>
    );
  }
