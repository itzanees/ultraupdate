"use client";

import Link from "next/link";
import React from 'react';
import { LayoutGrid, Snowflake, Wind, Ruler } from 'lucide-react';
import TiltCard from "@/components/ui/TiltCard";


interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description }) => {
  return (
    <div className=" rounded-2xl p-8  neon-border flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-[0_4px_25px_rgba(0,255,255,0.1)] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      <div className="p-1">
        {icon}
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <h3 className="text-gradient font-bold text-lg tracking-tight">
          {title}
        </h3>
        <p className="text-gray-200 text-sm leading-relaxed max-w-[240px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function ComprehensiveSolutions() {
  const solutions = [
    {
      icon: <LayoutGrid className="w-8 h-8 stroke-[2.5]" />,
      title: 'Custom Layouts',
      description: 'Data-driven warehouse designs that maximize cubic capacity and throughput.',
    },
    {
      icon: <Snowflake className="w-8 h-8 stroke-[2.5]" />,
      title: 'Cold Chain',
      description: 'Advanced thermal engineering for precise temperature-controlled environments.',
    },
    {
      icon: <Wind className="w-8 h-8 stroke-[2.5]" />,
      title: 'Loading Efficiency',
      description: 'Automated docking systems designed to reduce turnaround times.',
    },
    {
      icon: <Ruler className="w-8 h-8 stroke-[2.5]" />,
      title: 'Vertical Storage',
      description: 'High-density racking solutions engineered for stability and access.',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto font-sans">
      {/* Header Container */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="flex flex-col gap-4 max-w-xl">
          <h2 className="text-gradient text-3xl md:text-4xl font-extrabold tracking-tight">
            Comprehensive Solutions
          </h2>
          <p className="text-gray-50 text-base md:text-lg leading-relaxed">
            From initial concept layout to final handover, we cover every aspect of industrial construction.
          </p>
        </div>
{/*         
        <div>
          <Link
              href="/services" 
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
              >
            View Our Services
          </Link>
        </div> */}
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {solutions.map((solution, index) => (
        <TiltCard key={index} intensity={10}>
          <SolutionCard
            key={index}
            icon={solution.icon}
            title={solution.title}
            description={solution.description}
          />
          </TiltCard>
        ))}
      </div>
    </section>
  );
}