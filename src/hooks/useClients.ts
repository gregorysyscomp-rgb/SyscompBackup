import { useState, useEffect } from "react";
import { getClients } from "../services/api";

export function useClients() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    getClients().then(setClients);
  }, []);
  return clients;
}