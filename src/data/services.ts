import SnowflakeIcon from "@/components/ui/icons/SnowflakeIcon";
import ColdStorageIcon from "@/components/ui/icons/ColdStorageIcon";
import StructuralCivilIcon from "@/components/ui/icons/StructuralCivilIcon";
import SandwichPanelIcon from "@/components/ui/icons/SandwichPanelIcon";
import WarehouseCoolingIcon from "@/components/ui/icons/WarehouseCoolingIcon";
import IndustrialDoorIcon from "@/components/ui/icons/IndustrialDoorIcon";
import ColdroomLightingIcon from "@/components/ui/icons/ColdroomLightingIcon";
import LoadingBayIcon from "@/components/ui/icons/LoadingBayIcon";
import FireSuppressionIcon from "@/components/ui/icons/FireSuppressionIcon";
import RackSystemIcon from "@/components/ui/icons/RackSystemIcon";

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ComponentType;
  image: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. COLD STORAGE FACILITY
  // ─────────────────────────────────────────────────────────────
  {
    id: "1",
    title: "Cold Storage Facility",
    slug: "cold-storage-facility",
    shortDescription:
      "Turnkey cold store construction for operators who cannot afford downtime, energy waste, or rework.",
    fullDescription: `If you operate a cold storage facility, you already know the real cost of getting construction wrong — energy leaks, refrigeration strain, compliance failures, and months of rework you cannot bill to anyone. Our job is to make sure that never happens to your next project.

We build cold stores for operators, not for brochures. Every decision we make is driven by the metrics that actually matter to your business: kWh per pallet position, pull-down time, temperature uniformity, dock-cycle efficiency, and long-term maintenance cost. We engineer for your P&L, not just for the drawing.

Our turnkey scope covers the entire chain — civil and structural works, insulated panel systems, refrigeration integration, racking, dock equipment, control systems, and commissioning. You sign one contract, one team owns the outcome, and there is no finger-pointing between vendors when a freezer door starts leaking air.

Where we differ from generic contractors:

• We build to operational tolerances, not just tolerances on paper. Our commissioning protocols measure actual temperature stability under load — not just "the compressor turns on."

• We coordinate HVAC, electrical, refrigeration, and structural trades on a single critical path. No one trade waits on another because we sequence the whole build.

• We design for expansion. Every facility we deliver has a documented growth path — additional chambers, higher racking, extra docks — so your capex today does not lock out your capacity tomorrow.

• We hand over a facility your team can actually run. Training, O&M documentation, as-built drawings, and control-system walkthroughs are part of the contract.

The result: a facility that runs to spec from day one, stays in spec for its service life, and does not become the kind of capital mistake you can never fully fix.`,
    icon: ColdStorageIcon,
    image: "/cold-storage-facility.webp",
    faqs: [
      {
        question: "How do you prevent energy waste from day one?",
        answer:
          "We design the envelope, insulation thickness, door systems, and refrigeration load as one integrated system. Every joint, seal, and thermal bridge is specified to hit a documented kWh-per-pallet target, and our commissioning protocol verifies it under real load — not just during idle testing.",
      },
      {
        question: "Can you expand our existing cold store without shutting it down?",
        answer:
          "Yes. We plan expansions in phases so your live operations continue uninterrupted. This includes isolated structural tie-ins, temporary partition strategies, and staged refrigeration cutovers — all scheduled around your production calendar.",
      },
      {
        question: "What happens if we already have a design from another consultant?",
        answer:
          "We review it, flag any operational risks (insulation gaps, inefficient layout, refrigeration undersizing), and either build to it with documented exceptions or propose a value-engineered alternative. You are never locked into a design that will cost you money later.",
      },
      {
        question: "How do you handle compliance for food and pharma storage?",
        answer:
          "We build to HACCP, ISO 22000, and SFDA-aligned requirements. This includes washable surfaces, hygienic joint details, temperature monitoring integration, pest-control provisions, and full documentation for your regulatory inspections.",
      },
      {
        question: "What is your track record on delivering on time?",
        answer:
          "95% of our projects are delivered on or ahead of the contracted completion date. We publish our schedule, track weekly milestones, and flag slippage the moment it appears — not at the deadline.",
      },
      {
        question: "Do you provide maintenance and support after handover?",
        answer:
          "Yes. We offer post-handover service contracts covering refrigeration maintenance, panel inspections, seal checks, control system support, and emergency callout. Most of our cold store clients continue working with us well beyond the warranty period.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. SANDWICH PANEL — LEFT UNCHANGED (per your request)
  // ─────────────────────────────────────────────────────────────
  {
    id: "2",
    title: "Sandwich Panel Installation",
    slug: "sandwich-panel-installation",
    shortDescription:
        "Panel installation engineered to eliminate thermal bridges, moisture ingress, and long-term performance loss.",
    fullDescription: `Sandwich panels are the most misunderstood component of a cold store. The panels themselves are a product — you can buy them from a dozen suppliers. What determines whether they actually perform for the next 25 years is the installation: how they are set out, sealed, joined, supported, and detailed at every intersection with structure, doors, pipework, and flooring.

Most cold stores that fail thermally, structurally, or in hygiene audits fail because of installation — not because the panels themselves were inferior. Thermal bridging at joints, unsealed penetrations, condensation inside the panel core, and poor detailing at cold-room transitions are the causes of 90% of long-term panel problems.

We install sandwich panel systems for operators who understand that the panels are only as good as the team that puts them together.

Our installation scope covers:

• Cold room and freezer wall and ceiling panel systems — PIR, PUR, and mineral wool cores, in thicknesses specified for your temperature differential and humidity conditions. Installed to a documented thermal and structural performance target.

• Hygienic and food-grade installs — with sealed joints, radiused corners, washable surfaces, and detailing that satisfies HACCP, ISO 22000, and SFDA requirements.

• Pharma and controlled-environment installs — with high-integrity sealing, validated temperature control, and documentation to support regulatory audit.

• Complex detailing — panel-to-structure connections, interface with doors, dock openings, pipework penetrations, and flooring transitions. Executed with the same quality standard across every joint.

• Retrofit and expansion — installing new panel systems into existing facilities, or extending current chambers without shutting down operations.

What makes our installation different:

• We set out the panels, not just stack them. Panel layout is planned to minimize joints, align with structural supports, and integrate with your sprinkler, refrigeration, and lighting systems. Poor layout is the root cause of most thermal problems.

• We seal every joint to spec. Not with a tube of sealant applied in a hurry, but with a documented vapor-barrier strategy at every joint, corner, and penetration. Moisture ingress is invisible until it has already ruined the panel core.

• We coordinate with every other trade. Panel install is not a standalone activity — it happens around refrigeration pipework, sprinklers, electrical conduits, doors, and racking. We plan the sequence so nothing compromises the panel system after install.

• We handle cold and freezer environments as one integrated design. A panel installed for a chilled room is not the same as a panel installed in a freezer with temperature cycling at -25°C. The jointing, support, and vapor barrier requirements are different.

• We document the installation. Panel layout drawings, joint sealing schedules, and quality checkpoints are delivered at handover. This matters for audits, insurance, and future expansions.

• We support the installation throughout its service life. Panel inspections, joint resealing, and remedial work are available as part of long-term maintenance contracts.

The result: a sandwich panel system that performs at spec from day one, keeps performing through decades of thermal cycling, and does not become the hidden weakness in your facility's thermal envelope.`,
  icon: SandwichPanelIcon,
  image: "/sandwich-panel.webp",
  faqs: [
    {
      question: "What thickness of sandwich panel do we need for our facility?",
      answer:
        "It depends on your temperature differential, humidity conditions, and energy target. We calculate the required U-value for each chamber, then specify panel thickness and core material to hit that target under real operating conditions — not a rule-of-thumb average.",
    },
    {
      question: "How do you prevent thermal bridging at panel joints?",
      answer:
        "Every joint is planned with a documented vapor-barrier and thermal-break strategy. We use offset joint detailing, correct sealant selection for the temperature range, and continuous barriers at corners, T-junctions, and penetrations. Joints are inspected before closure.",
    },
    {
      question: "What causes moisture inside sandwich panel cores?",
      answer:
        "Almost always a vapor-barrier failure at a joint, penetration, or transition. When warm, humid air reaches the cold side of the panel, it condenses inside the core and progressively destroys insulation performance. Our detailing and inspection protocols are specifically designed to eliminate this.",
    },
    {
      question: "Can you install panels into an operating cold store?",
      answer:
        "Yes. We sequence installations in phases around your operations and install temporary partitions or transitions where required. Most retrofit and expansion projects are completed without a single day of lost operations.",
    },
    {
      question: "How do you handle panel interfaces with doors and openings?",
      answer:
        "Door and opening details are engineered as part of the panel system — not as an afterthought. We coordinate with the door supplier, the structural engineer, and the refrigeration team so the interface between panel, frame, and mechanism is airtight and structurally sound.",
    },
    {
      question: "What documentation do you provide for panel installations?",
      answer:
        "Panel layout drawings, joint-sealing schedules, material certificates, and quality inspection records at every stage of the install. This is delivered at handover and is what you will rely on for future audits, expansions, and insurance reviews.",
    },
  ],
},

  // ─────────────────────────────────────────────────────────────
  // 3. WAREHOUSE COOLING SYSTEM
  // ─────────────────────────────────────────────────────────────
  {
    id: "3",
    title: "Warehouse Cooling System",
    slug: "warehouse-cooling-system",
    shortDescription:
      "Refrigeration systems engineered for uptime, energy efficiency, and the products you actually store.",
    fullDescription: `A cooling system is not a box you buy — it is an engineered answer to a very specific question: how do you hold this product, at this temperature, at this humidity, through this door cycle, at this energy cost, for the next fifteen years? Get any of those wrong and you pay for it every single day.

We design and install warehouse cooling systems for operators who already know refrigeration. You have compressors, you have controls, you have energy bills. What you need is a partner who can deliver a system that outperforms the last one.

Our approach starts with your load profile, not a catalogue. We map product pull-down curves, infiltration from doors and personnel traffic, humidity control requirements, and seasonal ambient swings — then size the system for the real world, not the ideal case.

What we deliver:

• Purpose-matched refrigeration — ammonia, CO₂, cascade, HFC, or glycol depending on your capacity, temperature band, and refrigerant regulations. No dogmatic preferences — the right system for your facility.

• Controls and monitoring — real-time temperature, pressure, and energy reporting, integrated with your BMS or delivered standalone. Alarm hierarchies, data logs, and remote visibility.

• Energy-tuned design — VFD compressors, floating head pressure, heat reclaim, and economizer cycles where they pay back. We size for the real load profile so you are not paying for capacity you never use.

• Compliance and validation — commissioning protocols that satisfy HACCP, ISO 22000, and pharma GDP requirements. Documented temperature mapping, alarm testing, and stability under failure scenarios.

• Refrigerant transition planning — for clients facing HFC phase-downs, we design systems that are compliant today and future-proofed for the next regulatory step.

We do not sell you a system and walk away. We deliver a refrigeration infrastructure that runs the way it was designed to run — and we prove it with data, not promises.`,
    icon: WarehouseCoolingIcon,
    image: "/cooling-system.webp",
    faqs: [
      {
        question: "How do you size a cooling system for an existing facility?",
        answer:
          "We start with a load survey: product type, throughput, door cycles, internal traffic, seasonal ambient, and required stability. We then model the refrigeration load and cross-check it against the capacity of the existing system before recommending upgrades or replacement.",
      },
      {
        question: "Which refrigerant is best for our facility?",
        answer:
          "It depends on your capacity, temperature range, site footprint, and Saudi regulatory trajectory. Ammonia is efficient at scale, CO₂ is excellent for low-charge or cascade systems, and HFC blends are simple but face phase-down. We model the lifecycle cost of each option against your specific operation.",
      },
      {
        question: "What happens during a compressor failure?",
        answer:
          "We design redundancy into the system wherever the consequence of failure justifies it. For critical chambers, this means N+1 compressor configurations, backup condensing units, and automatic changeover controls so a single failure never compromises product integrity.",
      },
      {
        question: "How do you reduce energy cost without compromising temperature?",
        answer:
          "Floating head pressure, VFD control, subcooling, heat reclaim, and intelligent defrost cycles are the main levers. We size each one for its actual payback at your operating profile — no theoretical savings, only measured kWh reduction.",
      },
      {
        question: "Can you retrofit a cooling system into a live warehouse?",
        answer:
          "Yes. We stage installations chamber by chamber, use temporary cooling where needed, and sequence cutovers during non-production windows. Most retrofits are completed without a single day of operational loss.",
      },
      {
        question: "How long does commissioning take?",
        answer:
          "Typically 2–4 weeks depending on facility size. This includes pressure testing, insulation verification, control loop tuning, temperature mapping, alarm testing, and a documented stability run under load. We do not sign off commissioning until the system proves it holds spec.",
      },
    ],
  },
// ─────────────────────────────────────────────────────────────
// 4. INDUSTRIAL DOORS AND SHUTTERS
// ─────────────────────────────────────────────────────────────
{
  id: "4",
  title: "Industrial Doors and Shutters",
  slug: "industrial-doors-shutters",
  shortDescription:
    "Cold-rated doors and shutters engineered for cycle life, thermal integrity, and operational uptime.",
  fullDescription: `Your doors and shutters are the most-used mechanical systems in your facility. In a cold store or freezer, every single cycle leaks cold air, tests a seal, and stresses a mechanism. Get the specification wrong and you spend the next decade paying for it — in energy, in maintenance, and in the operational disruption of doors that fail when you need them most.

We engineer and install industrial doors and shutters for operators who measure quality in cycles, not in delivery day. Every door we specify is chosen for the environment it lives in, the traffic it will see, and the service life you actually need from it.

Our scope covers:

• High-speed roll-up doors — for high-cycle dock, transit, and internal doorways. Cold-rated models with heated or insulated guidance tracks, sized to your traffic pattern and duty cycle.

• Sectional overhead doors — insulated, cold-rated, engineered for thermal separation between temperature zones. Manually or electrically operated, sized to opening and headroom constraints.

• Fire-rated doors and shutters — certified to Civil Defense and international standards, integrated with your fire alarm and detection systems, provided with full documentation for approval and inspection.

• Cold room and freezer doors — hinged, sliding, and swing doors with heated frames, high-integrity gaskets, and mechanisms rated for continuous operation at -25°C and below.

• Rapid-roll fabric doors — for internal temperature separation where speed and minimal air exchange matter more than thermal resistance.

• Access and personnel doors — pedestrian doors, airlock configurations, and airtight transit doors between temperature zones.

What makes our installations different:

• We size for the actual cycle count. A door designed for 200 cycles a day will fail within a year in a facility running 800. We specify the mechanism for your real operating profile — not a catalogue average.

• We account for the thermal reality. Door openings are the single largest source of cooling loss in cold stores. Every door we install is specified for minimal air exchange across the full cycle, not just when closed.

• We integrate door, safety, and control systems. Vehicle restraints, safety interlocks, traffic signaling, and door automation are designed as one system so nothing is bolted on as an afterthought.

• We deliver the documentation that keeps you compliant. Fire ratings, thermal performance, maintenance schedules, spare-part lists — everything you need for inspections, audits, and long-term operations.

• We support the installation through its service life. Scheduled maintenance, spare parts availability, and emergency response — because an industrial door that stops working is a stopped operation.

The result: doors and shutters that keep your cold chain sealed, your operations moving, and your maintenance costs predictable — year after year.`,
  icon: IndustrialDoorIcon,
  image: "/industrial-doors-shutters.webp",
  faqs: [
    {
      question: "How do you size a door for our operating cycle?",
      answer:
        "We calculate your door's daily cycle count from dispatch patterns, shift changes, and traffic flow, then specify the mechanism, motor, and controls for that duty class. Underspecified doors fail prematurely — we size for the real number, not the average.",
    },
    {
      question: "What door type is best between freezer and chilled areas?",
      answer:
        "Depends on cycle frequency, opening size, and thermal separation required. High-speed insulated roll-ups are ideal for high-traffic internal transitions, while insulated sectional doors work well for lower-frequency openings where thermal integrity is critical.",
    },
    {
      question: "How do you handle fire-rated doors and Civil Defense approval?",
      answer:
        "We supply certified fire-rated doors and shutters with full documentation — certificates, installation drawings, and integration details with your fire alarm system. We coordinate with Civil Defense on submittals and handover.",
    },
    {
      question: "Do you provide maintenance contracts for doors and shutters?",
      answer:
        "Yes. Scheduled inspection of mechanisms, seals, motors, and controls, plus spare parts and emergency response. Well-maintained doors last 3–4x longer than doors that are only repaired after failure.",
    },
    {
      question: "Can you replace existing doors without stopping operations?",
      answer:
        "Yes. We sequence door replacements around your traffic windows, install temporary closures where needed, and complete most replacements within a single shift so operations continue.",
    },
    {
      question: "How do you prevent air leakage at door openings?",
      answer:
        "Air leakage is managed through three things — the door itself, the seal, and the buffer design around the opening. We specify all three as one system and verify the thermal performance in commissioning.",
    },
  ],
},

// ─────────────────────────────────────────────────────────────
// 5. COLDROOM AND WAREHOUSE LIGHTING
// ─────────────────────────────────────────────────────────────
{
  id: "5",
  title: "Coldroom and Warehouse Lighting",
  slug: "coldroom-warehouse-lighting",
  shortDescription:
    "Photometric-engineered lighting for cold rooms, freezers, docks, and warehouse operations.",
  fullDescription: `Lighting is the most under-designed system in most industrial facilities. It is also one of the highest-leverage. A well-designed lighting installation improves operator safety, extends equipment life, reduces energy cost, and speeds up every operational task. A bad one causes fatigue, accidents, and premature replacements — often within a year.

We design, supply, and commission lighting for cold chain and warehouse operations, engineered to the photometric requirements of your actual tasks — not a warehouse average.

Our scope covers:

• Cold room and freezer lighting — engineered for -30°C and below, with heated or enclosed LED fittings rated for continuous operation, sealed against condensation, and chosen for actual lumen maintenance at low temperature.

• Warehouse and aisle lighting — high-bay LED installations designed for your racking layout, aisle width, and pick-face height. Verified for lux levels, uniformity, and glare at the working plane.

• Dock and loading bay lighting — high-lumen, IP-rated fittings positioned for driver, forklift, and dock operator visibility, engineered around truck and trailer dimensions so nothing is shadowed.

• Emergency and egress lighting — battery-backed, self-testing, compliant with EN 1838 and Civil Defense requirements, integrated with your building alarm and BMS.

• Controls and automation — motion sensors, daylight harvesting, dimming zones, and BMS integration. Designed to reduce energy consumption without compromising safety or task performance.

• External area lighting — yard, apron, parking, and perimeter lighting engineered for security and safe night operations.

What makes our lighting different:

• We design by photometric study. Every installation starts with a lux-level and uniformity target for the actual task — dock apron, racking aisle, freezer corridor, pick face. We verify the performance after installation with a documented photometric survey.

• We specify for the actual environment. A fitting that works in a 15°C warehouse is not the same fitting that works at -30°C. We select IP ratings, ingress protection, and temperature ranges for the reality of your facility — not for a catalogue average.

• We coordinate with your racking, HVAC, refrigeration, and sprinkler design. Fixture placement is verified against every other overhead system at the design stage so nothing ends up where it cannot be serviced or where it compromises another system.

• We plan for the lighting's full lifecycle. Lumen depreciation, maintenance intervals, spare-parts availability, and replacement strategy are all documented at handover so you know exactly what to expect over the next decade.

• We deliver energy data you can use. Actual kWh consumption, savings against baseline, and control-system performance — verified, not estimated.

The result: lighting that is engineered for the work your team actually does, engineered for the environment it lives in, and engineered to run for years without replacement.`,
  icon: ColdroomLightingIcon,
  image: "/coldroom-lighting.webp",
  faqs: [
    {
      question: "What temperature rating do we need for freezer lighting?",
      answer:
        "Freezer lighting should be rated to -30°C for continuous operation with sealed ingress protection against condensation and drivers rated for cold-start. We specify to your actual operating temperature, not a general warehouse rating.",
    },
    {
      question: "How do you verify lighting performance after installation?",
      answer:
        "We carry out a photometric survey of the installed installation, measuring lux levels at the working plane, uniformity ratio, and glare. The report is included in your O&M documentation.",
    },
    {
      question: "Are your fixtures compatible with existing lighting controls?",
      answer:
        "Yes. Our fixtures are available with standard DALI, 0-10V, and proprietary control interfaces, so they integrate with your current BMS or lighting management system.",
    },
    {
      question: "How do you handle installations in live cold rooms?",
      answer:
        "We work in cold-rated PPE and schedule installations in short, controlled windows to minimize temperature loss. For long installations, we sequence work chamber-by-chamber to keep product integrity intact.",
    },
    {
      question: "What is the expected lifespan of your cold room fixtures?",
      answer:
        "Our cold-room fixtures are rated for 50,000+ hours at -25°C with a documented lumen maintenance curve. In most installations this translates to 8–12 years of operational life before replacement.",
    },
    {
      question: "Can you supply spare parts and replacements long term?",
      answer:
        "Yes. We document fixture types, control gear, and drivers at handover and hold stock or supplier commitments so replacements are available throughout the service life of the installation.",
    },
  ],
},

  // ─────────────────────────────────────────────────────────────
  // 6. LOADING BAY FACILITIES
  // ─────────────────────────────────────────────────────────────
  {
    id: "6",
    title: "Loading Bay Facilities",
    slug: "loading-bay-facilities",
    shortDescription:
      "Dock systems engineered for throughput, safety, and the thermal efficiency your cold chain demands.",
    fullDescription: `Your loading bay is where your facility meets the outside world — and where most of your energy, safety incidents, and throughput losses actually originate. Every dock cycle leaks cold air, delays a truck, or risks a forklift. Multiply that by thousands of cycles per year and the design of your bay becomes a business-critical decision, not a detail.

We engineer loading bay facilities for operators who understand that the bay is the bottleneck. Dock levelers, seals, doors, safety systems, and dock lighting are all designed as one integrated system around your specific traffic profile.

Our scope:

• Dock levelers — hydraulic, mechanical, or air-powered, sized to your vehicle mix and cycle frequency. Rated for full static and dynamic forklift loads, with documented maintenance intervals.

• Dock seals and shelters — inflatable, foam, or rigid options selected for your door size, truck variability, and temperature differential. We specify the seal around measured heat loss, not guesswork.

• Sectional overhead doors — high-speed, insulated, or fabric roll-up depending on cycle time, thermal need, and traffic. All doors are engineered for the number of daily cycles you actually run.

• Vehicle restraints — wheel guides, hook restraints, or automatic systems that prevent trailer creep during loading, with safety interlocks to door and dock controls.

• Safety and visual systems — traffic lights, guide rails, LED dock signaling, and audible warnings integrated with your dock control system.

• Dock equipment — bumpers, guides, dock plates, and pit accessories, all specified for heavy industrial operation.

What makes our loading bays different:

• We model the cycle before we build it. Traffic flow, vehicle mix, dock plate positions, and operator paths are mapped so the bay is designed for throughput, not just capacity.

• We design for the thermal reality. Every seal, door, and airlock is specified to minimize cooling loss across the entire cycle — not just at the moment the door is closed.

• We coordinate with your refrigeration and structural design so dock pit depth, anchorage, drainage, and pit insulation are all considered as one system.

• We deliver safe operations. Interlocks, restraint feedback, visual signaling, and training documentation are included as standard — because a dock accident is more expensive than anything in the construction budget.

The result: a loading bay that moves your goods faster, loses less energy, and keeps your team safe — cycle after cycle, year after year.`,
    icon: LoadingBayIcon,
    image: "/loading-bay-facilities.webp",
    faqs: [
      {
        question: "How do you size a dock leveler for our traffic?",
        answer:
          "We size the leveler to your vehicle mix (trailer heights, forklift weight class), dock cycle frequency, and operational environment (cold, ambient, or hybrid). Undersizing is a common mistake that costs in downtime and maintenance — we size for peak load, not average.",
      },
      {
        question: "What's the best dock seal for a cold storage facility?",
        answer:
          "For cold storage, we typically recommend inflatable or rigid dock shelters depending on door size and truck variability. The key metric is measurable thermal performance across the full cycle — we model the loss and specify accordingly, not by rule of thumb.",
      },
      {
        question: "Can you retrofit a dock system into an existing facility?",
        answer:
          "Yes. We retrofit dock equipment into existing pits and door openings, often with only minor structural work. When larger changes are required, we sequence work to minimize disruption to live loading operations.",
      },
      {
        question: "How do you ensure safety on the dock?",
        answer:
          "Safety systems are integrated at design stage, not added later. This includes vehicle restraints with door interlocks, traffic light signaling, guide rails, and anti-slip surfaces. We deliver full safety documentation and operator training at handover.",
      },
      {
        question: "What is the typical lifecycle of your dock equipment?",
        answer:
          "With proper maintenance, our dock levelers and seals have a service life of 15–20 years. Maintenance intervals are documented at handover and can be scheduled as part of a service contract.",
      },
      {
        question: "Do you provide maintenance contracts for dock equipment?",
        answer:
          "Yes. We offer scheduled inspection and maintenance contracts for all installed dock equipment, including seals, levelers, restraints, doors, and lighting. This is the single most effective way to extend service life.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. STRUCTURAL AND CIVIL WORKS
  // ─────────────────────────────────────────────────────────────
  {
    id: "7",
    title: "Structural and Civil Works",
    slug: "structural-civil-works",
    shortDescription:
      "Heavy-duty civil and structural execution for industrial facilities that must last decades, not years.",
    fullDescription: `Structural and civil works are the part of a facility you will never see again once it is done — which is exactly why they matter most. If the foundation sinks, the slab cracks, or the framing deflects, no amount of refrigeration engineering or insulated panel quality will save your operation.

We build industrial civil and structural works for clients who measure quality in decades. Our projects handle forklift traffic at full capacity, static racking loads at the upper limit of EN 15620, seismic and wind demands of the Kingdom, and thermal cycling without performance degradation.

Our scope covers the full chain — soil investigation review, deep foundations, reinforced concrete slabs with flatness tolerances suited to high-rack operations, structural steel framing, load-bearing walls, roofing systems, site grading, stormwater drainage, and external works.

What makes us different from a general contractor:

• We design civil works around your operational flow. Traffic lanes, dock aprons, turning radii, and drainage grades are set by how forklifts and trucks actually move — not by a generic grid.

• We specify slab flatness and joint layout for your racking system. A DM-1 or FM-2 floor that fails tolerance can cost you more in rack adjustments and equipment wear than the slab itself.

• We plan for the Kingdom's climate. Thermal expansion, wind-borne sand, and summer heat loads are accounted for in every structural and external works detail.

• We coordinate with the refrigeration, panel, and dock teams during foundation design, so penetrations, anchors, and drainage are pre-planned instead of patched.

The outcome is civil and structural infrastructure that supports your operations with zero surprises — no settlement, no cracking, no rework, no cost you did not budget for.`,
    icon: StructuralCivilIcon,
    image: "/structural-civil-works.webp",
    faqs: [
      {
        question: "How do you ensure slab flatness for high-rack warehouses?",
        answer:
          "We specify the slab to a documented flatness class (typically FM-2 or DM-1 depending on your racking height), then verify it with a straight-edge and F-number survey. We do not hand over a slab that fails tolerance — even if it means remedial grinding before the racking contractor arrives.",
      },
      {
        question: "Can you work around existing infrastructure?",
        answer:
          "Yes. We regularly build adjacent to live facilities, work around existing utilities, and sequence phases so nothing disrupts your operations. Every tie-in is planned in advance and executed during agreed windows.",
      },
      {
        question: "What kind of soil conditions can you handle?",
        answer:
          "We build on rock, sand, sabkha, and reclaimed land. We review your geotechnical report, select the right foundation type (isolated footings, raft, piles, ground improvement), and document the assumption behind the design.",
      },
      {
        question: "How do you control quality on concrete and steel?",
        answer:
          "All concrete is batch-tested, slump-tested, and cube-tested per pour. Structural steel is inspected against the approved shop drawings and welding procedures. We issue test reports to you at handover, not on request.",
      },
      {
        question: "Do you handle the full site — from excavation to external works?",
        answer:
          "Yes. Our scope covers earthworks, foundations, slabs, framing, roofing, walls, drainage, paving, and boundary works. One team, one schedule, one point of accountability.",
      },
      {
        question: "What is your policy on change orders?",
        answer:
          "Every change is documented with cause, cost, and schedule impact before we proceed. We flag anything that could have been avoided in design — because if it was our miss, we absorb it. If it was a legitimate scope change, you see the full cost before we commit.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. FIRE FIGHTING SYSTEM
  // ─────────────────────────────────────────────────────────────
  {
    id: "8",
    title: "Fire Fighting System",
    slug: "fire-fighting-system",
    shortDescription:
      "Cold-rated fire protection engineered for facilities that cannot afford a failure — ever.",
    fullDescription: `Fire protection in a cold storage facility is a different problem from any other building type. Low temperatures, insulated panels, high-piled combustible packaging, and the unique challenges of frozen or chilled environments mean a standard fire system is not just inadequate — it can fail exactly when it matters.

We design, install, and commission fire fighting systems for cold chain operations where a fire is not just a loss — it is the end of a business.

Our scope:

• Automatic sprinkler systems — wet, dry, pre-action, or deluge depending on chamber temperature, commodity class, and storage height. We size hydraulic calculations to the worst-case fire scenario for your actual racking configuration.

• Fire hydrants and hose reels — strategically located per Civil Defense requirements, pressure-tested, and delivered with documented flow curves.

• Fire pumps and water storage — diesel, electric, or dual-drive configurations, sized to your sprinkler demand with the redundancy your insurance and Civil Defense require.

• Detection systems — heat detection for cold rooms, aspirating smoke detection for freezers, linear heat detection for high-ceiling warehouses, and multi-criteria detection where ambiguity is a problem. All integrated with your building alarm and BMS.

• Gas suppression systems — inert gas or chemical suppression for control rooms, electrical rooms, and server areas where water damage is a bigger risk than fire.

• Alarm, control, and monitoring — fully integrated panels with remote visibility and event logging, so your facility is protected 24/7 whether or not anyone is on site.

What makes our fire systems different:

• We design around the reality of cold chain. Sprinkler piping in freezers needs different materials, dry systems need careful drainage, and detection thresholds must account for cold air stratification. These are engineering details most general contractors miss — and they cost lives when they are wrong.

• We coordinate with Civil Defense from day one. Drawings, hydraulic calculations, and material approvals are submitted early so approvals do not delay commissioning.

• We commission with evidence. Flow tests, pressure tests, detection response times, and alarm integration tests are all documented and handed over as a compliance record — not kept in our internal files.

• We support you through insurance and inspection. Whether it is an insurer audit, Civil Defense inspection, or HACCP review, our documentation is structured to satisfy every authority you answer to.

The result: a fire protection system that meets every code, passes every inspection, and works exactly as designed the day it is needed.`,
    icon: FireSuppressionIcon,
    image: "/fire-fighting-system.webp",
    faqs: [
      {
        question: "What sprinkler type is correct for our facility?",
        answer:
          "It depends on your chamber temperature, commodity class, storage height, and racking type. Wet systems are used in tempered areas, dry or pre-action systems in freezers, and deluge where a fast, high-volume response is required. We model hydraulic demand for your worst-case scenario and specify accordingly.",
      },
      {
        question: "How do you protect cold rooms without risking water damage?",
        answer:
          "We use dry, pre-action, or double-interlock systems in temperature-controlled zones, so water enters the piping only when detection confirms a genuine fire. We also engineer drainage and pit design so that during testing or commissioning, water does not enter sensitive areas.",
      },
      {
        question: "What detection system works best in a freezer?",
        answer:
          "Aspirating smoke detection (ASD) with heated sampling points is the most reliable technology for freezers. We design the aspiration network for the actual air movement in the freezer and verify response times at commissioning.",
      },
      {
        question: "Can you integrate the fire system with our existing BMS?",
        answer:
          "Yes. All our panels support industry-standard protocols (Modbus, BACnet, or dry contacts) and can be integrated into your existing BMS or SCADA system. We deliver the integration as part of the fire system handover.",
      },
      {
        question: "How do you manage Civil Defense approvals?",
        answer:
          "We prepare Civil Defense submissions, hydraulic calculations, and material submittals early in the project, coordinate with the authority on any revisions, and hand over the completed project file for their final inspection. We do not leave compliance to the client.",
      },
      {
        question: "What is included in your fire system maintenance contract?",
        answer:
          "Scheduled inspections of sprinkler heads, piping, valves, detection devices, pumps, and control panels; flow and pressure testing; alarm response verification; and full documentation for your audit records. Typically quarterly or semi-annual depending on your insurance requirements.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 9. RACK SYSTEM AND EQUIPMENT
  // ─────────────────────────────────────────────────────────────
  {
    id: "9",
    title: "Rack System and Equipment",
    slug: "rack-system-equipment",
    shortDescription:
      "High-density racking engineered for cold storage throughput, safety, and future expansion.",
    fullDescription: `If you operate a warehouse or cold store, you already know that racking is not a static product — it is the infrastructure that determines how fast your operation moves, how much product you can hold, and how safe your team is at every pick.

We design and install racking systems for operators who need throughput, not just capacity.

Our scope covers the full range — selective, double-deep, push-back, drive-in, drive-through, cantilever, mezzanine, and mobile racking — plus all the equipment that supports them: pallet supports, safety barriers, column guards, and integrated handling solutions.

What we deliver, specifically:

• Rack design to your operational reality — we model cycle times, SKU mix, and replenishment patterns so the racking type you get is the one that actually fits how you move product. Not the cheapest system on paper.

• Cold-room specific engineering — for cold and freezer environments, we specify materials, coatings, and joints that resist corrosion and cold-cycle fatigue. Most racking fails in cold stores because it was not designed for them.

• Structural verification — every rack is designed to EN 15512 or RMI standards with documented load tables, seismic compliance, and cross-checking against your slab flatness and racking layout.

• Safety integration — column protection, end guards, tunnel barriers, load signage, and safe working load plates as part of the scope. No add-ons charged separately.

• Layout and workflow planning — racking layout is coordinated with your aisles, dock positions, VNA equipment, and pick faces, so the whole facility runs as one system.

• Expansion planning — racking layouts are documented for future growth so additional bay extensions or higher levels can be added without redesigning the whole facility.

Why clients choose us for racking:

• We do not treat racking as an accessory. It is a structural system with safety consequences — we engineer it as one.

• We coordinate racking with your civil, MEP, refrigeration, and fire protection during design — because racking interferences with sprinklers, HVAC ducts, lighting, and pipework are the number one cause of post-handover rework.

• We provide the full lifecycle — from design through installation, inspection, and eventually repair or modification. No handoffs to a different company who does not know your facility.

The result: a racking system that fits your operation, passes every safety inspection, and does not need to be redesigned the moment you grow.`,
    icon: RackSystemIcon,
    image: "/rack-system.webp",
    faqs: [
      {
        question: "What racking type is best for a cold storage facility?",
        answer:
          "It depends on your throughput, SKU mix, and freezer aisle clearances. Drive-in works for high-density storage with low pick frequency, selective for high accessibility, and double-deep for a balance. In freezers we specify corrosion-resistant finishes and pay close attention to cold-cycle fatigue.",
      },
      {
        question: "How do you handle slab flatness when installing racking?",
        answer:
          "We work with the civil contractor and structural engineer to ensure slab flatness meets the racking tolerance (typically FM-2 or DM-1 depending on aisle height). Where tolerances are not met, we either shim or specify a fix before installation begins — never after.",
      },
      {
        question: "Can you retrofit racking into an existing cold store?",
        answer:
          "Yes. We install racking into live facilities in phased sections so operations continue. We schedule around your loading calendar and coordinate with your fire system and sprinkler design.",
      },
      {
        question: "What standards do you design to?",
        answer:
          "We design to EN 15512 (European) or RMI (US) standards depending on your project. All designs include documented load tables, seismic calculations where required, and inspection sign-offs at each installation stage.",
      },
      {
        question: "Do you provide rack inspection and repair services?",
        answer:
          "Yes. We inspect existing racking installations for damage, overload, corrosion, and compliance. Where repair is needed, we provide the replacement components and can schedule the work during shutdowns or scheduled maintenance windows.",
      },
      {
        question: "How do you coordinate racking with sprinklers and HVAC?",
        answer:
          "We coordinate racking layout with the fire protection and HVAC designs at concept stage. This ensures sprinkler placement, duct routing, and lighting satisfy their respective codes without requiring racking layout changes after installation.",
      },
    ],
  },
];