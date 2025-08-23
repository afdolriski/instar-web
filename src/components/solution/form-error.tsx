import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { CircleX } from "lucide-react"

export function FormErrorDialog({ open, close }: { open: boolean, close: () => void }) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="p-16">
        <AlertDialogHeader className="mb-4">
          <CircleX className="mx-auto" fill="red" color="#ffffff" size={96} />
          <AlertDialogTitle className="font-secondary text-center">Formulir gagal dikirim</AlertDialogTitle>
          <AlertDialogDescription className="font-secondary text-center">
              Periksa koneksi internet Anda atau coba lagi nanti.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="font-secondary text-center w-full">
          <AlertDialogAction className="w-max-[100px] cursor-pointer mx-auto" onClick={close}>Tutup</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
