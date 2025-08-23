"use client"

import React from "react";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { sectionWrapper } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { FormInput } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { FormSuccessDialog } from "./solution/form-success";
import { format } from "date-fns";
import { FormErrorDialog } from "./solution/form-error";

const defaultTimePreference = "option-two";
const url = 'https://formspree.io/f/xeozybwa';
// const url = 'https://formkeep.com/p/4887cf29f9c26684c5c7c587a97c3ed4';

const formSchema = z.object({
  full_name: z.string().min(1, "Nama lengkap tidak boleh kosong"),
  job_title: z.string().min(1, "Posisi pekerjaan tidak boleh kosong"),
  company: z.string().min(1, "Nama perusahaan tidak boleh kosong"),
  email: z.email({
    error:  "Email tidak boleh kosong",
  }),
  whatsapp: z.string().min(1, "No whatsapp tidak boleh kosong"),
  time_preference: z.string(),
  date: z.date().optional(),
  time: z.string().optional(),
})
.superRefine(({ time_preference, date, time }, refinementContext) => {
  if (time_preference !== defaultTimePreference && !date) {
    refinementContext.addIssue({
      code: "custom",
      message: "Tanggal tidak boleh kosong",
      path: ['date'],
    });
  }
  if (time_preference !== defaultTimePreference && !time) {
    refinementContext.addIssue({
      code: "custom",
      message: "Waktu preferensi tidak boleh kosong",
      path: ['time'],
    });
  }
});

export default function ContactForm() {
  const [open, setOpen] = React.useState(false)
  const [openDialog, setOpenDialog] = React.useState(false)
  const [openErrorDialog, setOpenErrorDialog] = React.useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      job_title: "",
      company: "",
      email: "",
      whatsapp: "",
      time_preference: "option-two",
      date: undefined,
      time: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      full_name: values.full_name,
      job_title: values.job_title,
      company: values.company,
      email: values.email,
      whatsapp: values.whatsapp,
      time_preference: values.time_preference !== defaultTimePreference ?
        `${format(values.date!, "dd/MM/yyyy")} ${values.time}` : 'Tidak ada'
    }

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/javascript',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOpenDialog(true);
        form.reset();
      })
      .catch((error) => {
        setOpenErrorDialog(true);
      });
  }

  const showTimePicker = form.watch("time_preference") !== "option-two";

  const { errors } = form.formState;

  return (
    <div className={sectionWrapper()} id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Hubungi Kami</h3>
          <p className="text-base leading-relaxed">
            Isi formulir berikut untuk mendapatkan dukungan langsung bersama tim ahli kami.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="space-y-6 bg-neutral-400 p-4 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <FormInput placeholder="Masukkan nama lengkap..." {...field} className="w-full rounded-none p-4 bg-white placeholder-neutral-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
                      </FormControl>
                      {errors.full_name && <FormMessage>{errors.full_name.message}</FormMessage>}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="job_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Posisi Pekerjaan</FormLabel>
                      <FormControl>
                        <FormInput placeholder="Masukkan posisi pekerjaan..." {...field} className="w-full rounded-none p-4 bg-white placeholder-neutral-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
                      </FormControl>
                      {errors.job_title && <FormMessage>{errors.job_title.message}</FormMessage>}
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asal Perusahaan</FormLabel>
                      <FormControl>
                        <FormInput placeholder="Masukkan asal perusahaan..." {...field} className="w-full rounded-none p-4 bg-white placeholder-neutral-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
                      </FormControl>
                      {errors.company && <FormMessage>{errors.company.message}</FormMessage>}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <FormInput placeholder="Masukkan email..." {...field} className="w-full rounded-none p-4 bg-white placeholder-neutral-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
                      </FormControl>
                      {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nomor whatsapp</FormLabel>
                    <FormControl>
                      <FormInput placeholder="Masukkan nomor whatsapp..." {...field} className="w-full rounded-none p-4 bg-white placeholder-neutral-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" />
                    </FormControl>
                    {errors.whatsapp && <FormMessage>{errors.whatsapp.message}</FormMessage>}
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="time_preference"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Apakah kamu mempunyai preferensi waktu untuk berdiskusi lebih lanjut?</FormLabel>
                      <FormControl>
                          <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="md:flex md:space-x-6">
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="option-one" id="option-one" />
                            </FormControl>
                            <Label htmlFor="option-one">Ya, saya memiliki preferensi waktu</Label>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="option-two" id="option-one" />
                            </FormControl>
                            <Label htmlFor="option-two">Tidak, saya fleksibel</Label>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {showTimePicker && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tanggal</FormLabel>
                        <FormControl>
                          <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild className="font-secondary">
                              <Button
                                variant="outline"
                                id="date-picker"
                                className="w-full justify-between font-normal font-secondary"
                              >
                                {field.value ? (
                                  format(field.value, "dd/MM/yyyy")
                                ) : (
                                  <span className="font-secondary">Pilih tanggal</span>
                                )}
                                <ChevronDownIcon />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto overflow-hidden p-0 font-secondary" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date()
                                }
                                captionLayout="dropdown"
                                className="font-secondary"
                              />
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        {errors.date && <FormMessage>{errors.date.message}</FormMessage>}
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Waktu Preferensi</FormLabel>
                        <FormControl>
                          <FormInput 
                            placeholder="Pilih waktu preferensi (WIB)" 
                            className="w-full rounded-none p-4 bg-white placeholder-neutral-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" 
                            type="time"
                            id="time-picker"
                            step="1"
                            {...field} 
                          />
                        </FormControl>
                        {errors.time && <FormMessage>{errors.time.message}</FormMessage>}
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <Button disabled={form.formState.isSubmitting} type="submit" className="w-full md:text-lg md:p-6 font-secondary cursor-pointer">
                Kirim
              </Button>
              <p className="text-sm font-medium leading-relaxed">
                Kami menghargai privasi Anda. Data yang dikirimkan hanya untuk keperluan komunikasi dan tidak akan
                digunakan untuk keperluan lain.
              </p>
            </form>
          </Form>
        </div>
      </div>
      <FormSuccessDialog open={openDialog} close={() => setOpenDialog(false)} />
      <FormErrorDialog open={openErrorDialog} close={() => setOpenErrorDialog(false)} />
    </div>
  )
}
