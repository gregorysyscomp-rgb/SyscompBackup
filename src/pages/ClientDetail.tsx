import React from "react";
import { useParams } from "react-router-dom";
import { useClients } from "../hooks/useClients";
import { getClientLogs } from "../services/api";
import StatusCard from "../components/StatusCard";

export default function ClientDetail() {
  const { id } = useParams();
  const clients = useClients();
  const client = clients.find((c: any) => String(c.id) === id);
  const [logs, setLogs] = React.useState([]);
  React.useEffect(() => {
    if (client) getClientLogs(client.id).then(setLogs);
  }, [client]);

  if (!client) return <div>Cliente não encontrado</div>;

  const lastLog = logs[0];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{client.name}</h2>
      <StatusCard status={client.status} />
      <div className="mt-4">
        <strong>Configurado para backup:</strong> {client.configured ? "Sim" : "Não"}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Última execução:</h3>
        {lastLog ? (
          <div>
            {lastLog.date} {lastLog.time} - {lastLog.status} <br />
            <span className="text-gray-600">{lastLog.message}</span>
          </div>
        ) : (
          <span>Nenhum log encontrado</span>
        )}
      </div>
      {/* Histórico de logs em tabela */}
      <div className="mt-4">
        <h3 className="font-semibold">Histórico</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th>Data</th>
              <th>Hora</th>
              <th>Status</th>
              <th>Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log: any) => (
              <tr key={log.id}>
                <td>{log.date}</td>
                <td>{log.time}</td>
                <td>{log.status}</td>
                <td>{log.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}