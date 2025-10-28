import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, TrendingUp, Users, BarChart, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { BentoGrid, BentoCard } from "@/components/bento-grid";
import { SplitText, AnimatedContent } from "@/components/reactbits";

export const metadata = {
  title: "SYNC Pulse India - Cross-Media Measurement & Deduplicated Reach",
  description: "Unified measurement across TV, OTT, and digital in India. Get deduplicated reach, frequency, and outcome metrics with a single-source view.",
};

export default function PulsePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600/10 via-background to-blue-600/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-purple-600/20 bg-purple-600/10 px-4 py-2">
              <Target className="mr-2 h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium">SYNC Pulse</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              <SplitText
                text="Cross-Media Measurement Without Guesswork"
                splitType="words"
                delay={100}
                duration={0.8}
                ease="power3.out"
              />
            </h1>
            <AnimatedContent
              direction="up"
              distance={30}
              duration={1}
              delay={800}
              className="mt-6"
            >
              <SplitText
                text="SYNC Pulse delivers deduplicated reach, frequency, and outcome-ready metrics across linear TV, CTV/OTT, and digital—built for India&apos;s multi-platform reality."
                splitType="words"
                delay={60}
                duration={0.6}
                ease="power3.out"
                className="text-lg leading-8 text-muted-foreground"
              />
            </AnimatedContent>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Request SYNC Pulse Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download Measurement Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedContent
            direction="up"
            distance={30}
            duration={0.8}
            delay={0}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <SplitText
                text="The Cross-Platform Challenge"
                splitType="words"
                delay={80}
                duration={0.6}
                ease="power3.out"
              />
            </h2>
          </AnimatedContent>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Fragmented Reporting",
                description: "Separate reports across TV, OTT, and digital with no unified view"
              },
              {
                title: "Duplicate Audiences",
                description: "Inflated reach numbers that mask true frequency and saturation"
              },
              {
                title: "No Consistent Currency",
                description: "Different metrics across platforms make comparison impossible"
              },
              {
                title: "Outcome Disconnect",
                description: "Hard to connect exposure to business results and ROI proof"
              }
            ].map((problem, index) => (
              <AnimatedContent
                key={problem.title}
                direction="up"
                distance={30}
                duration={0.6}
                delay={index * 150}
                className="h-full"
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </CardContent>
                </Card>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedContent
            direction="up"
            distance={30}
            duration={0.8}
            delay={0}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <SplitText
                text="One Platform. One Truth. Complete Visibility."
                splitType="words"
                delay={100}
                duration={0.8}
                ease="power3.out"
              />
            </h2>
            <AnimatedContent
              direction="up"
              distance={20}
              duration={0.8}
              delay={800}
              className="mt-4"
            >
              <SplitText
                text="SYNC Pulse combines large-scale signals with panel-calibrated accuracy to deliver a single, deduplicated view of audiences across platforms and devices in India—so planning, verification, and reporting align."
                splitType="words"
                delay={60}
                duration={0.6}
                ease="power3.out"
                className="text-lg text-muted-foreground"
              />
            </AnimatedContent>
          </AnimatedContent>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                title: "Cross-Device Identity",
                description: "Household and screen deduplication for accurate frequency control"
              },
              {
                title: "Consistent Metrics",
                description: "Apples-to-apples comparison across all media channels"
              },
              {
                title: "Incremental Reach Analytics",
                description: "Find net-new audiences and optimize media mix efficiency"
              },
              {
                title: "Outcomes Linkage",
                description: "Prove impact on business results with flexible attribution"
              }
            ].map((solution, index) => (
              <AnimatedContent
                key={solution.title}
                direction="up"
                distance={30}
                duration={0.6}
                delay={index * 200}
                className="h-full"
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedContent
            direction="up"
            distance={30}
            duration={0.8}
            delay={0}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <SplitText
                text="Key Features"
                splitType="words"
                delay={100}
                duration={0.8}
                ease="power3.out"
              />
            </h2>
          </AnimatedContent>

          <div className="mx-auto mt-16 max-w-7xl">
            <BentoGrid>
              <BentoCard
                icon={<Target className="h-6 w-6" />}
                title="Deduplicated Cross-Media Reach"
                description="See unique reach and true frequency across TV, OTT, and digital without double-counting."
                index={0}
              />
              <BentoCard
                icon={<BarChart className="h-6 w-6" />}
                title="Unified Measurement Currency"
                description="Plan, buy, and verify with consistent metrics across platforms, publishers, and devices."
                index={1}
              />
              <BentoCard
                icon={<TrendingUp className="h-6 w-6" />}
                title="Cross-Media Planning & Optimization"
                description="Model scenarios, test share shifts, and optimize for incremental reach and efficient frequency."
                index={2}
              />
              <BentoCard
                icon={<Zap className="h-6 w-6" />}
                title="Outcomes & ROI"
                description="Connect exposure to business KPIs with outcome-ready analytics and flexible attribution options."
                index={3}
              />
              <BentoCard
                icon={<Users className="h-6 w-6" />}
                title="Audience Integration"
                description="Bring your first-party and third-party audiences into planning and measurement workflows."
                index={4}
              />
              <BentoCard
                icon={<Shield className="h-6 w-6" />}
                title="Publisher & Platform Validation"
                description="Help sellers demonstrate cross-platform value, incremental reach, and delivery integrity."
                index={5}
              />
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedContent
            direction="up"
            distance={30}
            duration={0.8}
            delay={0}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <SplitText
                text="Built for India&apos;s Data Reality"
                splitType="words"
                delay={100}
                duration={0.8}
                ease="power3.out"
              />
            </h2>
          </AnimatedContent>

          <div className="mx-auto mt-16 max-w-5xl">
            <AnimatedContent
              direction="up"
              distance={40}
              duration={0.8}
              delay={400}
            >
              <Card>
                <CardContent className="p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="font-semibold text-foreground">Coverage</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Linear TV, CTV/OTT platforms and apps, digital video, VOD, and time-shifted viewing
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Methodology</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Hybrid approach combining scale with panel calibration and quality controls
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Identity</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Cross-device and household-level resolution with privacy-first aggregation
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Integration</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Works with major planning platforms, DSPs, analytics tools, and custom APIs
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedContent
            direction="up"
            distance={30}
            duration={0.8}
            delay={0}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <SplitText
                text="Use Cases"
                splitType="words"
                delay={100}
                duration={0.8}
                ease="power3.out"
              />
            </h2>
          </AnimatedContent>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Incremental Reach Optimization",
                description: "Identify over-saturated viewers and unlock net-new audiences across languages, regions, and platforms.",
              },
              {
                title: "Cross-Platform Campaign Verification",
                description: "Verify deduplicated delivery and manage make-goods with consistent, trusted metrics.",
              },
              {
                title: "Convergent TV Planning",
                description: "Compare delivery and pricing efficiency across TV and OTT to negotiate confidently.",
              },
              {
                title: "ROI Proof",
                description: "Link exposure to online/offline outcomes and demonstrate business impact to stakeholders.",
              },
            ].map((useCase, index) => (
              <AnimatedContent
                key={index}
                direction="up"
                distance={30}
                duration={0.6}
                delay={index * 150}
                className="h-full"
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600/10 via-background to-blue-600/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedContent
            direction="up"
            distance={40}
            duration={1}
            delay={0}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <SplitText
                text="Ready to Get Started with SYNC Pulse?"
                splitType="words"
                delay={100}
                duration={0.8}
                ease="power3.out"
              />
            </h2>
            <AnimatedContent
              direction="up"
              distance={20}
              duration={0.8}
              delay={800}
              className="mt-4"
            >
              <SplitText
                text="See how SYNC Pulse delivers unified, deduplicated measurement for your campaigns"
                splitType="words"
                delay={60}
                duration={0.6}
                ease="power3.out"
                className="text-lg text-muted-foreground"
              />
            </AnimatedContent>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </div>
  );
}