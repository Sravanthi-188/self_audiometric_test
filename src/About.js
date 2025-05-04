import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6 overflow-auto h-[80vh]">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">About the Self-Audiometric Test</h1>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          This website provides a self-audiometric test using **Pure-Tone Audiometry**, 
          allowing users to evaluate their hearing thresholds. The test involves listening to 
          tones at different **frequencies and volume levels** and plotting results on an **audiogram**.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">🔹 How It Works:</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-4">
          <li>Select **Left**, **Right**, or **Both** ears for testing.</li>
          <li>Listen to tones at various **frequencies (125Hz - 8000Hz)**.</li>
          <li>Mark the **lowest audible volume (threshold)** for each frequency.</li>
          <li>Your audiogram is generated, indicating potential hearing loss.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">🔹 Features:</h2>
        <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mb-4">
          <li>**Pure-Tone Audiometry** based testing.</li>
          <li>Ability to **select ears (left/right)**.</li>
          <li>Generates **audiogram graph** dynamically.</li>
          <li>**Downloadable test results** for future reference.</li>
          <li>Ensures a **quiet environment** by detecting ambient noise.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">🔹 Important Note:</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          For **accurate results**, use **wired or Bluetooth headphones** in a **quiet environment**.  
          This test is **not a medical diagnosis**—consult an audiologist if you suspect hearing loss.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2 text-gray-800">📩 Contact Us:</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Have questions or feedback? Reach out to us at:  
          <span className="font-semibold text-blue-600"> takecare@health.com</span>
        </p>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-blue-600 text-white text-lg font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default About;
