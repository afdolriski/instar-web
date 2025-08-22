"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

type Companies = {
  id?: number,
  name: string,
  code: string,
  sector: string,
  sub_sector: string,
  score: number,
  status?: string,
}

export const columns: ColumnDef<Companies>[] = [
  {
    id: "id",
    header: "No.",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "code",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-medium"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kode
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const item = row.original
      return (
        <div className="pl-4 font-semibold">{item.code}</div>
      )
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-medium"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Perusahaan
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const item = row.original
      return (
        <div className="pl-4 font-semibold">{item.name}</div>
      )
    },
  },
  {
    accessorKey: "sector",
    header: "Sektor",
  },
  {
    accessorKey: "sub_sector",
    header: "Sub Sektor",
  },
  {
    accessorKey: "score",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-medium"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Indeks Keseluruhan
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const item = row.original
      return (
        <div className="pl-4">{item.score}</div>
      )
    },
  },
]