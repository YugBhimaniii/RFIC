"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { registrationSchema, RegistrationFormValues } from "@/lib/validations";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function RegistrationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isIeeeMember, setIsIeeeMember] = useState(false);

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      category: "STUDENT_RIT",
      institutionOrCompany: "",
      ieeeMember: false,
      ieeeMembershipId: "",
      githubHandle: "",
      experienceLevel: "BEGINNER",
    },
  });

  async function onSubmit(data: RegistrationFormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      toast({
        title: "Registration Successful!",
        description: "Your spot has been reserved! We will contact you closer to the event date.",
        variant: "default",
        className: "bg-sky-600 text-white border-none",
      });
      
      form.reset();
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="register">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Secure Your Spot</h2>
          <p className="text-slate-600">Register for the IEEE RF IC Design Micro-Specialization series.</p>
        </div>

        <div className="bg-white p-6 md:p-10 rounded-xl border border-slate-200 shadow-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-900">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-900">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-900">Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1..." className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-900">Participant Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-500">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-500">
                          <SelectItem value="STUDENT_RIT">Student (RIT)</SelectItem>
                          <SelectItem value="STUDENT_EXTERNAL">Student (External)</SelectItem>
                          <SelectItem value="RESEARCH_SCHOLAR">Research Scholar / PhD</SelectItem>
                          <SelectItem value="INDUSTRY_YP">Industry / Young Professional</SelectItem>
                          <SelectItem value="ACADEMIA">Academia / Faculty</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="institutionOrCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-900">Institution or Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="University of XYZ / Intel" className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-500" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-200 pt-6 mt-6">
                 <FormField
                  control={form.control}
                  name="ieeeMember"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base text-slate-900">
                          IEEE Member
                        </FormLabel>
                        <FormDescription className="text-slate-500">
                          Are you a current IEEE member?
                        </FormDescription>
                      </div>
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={(e) => {
                            field.onChange(e.target.checked);
                            setIsIeeeMember(e.target.checked);
                          }}
                          className="w-5 h-5 accent-sky-600 bg-white border-slate-300 rounded"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                {isIeeeMember && (
                  <FormField
                    control={form.control}
                    name="ieeeMembershipId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-900">IEEE Membership ID</FormLabel>
                        <FormControl>
                          <Input type="text" inputMode="numeric" pattern="[0-9]*" placeholder="Enter your ID (numbers only)" className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-500" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                 <FormField
                  control={form.control}
                  name="experienceLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-900">Experience Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-500">
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-500">
                          <SelectItem value="BEGINNER">Beginner (No prior tape-out)</SelectItem>
                          <SelectItem value="INTERMEDIATE_ANALOG">Intermediate (Basic Analog/VLSI)</SelectItem>
                          <SelectItem value="ADVANCED_RF">Advanced (RF IC / Past Tape-outs)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="githubHandle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-900">GitHub Profile URL (For Capstone)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://github.com/username" className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold h-12 text-lg shadow-md shadow-sky-600/20 mt-8">
                {isSubmitting ? "Registering..." : "Submit Registration"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
