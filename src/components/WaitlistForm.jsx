import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { Client, Databases, Functions, ID } from "appwrite";
import Modal from "./Modal";

//https://cloud.appwrite.io/v1
const ENDPOINT = "https://cloud.appwrite.io/v1";
const PROJECT_ID = "673badb700335c03fcf5";
const DATABASE_ID = "673f0372000cb7da8e45";
const COLLECTION_ID = "673f03830034ceb20202";
const FUNCTION_ID = "673ce7c60004d10a735d";

const client = new Client();
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);

const databases = new Databases(client);
const functions = new Functions(client);

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), { email });
      const execution = await functions.createExecution(FUNCTION_ID, JSON.stringify({ email }));

      setShowSuccessModal(true);
      setEmail(""); // Clear the form
    } catch (error) {
      console.error("Detailed error:", error);
      if (error.code === 401) {
        alert("Authentication error. Please check your project configuration.");
      } else if (error.code === 404) {
        alert("Project not found. Please check your project ID.");
      } else {
        alert(`An error occurred: ${error.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-[#E0AAFF] min-h-[80vh] py-16 px-4 md:px-8 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-6xl md:text-8xl text-black text-center mb-16 font-[M5x7]">Join the Waitlist!</h2>
          <div className="bg-[#F39E60] p-8 md:p-12 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 transform">
            <div className="flex items-center mb-6">
              <Mail className="w-10 h-10 mr-3 text-white" />
              <h3 className="text-3xl md:text-4xl text-white font-[ReadexPro]">Get Early Access</h3>
            </div>
            <p className="text-xl text-white font-[ReadexPro] mb-8 max-w-2xl">
              Be among the first to experience Pixfocus new TestFlight update! Sign up now to receive exclusive updates
              and early access to our gamified focus timer app!
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow bg-black px-6 py-3 rounded-full border-4 border-black font-[ReadexPro] text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white border-4 border-black text-black px-8 py-3 rounded-full font-[ReadexPro] text-xl transition-all duration-300 hover:bg-[#CFEE2E] hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Modal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-[ReadexPro] mb-4">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            You've been successfully added to our waitlist. We'll notify you when we have updates!
          </p>
          <button
            onClick={() => setShowSuccessModal(false)}
            className="bg-[#CFEE2E] border-4 border-black text-black px-6 py-2 rounded-full font-[ReadexPro] hover:bg-[#ADCE00]">
            Got it!
          </button>
        </div>
      </Modal>
    </>
  );
}
