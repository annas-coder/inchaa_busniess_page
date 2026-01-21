"use client";

import { motion } from "framer-motion";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { JourneySteps } from "@/components/JourneySteps";
import { AllInOneGrid } from "@/components/AllInOneGrid";
import { FeatureHighlight } from "@/components/FeatureHighlight";
import { CTASection } from "@/components/CTASection";
import { Testimonials } from "@/components/Testimonials"; // New
import { HelpSection } from "@/components/HelpSection"; // New
import { FinalDownloadCTA } from "@/components/FinalDownloadCTA"; // New
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] overflow-hidden">
      <Navbar />
      <Hero />
      <VideoSection />
      <JourneySteps />
      <AllInOneGrid />

      {/* Plan Smarter Title Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 md:px-6 py-12 md:pt-24 text-center max-w-[990px] mx-auto"
      >
        <h2 className="text-[#323232] text-center font-poppins text-[34px] font-bold leading-[130%] pb-[8px]">
          Plan smarter. Compare better. Build with confidence.
        </h2>
        <p className="text-[#76797B] text-center font-poppins text-[16px] font-normal leading-[150%] pb-[16px]">
          The Inchaa customer app is designed to remove uncertainty from construction and service decisions. From finding the right professionals to tracking every quotation and project detail, everything is organized in one simple flow.
        </p>
        <button className="flex w-[220px] h-[44px] px-[24px] py-[8px] justify-center items-center rounded-[16px] bg-[linear-gradient(108deg,#39F_0%,#3040E8_50%,#8C3CDD_100%)] text-white font-semibold mx-auto">
          Get the App
        </button>
      </motion.div>

      <section className="container bg-white mx-auto p-[40px] rounded-[20px] flex flex-col items-center gap-[60px]">

        {/* Feature 1 */}
        <FeatureHighlight
          imageSide="left"
          gradient="from-pink-100/50 to-purple-100/50"
          title="Find Verified Professionals"
          description="Discover trusted contractors, and consultants — all verified before being listed. Inchaa helps you find the right professionals based on real ratings and services offered."
          pointsTitle="What you can do"
          points={[
            "Browse verified service providers by category",
            "View ratings, reviews, and past performance",
            "Filter by location, availability, and services",
            "Shortlist professionals with confidence",
            "Avoid unverified or unreliable providers"
          ]}
          imagePath="/assets/professional.webp"
        />

        {/* Feature 2 */}
        <FeatureHighlight
          imageSide="right"
          gradient="from-blue-100/50 to-cyan-100/50"
          title="Request & Compare Quotes"
          description="Get multiple quotes from qualified professionals. Compare prices, timelines, and proposed materials to make the best decision."
          pointsTitle="What you can do"

          points={[
            "Get transparent detailed quotes",
            "Compare apples-to-apples",
            "Negotiate directly on the platform",
            "No hidden fees"
          ]}
          imagePath="/assets/request-compare.webp"
        />

        {/* Feature 3 */}
        <FeatureHighlight
          imageSide="left"
          gradient="from-orange-100/50 to-amber-100/50"
          title="Manage Project Documentation"
          description="Keep everything organized in one place. Track progress, approve payments, and communicate with your team effortlessly."
          pointsTitle="What you can do"
          points={[
            "Centralized project dashboard",
            "Track timelines and milestones",
            "Document storage and sharing",
            "Real-time chat and updates"
          ]}
          imagePath="/assets/managing-project.webp"
        />

      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 md:px-6 py-12 md:pt-24 text-center max-w-[990px] mx-auto"
      >
        <h2 className="text-[#323232] text-center font-poppins text-[34px] font-bold leading-[130%] pb-[8px]">
          Get discovered. Win more projects. Work smarter.
        </h2>
        <p className="text-[#76797B] text-center font-poppins text-[16px] font-normal leading-[150%] pb-[16px]">
          The Inchaa customer app is designed to remove uncertainty from construction and service decisions. From finding the right professionals to tracking every quotation and project detail, everything is organized in one simple flow.Inchaa helps service providers grow their business by connecting them directly with customers looking for verified professionals.
        </p>
        <button className="flex w-[220px] h-[44px] px-[24px] py-[8px] justify-center items-center rounded-[16px] bg-[linear-gradient(108deg,#39F_0%,#3040E8_50%,#8C3CDD_100%)] text-white font-semibold mx-auto">
          Join as Provider
        </button>
      </motion.div>

      <section className="container bg-white mx-auto p-[40px] rounded-[20px] flex flex-col items-center gap-[60px]">
        <FeatureHighlight
          imageSide="right"
          gradient="from-pink-100/50 to-purple-100/50"
          title="What service providers can do"
          description="Discover trusted contractors, and consultants — all verified before being listed. Inchaa helps you find the right professionals based on real ratings and services offered."
          pointsTitle="What you can do"
          points={[
            "Get listed and discovered by customers actively searching for services",
            "Receive clear project requirements and quotation requests",
            "Submit quotations professionally and track responses",
            "Manage projects, status updates, and customer communication from one portal",
          ]}
          imagePath="/assets/analysis-laptop.webp"
        />
      </section>

      <Testimonials />
      <HelpSection />
      <FinalDownloadCTA />
      <Footer />
    </main>
  );
}
