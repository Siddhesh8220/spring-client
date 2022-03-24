import axios from "axios";
import { API_URL } from "../config";

async function getHeaders() {
  const payloadHeader = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return payloadHeader;
}

export async function getResource(url) {
  const payloadHeader = await getHeaders();
  try {
    const res = await axios.get(`${API_URL}/${url}`, payloadHeader);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
