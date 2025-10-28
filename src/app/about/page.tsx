import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About SYNC OS India - Modern Media Intelligence Platform",
  description: "SYNC OS is the unified operating system for convergent TV advertising in India, trusted by brands, agencies, and publishers to plan, optimize, and measure across screens.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600/10 via-background to-blue-600/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Built for India&apos;s{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Convergent TV Future
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              SYNC OS was founded to simplify cross-media planning and measurement in India.
              One platform for audience intelligence, predictive outcomes, and unified measurement.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Problem We Saw
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Advertisers juggle TV, OTT, digital video, and connected devices—each with different datasets
              and metrics. Reporting is fragmented, duplication is rampant, and ROI proof is slow.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              India&apos;s media landscape is uniquely complex: multiple languages, regional preferences, cultural
              moments, and a rapidly evolving mix of linear TV and streaming platforms. Traditional measurement
              tools weren&apos;t built for this reality.
            </p>

            <h2 className="mt-16 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Solution
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              SYNC OS unifies the ecosystem: privacy-first audience data, outcomes intelligence, and deduplicated
              cross-media measurement—delivering complete visibility from planning to optimization to proof.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We built SYNC OS specifically for India&apos;s convergent TV reality, with multi-lingual support,
              regional flexibility, and integration with the tools advertisers already use.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Complete Operating System
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three integrated products that work together seamlessly
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex rounded-lg bg-purple-600/10 p-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">SYNC Audience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  First-party viewership intelligence enabling precision targeting and incremental reach optimization
                  across TV and OTT.
                </p>
                <Button className="mt-6 w-full" variant="outline" asChild>
                  <Link href="/audience">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex rounded-lg bg-blue-600/10 p-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">SYNC Adlytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Predictive outcomes engine to forecast and optimize based on real-world engagement signals
                  and intent behaviors.
                </p>
                <Button className="mt-6 w-full" variant="outline" asChild>
                  <Link href="/adlytics">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 inline-flex rounded-lg bg-purple-600/10 p-3">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">SYNC Pulse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cross-media measurement delivering deduplicated reach, frequency, and outcome-ready analytics
                  across all platforms.
                </p>
                <Button className="mt-6 w-full" variant="outline" asChild>
                  <Link href="/pulse">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-lg font-medium text-foreground">
              Together: The complete operating system for India&apos;s convergent TV advertising
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Values
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Independence",
                description: "Platform-agnostic solutions that work with your existing stack. No vendor lock-in.",
              },
              {
                title: "Accuracy",
                description: "Rigorous methodology and quality controls to deliver measurement you can trust.",
              },
              {
                title: "Speed",
                description: "Real-time and near real-time insights to enable fast decision-making and optimization.",
              },
              {
                title: "Transparency",
                description: "Clear methodology, open reporting, and honest communication about capabilities and limitations.",
              },
              {
                title: "Privacy Leadership",
                description: "Privacy-first data practices with opt-in consent and easy opt-out mechanisms.",
              },
              {
                title: "India Focus",
                description: "Built specifically for India&apos;s unique media landscape, languages, and cultural diversity.",
              },
            ].map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Partners */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Technology & Partners
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              SYNC OS interoperates with leading planning, buying, and analytics tools to streamline workflows.
              Integrations are platform-agnostic and tailored to Indian advertisers and publishers.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <Card>
              <CardContent className="p-8">
                <div className="grid gap-8 md:grid-cols-3">
                  <div>
                    <h3 className="font-semibold text-foreground">Planning Tools</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Integrate with major media planning platforms for seamless workflow
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">DSPs & Platforms</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Activate audiences across TV, OTT, and digital via your preferred platforms
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Analytics Tools</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Export data to your existing analytics and BI tools via APIs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600/10 via-background to-blue-600/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Transform Your TV Advertising?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join brands, agencies, and publishers using SYNC OS to modernize convergent TV in India
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
