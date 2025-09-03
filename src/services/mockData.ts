// Mock de clientes e logs para uso inicial
export const clients = [
  {
    id: 1,
    name: "Empresa Alpha",
    code: "ALPHA01",
    lastContact: "2025-09-02",
    backups7d: 6,
    status: "OK",
    configured: true,
  },
  {
    id: 2,
    name: "Beta Solutions",
    code: "BETA02",
    lastContact: "2025-08-29",
    backups7d: 3,
    status: "Alerta",
    configured: true,
  },
  {
    id: 3,
    name: "Gamma Corp",
    code: "GAMMA03",
    lastContact: "2025-09-01",
    backups7d: 0,
    status: "Falha",
    configured: false,
  },
  {
    id: 4,
    name: "Delta TI",
    code: "DELTA04",
    lastContact: "2025-09-03",
    backups7d: 7,
    status: "OK",
    configured: true,
  },
  {
    id: 5,
    name: "Omega Tech",
    code: "OMEGA05",
    lastContact: "2025-08-30",
    backups7d: 2,
    status: "Alerta",
    configured: true,
  }
];

export const logs = [
  {
    id: 101,
    clientId: 1,
    date: "2025-09-02",
    time: "14:30",
    status: "Sucesso",
    message: "Backup realizado sem erros"
  },
  {
    id: 102,
    clientId: 2,
    date: "2025-09-02",
    time: "15:00",
    status: "Falha",
    message: "Erro de conexão"
  },
  // ... mais logs simulados
];