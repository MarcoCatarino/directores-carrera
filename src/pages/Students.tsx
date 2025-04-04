import { Table } from "../components/Table";
import type { Column } from "../types/table";
import { studentsData, type Alumno } from "../data/StudentsData";

export const Students = () => {
  const columns: Column<Alumno>[] = [
    { header: "ID", accessor: "id" },
    { header: "Nombre", accessor: "nombre" },
    { header: "Apellido Paterno", accessor: "apellidoP" },
    { header: "Apellido Materno", accessor: "apellidoM" },
    { header: "Estatus", accessor: "estatus" },
    { header: "Cuatrimestre", accessor: "cuatrimestre" },
    { header: "Grupo", accessor: "grupo" },
    { header: "Promedio", accessor: "promedio" },
  ];

  return (
    <div className="">
      <h2 className="pl-8 pb-2">Tabla Estudiantes</h2>
      <Table
        data={studentsData}
        columns={columns}
        isLoading={false}
        showActions
        onView={(alumno) => alert(`Alumno: ${alumno.nombre}`)}
        onEdit={(alumno) => alert(`Editar: ${alumno.nombre}`)}
      />
    </div>
  );
};
