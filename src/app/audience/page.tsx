import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, Shield, Users, Monitor, Network, Target, Zap, RefreshCw } from "lucide-react";
import Link from "next/link";
import { BentoGrid, BentoCard } from "@/components/bento-grid";

export const metadata = {
  title: "SYNC Audience India - First-Party TV Viewership & Cross-Device Targeting",
  description: "Target real Indian audiences using privacy-first TV and OTT viewership intelligence. Reduce duplication and maximize incremental reach across screens.",
};

export default function AudiencePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600/10 via-background to-blue-600/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-purple-600/20 bg-purple-600/10 px-4 py-2">
              <Users className="mr-2 h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium">SYNC Audience</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Target Real People, Not Proxies
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              SYNC Audience delivers privacy-first viewership intelligence across TV and connected devices.
              Map households across screens, build high-value cohorts, and close the loop from targeting to measurement.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Request SYNC Audience Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Audience Capabilities
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
              Viewership Intelligence Built for India
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Capture content affinity and viewing behaviors across linear TV and OTT to understand what audiences
              watch, in which languages, and where. Connect TVs to mobile and desktop devices at the household level
              for coordinated campaigns and measurement.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Real-Time Viewership Capture",
                description: "Across all content types, channels, and platforms",
                icon: Check,
              },
              {
                title: "Cross-Device Household Identity",
                description: "For frequency control and coordinated reach",
                icon: Check,
              },
              {
                title: "Incremental Reach Optimization",
                description: "Find net-new audiences across platforms",
                icon: Check,
              },
              {
                title: "Behavioral Targeting",
                description: "By genre, content, and competitive viewing",
                icon: Check,
              },
              {
                title: "Omniscreen Activation",
                description: "Via preferred DSPs and platforms",
                icon: Check,
              },
              {
                title: "Privacy-First Data",
                description: "100% opt-in with easy opt-out mechanisms",
                icon: Shield,
              },
            ].map((capability, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10">
                    <capability.icon className="h-5 w-5 text-purple-600" />
                  </div>
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

      {/* How It Works */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How SYNC Audience Works
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <BentoGrid>
              <BentoCard
                icon={<Monitor className="h-6 w-6" />}
                title="Capture TV & OTT Viewership"
                description="Real-time viewership intelligence from connected TVs and streaming devices captures what audiences watch—content, channels, programs—across linear TV and OTT platforms in India."
                index={0}
              />
              <BentoCard
                icon={<Network className="h-6 w-6" />}
                title="Build Cross-Device Identity Graph"
                description="Map TVs to mobile and desktop devices at the household level. Understand the full screen ecosystem for coordinated reach and frequency control."
                index={1}
              />
              <BentoCard
                icon={<Users className="h-6 w-6" />}
                title="Create High-Value Audience Cohorts"
                description="Segment audiences by content affinity, genre preferences, language, region, and viewing patterns. Build cohorts based on real viewing behavior, not proxies."
                index={2}
              />
              <BentoCard
                icon={<Target className="h-6 w-6" />}
                title="Activate Across Screens"
                description="Push audiences to your preferred DSPs and platforms for TV, OTT, and digital activation. Target the right households with the right message across screens."
                index={3}
              />
              <BentoCard
                icon={<Zap className="h-6 w-6" />}
                title="Control Frequency & Duplication"
                description="Use cross-device identity to manage frequency caps and prevent over-saturation. Maximize incremental reach by finding net-new audiences."
                index={4}
              />
              <BentoCard
                icon={<RefreshCw className="h-6 w-6" />}
                title="Close the Loop with Measurement"
                description="Connect audience targeting to campaign measurement. Verify delivery, measure outcomes, and optimize for next campaign."
                index={5}
              />
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Advertisers Choose SYNC Audience
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                title: "Real Viewership, Not Proxies",
                description: "Target based on what audiences actually watch—content, genres, channels—across TV and OTT. No guessing, no proxies.",
              },
              {
                title: "India-Ready Scale",
                description: "Understand viewing patterns across languages, regions, and cultural moments. Built for India's diversity and complexity.",
              },
              {
                title: "Cross-Screen Coordination",
                description: "Household-level identity graph connects TVs to mobile and desktop. Manage frequency and maximize incremental reach.",
              },
              {
                title: "Privacy-First Data Practices",
                description: "100% opt-in data collection with easy opt-out mechanisms. No PII shared. Aggregated, household-level insights.",
              },
              {
                title: "Platform Independence",
                description: "Activate via your preferred DSPs and platforms. No vendor lock-in. Works with your existing stack.",
              },
              {
                title: "Closed-Loop Measurement",
                description: "Connect targeting to measurement. Verify delivery, prove outcomes, and optimize for next campaign.",
              },
            ].map((benefit, index) => (
              <Card key={index}>
                <CardContent className="flex gap-6 p-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10">
                      <Check className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Compliance */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Shield className="mx-auto h-12 w-12 text-purple-600" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Privacy & Compliance
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              SYNC Audience is built on privacy-first principles with enterprise-grade security
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>100% Opt-In Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All viewership data is collected with explicit user consent. Clear privacy policies and transparent data usage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Easy Opt-Out Mechanisms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Users can opt out at any time through simple, accessible controls. Immediate data deletion upon request.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>No PII Shared</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  No personally identifiable information is ever shared with advertisers. All insights are anonymized and aggregated.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Household-Level Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Data is aggregated at household level for privacy protection while maintaining targeting precision.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Use Cases
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Competitive Conquest",
                description: "Target audiences watching competitor content. Reach them across TV, OTT, and digital with coordinated messaging.",
              },
              {
                title: "Content Affinity Targeting",
                description: "Find audiences with high affinity for specific genres, shows, or content types. Build precision cohorts.",
              },
              {
                title: "Regional & Language Campaigns",
                description: "Understand viewing preferences by language and region. Tailor creative and media to local preferences.",
              },
              {
                title: "Incremental Reach Expansion",
                description: "Identify over-saturated households and find net-new audiences across platforms to maximize unique reach.",
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

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600/10 via-background to-blue-600/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Target Real Audiences?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how SYNC Audience transforms TV and OTT targeting with privacy-first viewership intelligence
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
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
