// src/components/ui/Table/Table.tsx
import { ViewIcon } from "../assets/icons/ViewIcon";
import { EditIcon } from "../assets/icons/EditIcon";
import { DeleteIcon } from "../assets/icons/DeleteIcon";

import { SkeletonTable } from "./SkeletonTable";
import { TableProps } from "../types/table";

export const Table = <T,>({
  data,
  columns,
  isLoading = false,
  showActions = false,
  onView,
  onEdit,
  onDelete,
}: TableProps<T>) => {
  if (isLoading)
    return <SkeletonTable columns={columns} showActions={showActions} />;

  return (
    <div className="overflow-x-auto rounded-normal border border-gray-400">
      <table className="min-w-full divide-y divide-gray-300">
        {/* Encabezados */}
        <thead className="bg-secondary text-white">
          <tr>
            {columns.map((column, idx) => (
              <th
                key={idx}
                className="px-6 py-2 text-header4 text-center whitespace-wrap font-bold uppercase w-[3/4]"
              >
                {column.header}
              </th>
            ))}
            {showActions && (
              <th className="px-6 py-3 text-header4 text-center font-bold uppercase w-[1/4]">
                Acciones
              </th>
            )}
          </tr>
        </thead>

        {/* Filas */}
        <tbody className="divide-y divide-gray-200">
          {data.map((item, rowIdx) => (
            <tr
              key={rowIdx}
              className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-200"}
            >
              {columns.map((column, colIdx) => (
                <td
                  key={colIdx}
                  className={`px-6 py-4 whitespace-nowrap text-sm text-center w-[3/4] ${
                    column.className || ""
                  }`}
                >
                  {String(item[column.accessor])}
                </td>
              ))}

              {/* Acciones */}
              {showActions && (
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium w-[1/4]">
                  <div className="flex justify-center gap-4">
                    {onView && (
                      <button
                        onClick={() => onView(item)}
                        className="text-secondary hover:text-primary"
                      >
                        <ViewIcon className="h5 w-5" />
                      </button>
                    )}
                    {onEdit && (
                      <button
                        onClick={() => onEdit(item)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <EditIcon className="h-5 w-5" />
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => onDelete(item)}
                        className="text-decline hover:text-red-900"
                      >
                        <DeleteIcon className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
