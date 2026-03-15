"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="mx-auto w-full max-w-340 px-4 pt-28 pb-20 md:pt-40">
      <div className="mb-16 flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Get in Touch
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          We&apos;d love to hear from you. Whether you have a question about our
          services, consultations, or anything else, our team is ready to answer
          all your questions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <Card className="border-border/50 h-fit bg-white shadow-md">
            <CardContent className="flex h-full flex-col gap-8 p-8">
              <div className="flex shrink-0 items-start space-x-4">
                <div className="bg-primary/20 rounded-full p-3">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    myaccount.abc@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-start space-x-4">
                <div className="bg-primary/20 rounded-full p-3">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    +91 9654915719
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-start space-x-4">
                <div className="bg-primary/20 rounded-full p-3">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-muted-foreground text-sm">Shimla, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="border-border/50 bg-white shadow-md">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Leave us a message..."
                    className="min-h-[150px]"
                  />
                </div>

                <Button className="w-full md:w-auto" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
