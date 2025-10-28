import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact SYNC OS India - Request Demo, Sales, Support",
  description: "Get in touch with SYNC OS for demos, sales, partnerships, or support in India.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600/10 via-background to-blue-600/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Let&apos;s Transform Your TV Advertising Together
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Whether you need a platform demo, a rapid diagnostic, or a custom solution,
              our team will respond promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request a Demo</CardTitle>
                <CardDescription>
                  Platform walkthrough with India-specific examples
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  See SYNC OS in action with a personalized demo tailored to your industry and use cases.
                  Our team will walk you through all three products and answer your questions.
                </p>
                <Button className="mt-6 w-full">Schedule Demo</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Rapid Diagnostic</CardTitle>
                <CardDescription>
                  Audience overlap, incremental reach, and creative impact review
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get a quick assessment of your current TV and OTT campaigns. We&apos;ll analyze audience
                  duplication, incremental reach opportunities, and creative performance.
                </p>
                <Button className="mt-6 w-full">Get Diagnostic</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Consultation</CardTitle>
                <CardDescription>
                  Cross-media strategy, predictive outcomes, and custom measurement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Schedule a consultation with our experts to discuss your convergent TV strategy,
                  measurement needs, and how SYNC OS can help you achieve your goals.
                </p>
                <Button className="mt-6 w-full">Book Consultation</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Get in Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill out the form below and our team will get back to you within 24 hours
            </p>

            <form className="mt-12 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@company.com"
                  className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  placeholder="Your company name"
                  className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                />
              </div>

              <div>
              <label htmlFor="interest" className="block text-sm font-medium text-foreground">
                  I&apos;m interested in *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                >
                  <option value="">Select an option</option>
                  <option value="demo">Platform Demo</option>
                  <option value="diagnostic">Rapid Diagnostic</option>
                  <option value="consultation">Consultation</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Send Message
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                We&apos;ll respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-purple-600" />
                <CardTitle className="mt-4">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">info@syncos.in</p>
                <p className="mt-2 text-sm text-muted-foreground">sales@syncos.in</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 text-purple-600" />
                <CardTitle className="mt-4">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Sales: +91 XXXX XXXX XX</p>
                <p className="mt-2 text-sm text-muted-foreground">Support: +91 XXXX XXXX XX</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-purple-600" />
                <CardTitle className="mt-4">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Mumbai, India</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Privacy-first data handling, audits, and industry-standard safeguards. We never share PII;
              all insights are anonymized and aggregated with opt-in and easy opt-out.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600/10 via-background to-blue-600/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join brands, agencies, and publishers using SYNC OS to modernize TV and OTT in India
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Request a Demo
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
