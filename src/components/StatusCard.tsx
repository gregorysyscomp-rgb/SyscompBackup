import React from "react";
import clsx from "clsx";

type Props = {
  status: "OK" | "Alerta" | "Falha";
};

export default function StatusCard({ status }: Props) {
  const statusMap = {
    OK: "bg-green-500",
    Alerta: "bg-yellow-500",
    Falha: "bg-red-500",
  };
  return (
    <div className={clsx("p-4 rounded text-white flex items-center", statusMap[status])}>
      <span>Status: {status}</span>
    </div>
  );
}