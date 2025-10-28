"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { StackingCards, StackingCard } from "@/components/stacking-cards";

// Metadata moved to layout or remove for client component

export default function UseCasesPage() {
  const useCases = [
    {
      industry: "Automotive",
      title: "Competitive Conquest",
      challenge: "Auto brand needs to target competitor viewers and measure showroom visit lift",
      solution: "Use SYNC Audience to target competitor viewers, SYNC Pulse to unify reach across TV and OTT, and SYNC Adlytics to optimize based on engagement signals",
      results: [
        "25% incremental reach by targeting competitor viewers",
        "18% increase in showroom visits measured via location data",
        "30% budget reallocation mid-flight to top-performing placements",
      ],
    },
    {
      industry: "Consumer Goods",
      title: "New Product Launch",
      challenge: "CPG brand launching premium product needs to find high-value audiences and optimize creative",
      solution: "Use SYNC Audience to identify premium content viewers, SYNC Adlytics to forecast outcomes and test creative variations, SYNC Pulse to measure deduplicated reach",
      results: [
        "35% higher engagement from premium audience segments",
        "22% creative lift from optimized messaging",
        "40% reduction in wasted impressions via deduplication",
      ],
    },
    {
      industry: "Financial Services",
      title: "DTC Acquisition",
      challenge: "Fintech app needs to reach high-value households and measure application intent",
      solution: "Use SYNC Audience to target high-income households, SYNC Adlytics to measure search and site visit lift, SYNC Pulse to optimize frequency",
      results: [
        "45% increase in qualified applications",
        "28% improvement in cost per acquisition",
        "Real-time optimization reduced frequency waste by 35%",
      ],
    },
    {
      industry: "Entertainment & OTT",
      title: "Show Launch",
      challenge: "OTT platform launching new series needs to find fan segments and manage cross-screen frequency",
      solution: "Use SYNC Audience to find genre affinity audiences by language, SYNC Pulse to manage cross-screen frequency, SYNC Adlytics to measure engagement",
      results: [
        "50% higher streaming engagement from targeted audiences",
        "32% reduction in over-exposure across TV and OTT",
        "25% increase in subscription conversions",
      ],
    },
    {
      industry: "Retail & E-Commerce",
      title: "Seasonal Peaks",
      challenge: "E-commerce brand needs to maximize unique reach during festival season and optimize for conversions",
      solution: "Use SYNC Pulse to maximize deduplicated reach, SYNC Audience to control duplication, SYNC Adlytics to reallocate to top-converting placements",
      results: [
        "40% increase in unique reach during peak period",
        "55% improvement in conversion rate",
        "Real-time budget shifts increased ROI by 30%",
      ],
    },
    {
      industry: "Telecom",
      title: "Plan Upgrade Campaign",
      challenge: "Telecom provider needs to target specific customer segments and measure upgrade intent",
      solution: "Use SYNC Audience to target competitive viewers and lapsed customers, SYNC Adlytics to measure intent signals, SYNC Pulse for unified reporting",
      results: [
        "38% increase in plan upgrade rate",
        "25% reduction in customer acquisition cost",
        "Real-time creative optimization improved messaging resonance by 20%",
      ],
    },
    {
      industry: "Pharma & Healthcare",
      title: "Awareness Campaign",
      challenge: "Healthcare brand needs to reach specific demographic segments across regions with compliant measurement",
      solution: "Use SYNC Audience for demographic and regional targeting, SYNC Pulse for privacy-compliant measurement, SYNC Adlytics for engagement tracking",
      results: [
        "42% increase in brand awareness",
        "Regional targeting improved relevance by 35%",
        "Privacy-first measurement maintained compliance",
      ],
    },
    {
      industry: "Travel & Hospitality",
      title: "Destination Marketing",
      challenge: "Tourism board needs to reach high-intent travelers and measure booking lift across multiple markets",
      solution: "Use SYNC Audience to target travel content viewers, SYNC Adlytics to measure booking intent signals, SYNC Pulse for cross-market measurement",
      results: [
        "48% increase in booking inquiries",
        "33% improvement in cost per booking",
        "Regional optimization improved market efficiency by 28%",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600/10 via-background to-blue-600/10">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Real Challenges. Real Results.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore how SYNC OS solves cross-media planning, optimization, and measurement challenges
              across India&apos;s diverse markets and languages.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StackingCards>
            {useCases.map((useCase, index) => (
              <StackingCard key={index} index={index} total={useCases.length}>
                <Card className="overflow-hidden border-white/10 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="bg-muted/30">
                    <div className="mb-2 inline-block rounded-full bg-purple-600/10 px-3 py-1 text-sm font-medium text-purple-600">
                      {useCase.industry}
                    </div>
                    <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid gap-8 md:grid-cols-3">
                      <div>
                        <h3 className="font-semibold text-foreground">Challenge</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{useCase.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Solution</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{useCase.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Results</h3>
                        <ul className="mt-2 space-y-2">
                          {useCase.results.map((result, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                              <span className="text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StackingCard>
            ))}
          </StackingCards>
        </div>
      </section>

      {/* Industry Summary */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted Across Industries
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Leading brands and agencies across India rely on SYNC OS for convergent TV success
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              "Automotive",
              "Consumer Goods",
              "Financial Services",
              "Telecom",
              "Entertainment & OTT",
              "E-Commerce",
              "Pharma & Healthcare",
              "Travel & Hospitality",
            ].map((industry) => (
              <Card key={industry} className="text-center">
                <CardContent className="p-6">
                  <p className="font-medium">{industry}</p>
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
              Ready to See Results Like These?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get a custom diagnostic for your brand to see how SYNC OS can transform your campaigns
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" asChild>
                <Link href="/contact">
                  Request a Demo
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
