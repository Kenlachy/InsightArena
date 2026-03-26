"use client";

import { useState } from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import EventsCompetitionsHero from "@/component/events/EventsCompetitionsHero";
import WhyJoinValueGrid from "@/component/events/WhyJoinValueGrid";

export default function EventsPage() {
  
  return (
    <div className="min-h-screen bg-[#0B1023] flex flex-col">
      <Header />
      <main className="pt-16">
        <EventsCompetitionsHero />
        <WhyJoinValueGrid />
      </main>
      <Footer />
    </div>
  );
}
