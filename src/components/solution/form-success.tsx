import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { CircleCheck } from "lucide-react"

export function FormSuccessDialog({ open, close }: { open: boolean, close: () => void }) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="p-16">
        <AlertDialogHeader className="mb-4">
          <CircleCheck className="mx-auto" fill="green" color="#ffffff" size={96} />
          <AlertDialogTitle className="font-secondary text-center">Formulir berhasil dikirim</AlertDialogTitle>
          <AlertDialogDescription className="font-secondary text-center">
            Tim kami akan segera menghubungi Anda untuk proses berikutnya.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="font-secondary text-center w-full">
          <AlertDialogAction className="w-max-[100px] cursor-pointer mx-auto" onClick={close}>Tutup</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
