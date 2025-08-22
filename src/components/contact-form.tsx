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
import { FormInput, Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";

const defaultTimePreference = "option-two";

const formSchema = z.object({
  full_name: z.string().min(1, "Nama lengkap tidak boleh kosong"),
  job_title: z.string().min(1, "Posisi pekerjaan tidak boleh kosong"),
  company: z.string().min(1, "Nama perusahaan tidak boleh kosong"),
  email: z.email({
    error:  "Email tidak boleh kosong",
  }),
  whatsapp: z.string().min(1, "No whatsapp tidak boleh kosong"),
  time_preference: z.string(),
  date: z.date(),
  time: z.string(),
}).superRefine((data, ctx) => {
  const { time_preference } = ctx.value;

  if (time_preference !== defaultTimePreference && !data.date) {
    ctx.addIssue({
      code: "custom",
      message: "custom message",
      path: ["date"],
    });
  }
});

export default function ContactForm() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  
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
      time: undefined,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const showTimePicker = form.watch("time_preference") !== "option-two";

  const { errors } = form.formState;

  return (
    <div className={sectionWrapper()}>
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

              {/* Second Row */}
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
                  <div className="flex flex-col gap-3 w-full">
                    <Label htmlFor="date-picker" className="px-1">
                      Date
                    </Label>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild className="font-secondary">
                        <Button
                          variant="outline"
                          id="date-picker"
                          className="w-full justify-between font-normal"
                        >
                          {date ? date.toLocaleDateString() : "Select date"}
                          <ChevronDownIcon />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          captionLayout="dropdown"
                          className="font-secondary"
                          onSelect={(date) => {
                            setDate(date)
                            setOpen(false)
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="time-picker" className="px-1">
                      Time
                    </Label>
                    <Input
                      type="time"
                      id="time-picker"
                      step="1"
                      defaultValue="10:30:00"
                      className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none font-secondary"
                    />
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full md:text-lg md:p-6 font-secondary">
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
    </div>
  )
}
