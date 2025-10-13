import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, TrendingUp, Zap, Brain, LineChart, Target, Gauge, Sparkles } from "lucide-react";
import Link from "next/link";
import { BentoGrid, BentoCard } from "@/components/bento-grid";

export const metadata = {
  title: "SYNC Adlytics India - Predictive TV/OTT Outcomes & Creative Intelligence",
  description: "Predict campaign performance, measure engagement in near real-time, and optimize mid-flight across TV and OTT in India.",
};

export default function AdlyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-background to-purple-600/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-600/20 bg-blue-600/10 px-4 py-2">
              <TrendingUp className="mr-2 h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">SYNC Adlytics</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Predict Performance Before You Commit Budget
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              SYNC Adlytics connects ad airings with real-world intent signals—searches, site visits, and
              engagement—to forecast outcomes and optimize while campaigns run.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Request SYNC Adlytics Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                See Predictive Modeling in Action
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Outcomes Intelligence Engine
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Turn TV and OTT from exposure metrics into outcomes metrics. Predict which channels, programs,
              dayparts, and creatives will drive results—then validate and optimize in flight.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pre-Campaign Forecasting",
                description: "For media and creative plans before launch",
              },
              {
                title: "Real-Time Engagement Measurement",
                description: "Across platforms during campaign flight",
              },
              {
                title: "Mid-Flight Budget Optimization",
                description: "Toward high-performers while campaigns run",
              },
              {
                title: "Creative Diagnostics",
                description: "To understand what resonates with audiences",
              },
              {
                title: "Competitive Intelligence",
                description: "To track category activity and share of voice",
              },
              {
                title: "Engaged Audience Planning",
                description: "With leading planning tools and platforms",
              },
            ].map((capability, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How SYNC Adlytics Works
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <BentoGrid>
              <BentoCard
                icon={<Target className="h-6 w-6" />}
                title="Connect Ad Exposures to Intent Signals"
                description="Track when your TV and OTT ads air, then measure real-world engagement behaviors like searches, site visits, and actions across devices."
                index={0}
              />
              <BentoCard
                icon={<Brain className="h-6 w-6" />}
                title="Build Predictive Models"
                description="Analyze historical engagement patterns to forecast which channels, programs, dayparts, and creative messages will drive the strongest outcomes."
                index={1}
              />
              <BentoCard
                icon={<LineChart className="h-6 w-6" />}
                title="Forecast Campaign Performance"
                description="Before committing budget, see predicted engagement lift, search volume, and conversion potential for your media and creative plans."
                index={2}
              />
              <BentoCard
                icon={<Gauge className="h-6 w-6" />}
                title="Measure & Optimize In-Flight"
                description="Monitor engagement in near real-time. Identify under-performers early and reallocate budget to top-performing placements and creatives."
                index={3}
              />
              <BentoCard
                icon={<Sparkles className="h-6 w-6" />}
                title="Diagnose Creative Impact"
                description="Understand which creative elements (messaging, formats, talent) drive engagement. Test variations and optimize for maximum lift."
                index={4}
              />
              <BentoCard
                icon={<Zap className="h-6 w-6" />}
                title="Close the Loop to Outcomes"
                description="Link engagement signals to business outcomes—online conversions, offline sales, foot traffic—to prove ROI and inform future planning."
                index={5}
              />
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Advertisers Choose SYNC Adlytics
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                title: "Predictive, Not Just Descriptive",
                description: "Know what will work before you spend. Forecast outcomes based on proven engagement patterns.",
                icon: Check,
              },
              {
                title: "Near Real-Time Optimization",
                description: "Don't wait until campaign end. Optimize media and creative while campaigns are running.",
                icon: Check,
              },
              {
                title: "Creative Intelligence",
                description: "Understand which messages, formats, and talent drive engagement. Test and iterate for maximum impact.",
                icon: Check,
              },
              {
                title: "India-Ready Scale",
                description: "Measure across languages, regions, and cultural moments. Built for India's diversity and complexity.",
                icon: Check,
              },
              {
                title: "Platform Independent",
                description: "Works with your existing planning and buying tools. No vendor lock-in.",
                icon: Check,
              },
              {
                title: "Proven Results",
                description: "14% average effectiveness increase. 95% client retention. Trusted by leading brands and agencies.",
                icon: Check,
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-6 rounded-lg border border-border bg-card p-6">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                    <benefit.icon className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Use Cases
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "New Launch Acceleration",
                description: "Find high-affinity audiences, forecast outcomes, and prioritize high-impact placements to maximize launch success.",
              },
              {
                title: "Always-On Optimization",
                description: "Reallocate budget based on engagement signals and audience saturation. Back winners, cut losers in real-time.",
              },
              {
                title: "Creative Lift Testing",
                description: "Compare messages and formats. Rotate toward versions that drive action. Optimize creative mid-flight.",
              },
              {
                title: "Regional & Language Strategy",
                description: "Tailor creative and media to regional preferences and cultural moments. Measure engagement across India's diversity.",
              },
            ].map((useCase, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Proven at Scale
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="text-4xl font-bold text-blue-600">200M+</div>
              <div className="mt-2 text-sm text-muted-foreground">Ads Analyzed</div>
            </div>

            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="text-4xl font-bold text-blue-600">14%</div>
              <div className="mt-2 text-sm text-muted-foreground">Average Effectiveness Increase</div>
            </div>

            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="text-4xl font-bold text-blue-600">95%</div>
              <div className="mt-2 text-sm text-muted-foreground">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-background to-purple-600/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Predict Before You Spend?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how SYNC Adlytics transforms TV and OTT from exposure to outcomes
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
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
