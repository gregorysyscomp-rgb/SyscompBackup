import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ClientDetail from "./pages/ClientDetail";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <aside className="w-64 bg-gray-900 text-white min-h-screen">
          <nav className="flex flex-col gap-2 p-4">
            <Link to="/" className="hover:bg-gray-800 rounded px-3 py-2">Dashboard</Link>
            <Link to="/reports" className="hover:bg-gray-800 rounded px-3 py-2">Relatórios</Link>
            <Link to="/settings" className="hover:bg-gray-800 rounded px-3 py-2">Configurações</Link>
          </nav>
        </aside>
        <main className="flex-1 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/client/:id" element={<ClientDetail />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}