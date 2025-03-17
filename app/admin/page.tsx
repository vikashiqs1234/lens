
"use client"
import { useState } from "react";
import axios from "axios";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    brandName: "",
    productType: "",
    frameType: "",
    frameShape: "",
    modelNumber: "",
    frameSize: "",
    frameWidth: "",
    frameDimensions: "",
    frameColor: "",
    weight: "",
    weightGroup: "",
    material: "",
    frameMaterial: "",
    templeMaterial: "",
    prescriptionType: "",
    frameStyle: "",
    frameStyleSecondary: "",
    collection: "",
    productWarranty: "",
    gender: "",
    height: "",
    condition: "",
    templeColor: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("/api/admin", formData);
      setMessage("Product added successfully!");
      // setFormData({
      //   brandName: "",
      //   productType: "",
      //   frameType: "",
      //   frameShape: "",
      //   modelNumber: "",
      //   frameSize: "",
      //   frameWidth: "",
      //   frameDimensions: "",
      //   frameColor: "",
      //   weight: "",
      //   weightGroup: "",
      //   material: "",
      //   frameMaterial: "",
      //   templeMaterial: "",
      //   prescriptionType: "",
      //   frameStyle: "",
      //   frameStyleSecondary: "",
      //   collection: "",
      //   productWarranty: "",
      //   gender: "",
      //   height: "",
      //   condition: "",
      //   templeColor: "",
      // });
    } catch (error) {
      setMessage("Failed to add product.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="text-gray-700 font-medium">{key.replace(/([A-Z])/g, " $1").trim()}</label>
            <input
              type="text"
              name={key}
              value={formData[key as keyof typeof formData]}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        ))}
        <div className="col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-200"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
