"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedText, GradientText } from "@/components/animated-text";
import { ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Dark Background and Animated Text */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
              <span className="block">SYNC OS:</span>
              <span className="block font-extrabold" style={{
                background: 'linear-gradient(to right, rgb(168, 85, 247), rgb(59, 130, 246), rgb(168, 85, 247))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Media Operating System
              </span>
              <span className="block">for India</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg"
            >
              SYNC OS unifies audience intelligence, predictive outcomes, and cross-media measurement
              across linear TV, CTV/OTT, and digital. Plan smarter, optimize faster, and prove ROI for
              India's diverse, multi-lingual audiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-5 text-base font-semibold transition-all hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#8b5cf6]"
              >
                <span className="relative z-10 flex items-center">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" style={{ backgroundSize: "200% 100%" }} />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/10 px-6 py-5 text-base font-semibold backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/5"
              >
                See Platform Overview
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-12 w-6 rounded-full border-2 border-white/20 p-1"
          >
            <div className="h-2 w-2 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Platform Overview Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              One Platform.{" "}
              <GradientText>Three Integrated Solutions.</GradientText>{" "}
              Complete Control.
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              From audience targeting to campaign optimization to cross-media measurement,
              SYNC OS gives you the end-to-end visibility you need to grow in India's fragmented media landscape.
            </p>
          </motion.div>

          {/* Product Cards */}
          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              {
                icon: Users,
                color: "purple",
                title: "SYNC Audience",
                tagline: "Real-World Viewership Intelligence for India",
                description: "Target with precision using privacy-first viewership intelligence across TVs and connected devices.",
                features: [
                  "Reach real people across TV and OTT",
                  "Activate precise cohorts by content, region, and language",
                  "Control cross-screen frequency and reduce duplication",
                  "Integrate with your preferred DSPs and platforms",
                ],
                link: "/audience",
              },
              {
                icon: TrendingUp,
                color: "blue",
                title: "SYNC Adlytics",
                tagline: "Predictive Outcomes & Creative Intelligence",
                description: "Know which investments will perform before you spend. Connect ad exposures to real-world intent signals.",
                features: [
                  "Predict performance before committing budget",
                  "Measure engagement in near real-time across TV and OTT",
                  "Optimize media and creative while campaigns run",
                  "Benchmark against category and creative norms",
                ],
                link: "/adlytics",
              },
              {
                icon: Target,
                color: "purple",
                title: "SYNC Pulse",
                tagline: "Cross-Media Measurement & Deduplicated Reach",
                description: "See your true unique reach and frequency across linear TV, CTV/OTT, and digital without double-counting.",
                features: [
                  "Deduplicated reach and frequency across screens",
                  "Consistent metrics for cross-channel comparison",
                  "Incremental reach and overlap analytics",
                  "Outcome-ready measurement and reporting",
                ],
                link: "/pulse",
              },
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative h-full overflow-hidden border-white/10 bg-card/50 backdrop-blur-sm transition-all hover:border-white/20 hover:shadow-[0_0_2rem_-0.5rem_#8b5cf6]">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${product.color}-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100`} />
                  <CardHeader className="relative">
                    <div className={`mb-4 inline-flex rounded-lg bg-${product.color}-600/10 p-3`}>
                      <product.icon className={`h-6 w-6 text-${product.color}-500`} />
                    </div>
                    <CardTitle className="text-2xl font-bold">{product.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {product.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative space-y-6">
                    <p className="text-muted-foreground">{product.description}</p>
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className={`mt-0.5 text-${product.color}-500`}>✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="ghost"
                      className="w-full justify-between group/btn"
                      asChild
                    >
                      <Link href={product.link}>
                        Explore {product.title}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="relative bg-white/[0.02] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for <GradientText>India's Modern Media Buyers</GradientText>
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "One Source of Truth",
                description: "Eliminate fragmented reporting from walled gardens. SYNC OS unifies measurement across TV, OTT, and digital with consistent, comparable metrics.",
              },
              {
                title: "Know Before You Spend",
                description: "Predictive models forecast campaign performance, empowering pre-buy decisions and smarter allocations.",
              },
              {
                title: "Optimize While Campaigns Run",
                description: "Engagement data enables mid-flight budget shifts—identify under-performers early and back the winners.",
              },
              {
                title: "Multi-Lingual, Multi-Region",
                description: "Plan, activate, and measure across languages, regions, and cultural moments—built for India's diversity.",
              },
              {
                title: "Zero Wasted Impressions",
                description: "Cross-device identity helps control frequency and expand incremental reach across screens.",
              },
              {
                title: "Works with Your Stack",
                description: "SYNC OS integrates with leading planning, buying, and analytics tools—no lock-in.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-lg border border-white/10 bg-card/30 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-card/50"
              >
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-4 text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted <GradientText>Across Categories</GradientText>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Leading brands and agencies across India use SYNC OS to maximize their TV and OTT investments
            </p>
          </motion.div>

          <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
            {["Automotive", "Consumer Goods", "Financial Services", "Telecom", "Entertainment & OTT", "E-Commerce", "Pharma & Healthcare", "Travel & Hospitality"].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-lg border border-white/10 bg-card/30 p-6 text-center backdrop-blur-sm transition-all hover:border-white/20 hover:bg-card/50"
              >
                <p className="font-medium">{industry}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/5"
              asChild
            >
              <Link href="/use-cases">
                View All Use Cases
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to <GradientText>Modernize Your TV Strategy?</GradientText>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            See how SYNC OS transforms planning, optimization, and measurement for Indian audiences.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-5 text-base font-semibold transition-all hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#8b5cf6]"
            >
              Request a Platform Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 px-6 py-5 text-base backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/5"
            >
              Get a Rapid Diagnostic
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
