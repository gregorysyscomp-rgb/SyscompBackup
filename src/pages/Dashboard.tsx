import React from "react";
import { useClients } from "../hooks/useClients";
import StatusCard from "../components/StatusCard";
import { DataGrid } from "@mui/x-data-grid";
import { Box, TextField } from "@mui/material";

export default function Dashboard() {
  const clients = useClients();
  const [search, setSearch] = React.useState("");
  const filteredClients = clients.filter(
    c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );
  const columns = [
    { field: "name", headerName: "Nome", width: 160 },
    { field: "code", headerName: "Código", width: 120 },
    { field: "lastContact", headerName: "Último Contato", width: 160 },
    { field: "backups7d", headerName: "Backups (7d)", width: 160 },
    { field: "status", headerName: "Status", width: 120, renderCell: (params) => <StatusCard status={params.value} /> },
  ];

  return (
    <Box className="p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <TextField
        label="Pesquisar cliente"
        variant="outlined"
        size="small"
        className="mb-4"
        onChange={e => setSearch(e.target.value)}
      />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={filteredClients} columns={columns} pageSize={5} />
      </div>
      {/* Adicione gráficos e filtros de período aqui */}
    </Box>
  );
}