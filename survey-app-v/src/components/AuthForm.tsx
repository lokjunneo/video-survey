// src/components/SubmissionForm.jsx
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../utils/firebase'; // Import your initialized db instance

const baseURL = import.meta.env.BASE_URL;

export default function AuthForm() {
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
  
        setStatus("✅ Authentication successful!");

        window.sessionStorage.setItem("email", data["email"])
        window.sessionStorage.setItem("password", data["password"])

        window.location.href = baseURL + "1";
        form.reset();
      } catch (err) {
        setStatus("❌ Wrong password or invalid input.");
      }
    };
  
    return (
      <div className="max-w-md mx-auto bg-white shadow rounded-lg flex-col min-h-screen items-center">
        <h1 className="text-xl font-bold mb-4">Enter your details</h1>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="flex flex-col">
            <input
              className="w-full border rounded px-3 py-2 mt-6"
              type="text"
              name="name"
              placeholder="Your name"
              required
              autoComplete='off'
            />
          </div>
          <div className="flex flex-col">
            <input
              className="w-full border rounded px-3 py-2"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              className="w-full border rounded px-3 py-2"
              type="text"
              name="password"
              placeholder="Enter password here:"
              required
            />
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
        {status && <p className="mt-3">{status}</p>}
      </div>
    );
  }
