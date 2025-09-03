// Service para consumir dados (mock ou real)
import { clients, logs } from "./mockData";

export const getClients = async () => {
  return clients;
};

export const getClientLogs = async (clientId: number) => {
  return logs.filter(log => log.clientId === clientId);
};

export const getAllLogs = async () => {
  return logs;
};