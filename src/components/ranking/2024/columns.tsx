"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

type Companies = {
  id?: number,
  name: string,
  sector: string,
  all: number,
  anti_coruption: number,
  environment: number,
  social: number
}

export const columns: ColumnDef<Companies>[] = [
  {
    id: "id",
    header: "No.",
    cell: ({ row }) => row.index + 1,
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
    accessorKey: "all",
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
        <div className="pl-4">{item.all}</div>
      )
    },
  },
  {
    accessorKey: "anti_coruption",
    header: "Indeks Anti Korupsi",
  },
  {
    accessorKey: "environment",
    header: "Indeks Lingkungan",
  },
  {
    accessorKey: "social",
    header: "Indeks Sosial HAM",
  },
]