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
              Let's Transform Your TV Advertising Together
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
                  Get a quick assessment of your current TV and OTT campaigns. We'll analyze audience
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
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                  />
                </div>
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
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-foreground">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    required
                    className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                />
              </div>

              <div>
                <label htmlFor="companyType" className="block text-sm font-medium text-foreground">
                  Company Type *
                </label>
                <select
                  id="companyType"
                  name="companyType"
                  required
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                >
                  <option value="">Select company type</option>
                  <option value="advertiser">Advertiser/Brand</option>
                  <option value="agency">Agency</option>
                  <option value="publisher">Publisher/Platform</option>
                  <option value="technology">Technology Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-foreground">
                  Primary Interest *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                >
                  <option value="">Select primary interest</option>
                  <option value="audience">SYNC Audience</option>
                  <option value="adlytics">SYNC Adlytics</option>
                  <option value="pulse">SYNC Pulse</option>
                  <option value="platform">Full Platform</option>
                </select>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-foreground">
                  Industry *
                </label>
                <select
                  id="industry"
                  name="industry"
                  required
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                >
                  <option value="">Select industry</option>
                  <option value="automotive">Automotive</option>
                  <option value="cpg">Consumer Goods</option>
                  <option value="financial">Financial Services</option>
                  <option value="telecom">Telecom</option>
                  <option value="entertainment">Entertainment & OTT</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="pharma">Pharma & Healthcare</option>
                  <option value="travel">Travel & Hospitality</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message/Comments
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <div>
                <label htmlFor="source" className="block text-sm font-medium text-foreground">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  id="source"
                  name="source"
                  className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600"
                />
              </div>

              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Privacy Notice:</strong> We respect your privacy. Your information is used only to
                  respond to your inquiry and share relevant SYNC OS updates. We never sell or share your data
                  with third parties.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Submit
              </Button>
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
