import { Table } from "../components/Table";
import type { Column } from "../types/table";
import { teachersData, type Teacher } from "../data/TeachersData";

export const Teachers = () => {
  const columns: Column<Teacher>[] = [
    { header: "ID", accessor: "id" },
    { header: "Nombre", accessor: "nombre" },
    { header: "Apellido Paterno", accessor: "apellidoP" },
    { header: "Apellido Materno", accessor: "apellidoM" },
    { header: "Correo Electronico", accessor: "correo" },
  ];

  return (
    <div className="">
      <h2 className="pl-8 pb-2">Tabla Profesores</h2>
      <Table
        data={teachersData}
        columns={columns}
        isLoading={false}
        showActions
        onView={(teacher) => alert(`Profesor: ${teacher.nombre}`)}
        onEdit={(teacher) => alert(`Editar: ${teacher.nombre}`)}
      />
    </div>
  );
};
