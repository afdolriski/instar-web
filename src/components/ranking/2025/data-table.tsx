"use client"

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import React from "react"
import { Input } from "@/components/ui/input"
import { DataTablePagination } from "@/components/ui/pagination"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { rank2025SectorFilters, rank2025SubSectorFilters } from "@/data/rank-2025"
import { Search } from "lucide-react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 20
      }
    }
  })

  const currentSector = (table.getColumn("sector")?.getFilterValue() as string) ?? "";

  const createSubSectorOptions = () => {
    const item = rank2025SubSectorFilters.find(item => item.sector === currentSector);
    return item ? ['Semua', ...item.sub_sectors] : [];
  }

  const subSectorFilters = createSubSectorOptions();

  return (
    <div className={cn("space-y-4")}>
      <div className="flex flex-wrap gap-4 justify-start items-center w-full">
        <Input
          placeholder="Pencarian"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="flex-none w-full md:w-auto"
          startIcon={Search}
          id="search"
        />
        <Select
          value={(table.getColumn("sector")?.getFilterValue() as string) ?? ""}
          onValueChange={(value) => {
            table.getColumn("sector")?.setFilterValue(value === 'Semua' ? '' : value)
            table.getColumn("sub_sector")?.setFilterValue('')
          }}
        >
          <SelectTrigger className="h-8 rounded-none font-medium">
            <SelectValue placeholder="Sektor" />
          </SelectTrigger>
          <SelectContent side="bottom">
            {rank2025SectorFilters.map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={(table.getColumn("sub_sector")?.getFilterValue() as string) ?? ""}
          onValueChange={(value) => {
            table.getColumn("sub_sector")?.setFilterValue(value === 'Semua' ? '' : value)
          }}
          disabled={!currentSector}
        >
          <SelectTrigger className="h-8 rounded-none font-medium">
            <SelectValue placeholder="Sub Sektor" />
          </SelectTrigger>
          <SelectContent side="bottom">
            {subSectorFilters.map((item, key) => (
              <SelectItem key={key} value={`${item}`}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="overflow-scroll border">
        <Table>
          <TableHeader className="bg-tertiary-800">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-white">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={cn(index % 2 !== 0 ? "bg-white" : "bg-tertiary-50", "font-medium")}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
}