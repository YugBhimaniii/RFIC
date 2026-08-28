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
        className: "bg-emerald-500 text-white border-none",
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
    <section className="py-20 bg-[#111827] border-t border-[#1F2937]" id="register">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Secure Your Spot</h2>
          <p className="text-gray-400">Register for the IEEE RF IC Design Micro-Specialization series.</p>
        </div>

        <div className="bg-[#0B0F19] p-6 md:p-10 rounded-xl border border-[#1F2937] shadow-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-[#111827] border-[#1F2937] text-white" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" className="bg-[#111827] border-[#1F2937] text-white" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-400" />
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
                      <FormLabel className="text-gray-300">Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+1..." className="bg-[#111827] border-[#1F2937] text-white" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Participant Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-[#111827] border-[#1F2937] text-white">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#111827] border-[#1F2937] text-white">
                          <SelectItem value="STUDENT_RIT">Student (RIT)</SelectItem>
                          <SelectItem value="STUDENT_EXTERNAL">Student (External)</SelectItem>
                          <SelectItem value="RESEARCH_SCHOLAR">Research Scholar / PhD</SelectItem>
                          <SelectItem value="INDUSTRY_YP">Industry / Young Professional</SelectItem>
                          <SelectItem value="ACADEMIA">Academia / Faculty</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="institutionOrCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Institution or Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="University of XYZ / Intel" className="bg-[#111827] border-[#1F2937] text-white" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-[#1F2937] pt-6 mt-6">
                 <FormField
                  control={form.control}
                  name="ieeeMember"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border border-[#1F2937] bg-[#111827] p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base text-gray-200">
                          IEEE Member
                        </FormLabel>
                        <FormDescription className="text-gray-500">
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
                          className="w-5 h-5 accent-emerald-500 bg-[#0B0F19] border-[#1F2937] rounded"
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
                        <FormLabel className="text-gray-300">IEEE Membership ID</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your ID" className="bg-[#111827] border-[#1F2937] text-white" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-400" />
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
                      <FormLabel className="text-gray-300">Experience Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-[#111827] border-[#1F2937] text-white">
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#111827] border-[#1F2937] text-white">
                          <SelectItem value="BEGINNER">Beginner (No prior tape-out)</SelectItem>
                          <SelectItem value="INTERMEDIATE_ANALOG">Intermediate (Basic Analog/VLSI)</SelectItem>
                          <SelectItem value="ADVANCED_RF">Advanced (RF IC / Past Tape-outs)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="githubHandle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">GitHub Profile URL (For Capstone)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://github.com/username" className="bg-[#111827] border-[#1F2937] text-white" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold h-12 text-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] mt-8">
                {isSubmitting ? "Registering..." : "Submit Registration"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
