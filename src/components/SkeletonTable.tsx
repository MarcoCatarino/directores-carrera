// src/components/ui/Table/TableSkeletonTable.tsx
import { Column } from "../types/table";

type SkeletonTableProps<T> = {
  columns: Column<T>[];
  showActions?: boolean;
};

export const SkeletonTable = <T,>({
  columns,
  showActions,
}: SkeletonTableProps<T>) => {
  return (
    <div className="overflow-x-auto rounded-normal border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-secondary text-white">
          <tr>
            {columns.map((_, idx) => (
              <th
                key={idx}
                className="px-6 py-3 text-left text-sm font-bold uppercase"
              >
                <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
              </th>
            ))}
            {showActions && <th className="px-6 py-3 text-right">Acciones</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[...Array(5)].map((_, rowIdx) => (
            <tr
              key={rowIdx}
              className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {columns.map((_, colIdx) => (
                <td key={colIdx} className="px-6 py-4 whitespace-nowrap">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                </td>
              ))}
              {showActions && (
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex justify-end space-x-2">
                    <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
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
