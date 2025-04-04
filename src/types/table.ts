// src/types/table.ts
export type Column<T> = {
    header: string;
    accessor: keyof T;
    className?: string;
  };
  
  export type TableProps<T> = {
    data: T[];
    columns: Column<T>[];
    isLoading?: boolean;
    showActions?: boolean;
    onView?: (item: T) => void;
    onEdit?: (item: T) => void;
    onDelete?: (item: T) => void;
  };