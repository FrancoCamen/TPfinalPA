import axios from "axios";

const API_URL = "https://coding-challenge-api.aerolab.co/";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}products`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRmMGQyN2MxMGUzZDAwMjBkMzBmM2MiLCJpYXQiOjE3MzMyMzM5NTl9.uBFRbkU5FERBHgApeRS6sRvZMEU-vcWJ21ycsFIREyc", // Reemplaza con tu API Key
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}products/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRmMGQyN2MxMGUzZDAwMjBkMzBmM2MiLCJpYXQiOjE3MzMyMzM5NTl9.uBFRbkU5FERBHgApeRS6sRvZMEU-vcWJ21ycsFIREyc", // Reemplaza con tu API Key
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};