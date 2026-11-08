export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  org: string;
  summary: string;
  highlights: string[];
  tags: string[];
  coverImage: string;
  slides: {
    src: string;
    caption: string;
  }[];
  metrics?: { label: string; value: string }[];
  accentColor?: string;
}

export const projects: Project[] = [
  {
    id: "battlebot",
    title: "1-lb Combat BattleBot",
    category: "Robotics & Dynamic Mechanics",
    date: "October 2025",
    org: "Purdue Railside Robotics",
    summary: "Designed, engineered, and manufactured a competitive 1-lb Plastic Antweight combat robot featuring a custom asymmetric weapon blade, internal BLDC powertrain, and center-of-mass balancing script in MATLAB. Achieved 1st place in the onboarding tournament.",
    highlights: [
      "Tournament Champion: Won the onboarding competition with zero blade fractures after repeated high-energy impacts.",
      "Awarded 'Best Aesthetics' and achieved an exceptionally high damage-to-weight ratio.",
      "Designed asymmetric weapon blade cantilevered directly onto a high-performance BLDC motor for structural simplicity.",
      "Optimized 3D printing slicing parameters for Bambu Lab A1 in high-strength PLA with minimal support structure.",
      "Custom wiring harness, solder work, and power distribution board fitted into a sub-compact chassis."
    ],
    tags: ["Siemens NX / CAD", "Bambu Lab 3D Printing", "MATLAB", "BLDC Powertrain", "Rapid Prototyping"],
    coverImage: "/assets/projects/slide_8.png",
    metrics: [
      { label: "Tournament Result", value: "1st Place" },
      { label: "Weight Limit", value: "1.0 lb (PLA)" },
      { label: "Impact Fractures", value: "0" },
      { label: "Battery Config", value: "3S LiPo" },
    ],
    slides: [
      { src: "/assets/projects/slide_8.png", caption: "Fully assembled 1-lb Plastic Antweight BattleBot with belt-driven drivetrain and asymmetric weapon." },
      { src: "/assets/projects/slide_9.png", caption: "Modular 3D printed components and sub-chassis electronics assembly." },
      { src: "/assets/projects/slide_10.png", caption: "Exploded CAD assembly breakdown: chassis housing, drive hub, upright, and weapon." },
      { src: "/assets/projects/slide_11.png", caption: "Cantilevered weapon assembly mounted directly on the brushless outrunner motor." },
      { src: "/assets/projects/slide_12.png", caption: "Final CAD render alongside MATLAB center of mass numerical verification." },
      { src: "/assets/projects/slide_13.png", caption: "Match 2 combat aftermath: devastating damage inflicted on opponent while maintaining full drive." },
      { src: "/assets/projects/slide_14.png", caption: "Post-tournament inspection: zero fractures or catastrophic structural failures." }
    ]
  },
  {
    id: "com-optimizer",
    title: "Center of Mass (COM) Blade Optimizer",
    category: "Computational Geometry & MATLAB",
    date: "October 2025",
    org: "Purdue Railside Robotics",
    summary: "Developed an algorithmic numerical optimization tool in MATLAB to dynamically rebalance asymmetric spinning combat robot weapons, eliminating severe rotational vibration and optimizing kinetic energy delivery.",
    highlights: [
      "Injected an input 2D/3D STL geometry into MATLAB and generated optimized boundary contour point arrays (.csv).",
      "Calculated center-of-mass shifts in real time to shift blade CoM to within -0.003 mm (X) and +0.005 mm (Z) of rotational center.",
      "Significantly reduced motor vibration, bearing load wear, and parasitic gyroscopic precession during high-RPM weapon spin-up.",
      "Integrated motor cavity inside blade body so motor stator weight directly contributes to rotational inertia."
    ],
    tags: ["MATLAB", "Algorithm Design", "Computational Geometry", "Vibration Reduction", "Kinematic Analysis"],
    coverImage: "/assets/projects/slide_15.png",
    metrics: [
      { label: "X-Axis CoM Offset", value: "-0.003 mm" },
      { label: "Z-Axis CoM Offset", value: "+0.005 mm" },
      { label: "Primary Benefit", value: "Vibration Dampened" },
      { label: "Efficiency", value: "Optimized Inertia" },
    ],
    slides: [
      { src: "/assets/projects/slide_15.png", caption: "Mass distribution optimization for high-speed kinetic weapon blades." },
      { src: "/assets/projects/slide_16.png", caption: "Pipeline: Input geometry STL -> MATLAB point extraction -> spline fitting -> CAD re-extrusion." },
      { src: "/assets/projects/slide_17.png", caption: "Comparative CoM plot: Old uncalibrated geometry vs. MATLAB balanced curve profile." },
      { src: "/assets/projects/slide_18.png", caption: "Final blade design featuring recessed motor pocket and internal press-fit chamfer." }
    ]
  },
  {
    id: "cycloidal-drive",
    title: "Parametric Cycloidal Drive Reducer",
    category: "Precision Gearbox & Dynamics",
    date: "February 2025",
    org: "Personal Engineering Project",
    summary: "Designed and engineered an 11:1 zero-backlash parametric cycloidal speed reducer in Siemens NX. Modeled with dynamic mathematical law curves and manufactured with precision 3D printing calibrated to 0.02 mm tolerance.",
    highlights: [
      "Developed mathematical equations in Siemens NX using parametric law curves to generate the true cycloidal epicycloid profile.",
      "Implemented dual counter-balancing cycloidal disks with 180-degree phase shift to eliminate radial vibration under high speed.",
      "Achieved 0.02 mm manufacturing precision on functional components by fine-tuning printer horizontal expansion & thermal shrinkage.",
      "Modeled and animated full motion dynamic assembly in Siemens NX to inspect pin-to-disk clearances and housing stress points."
    ],
    tags: ["Siemens NX", "Parametric Modeling", "Law Curves", "GD&T", "Precision Prototyping"],
    coverImage: "/assets/projects/slide_5.png",
    metrics: [
      { label: "Reduction Ratio", value: "11:1" },
      { label: "Component Accuracy", value: "±0.02 mm" },
      { label: "Dynamic Balance", value: "Dual Phased Disks" },
      { label: "CAD System", value: "Siemens NX" },
    ],
    slides: [
      { src: "/assets/projects/slide_5.png", caption: "Parametric 11:1 cycloidal drive gearbox with dual counter-balancing disks." },
      { src: "/assets/projects/slide_6.png", caption: "Parametric mathematical formulas linked directly inside Siemens NX expressions." },
      { src: "/assets/projects/slide_7.png", caption: "Complete exploded components: cycloid housing, eccentric shaft, dual disks, output drive." }
    ]
  },
  {
    id: "acc-analysis",
    title: "Automated Cruise Control (ACC) Modeling",
    category: "System Dynamics & Controls",
    date: "October 2025",
    org: "Purdue University Mechanical Engineering",
    summary: "Engineered a first-order dynamic model and custom sensor filtering algorithm in MATLAB to evaluate adaptive cruise control response under varying vehicle weights, road gradients, and tire compound characteristics.",
    highlights: [
      "Created a high-speed moving average noise filtering script that outperformed native MATLAB smoothing for large batch datasets.",
      "Accurately detected acceleration onset time while capturing transient sensor spikes needed for first-order transfer function fitting.",
      "Demonstrated that experimental tire variations stayed safely within client performance boundaries (compact, sedan, and SUV).",
      "Achieved exceptionally low sum of squared errors (SSE_mod < 0.065 across all tested vehicle classes)."
    ],
    tags: ["MATLAB / Simulink", "System Modeling", "Data Filtering", "Vehicle Dynamics", "Statistical Analysis"],
    coverImage: "/assets/projects/slide_19.png",
    metrics: [
      { label: "Compact SSE", value: "0.037" },
      { label: "Sedan SSE", value: "0.025" },
      { label: "SUV SSE", value: "0.065" },
      { label: "Architecture", value: "First-Order Transfer" },
    ],
    slides: [
      { src: "/assets/projects/slide_19.png", caption: "Automated cruise control system response flowchart and MATLAB block diagram." },
      { src: "/assets/projects/slide_20.png", caption: "Multi-vehicle class tire performance filtered test curves." },
      { src: "/assets/projects/slide_21.png", caption: "Raw telemetry vs. first-order response model overlay showing tight conformity." },
      { src: "/assets/projects/slide_22.png", caption: "Upper/lower safety tolerance envelope verification for vehicle tire qualification." },
      { src: "/assets/projects/slide_23.png", caption: "Calculated time constants and SSE parameter validation matrices." }
    ]
  },
  {
    id: "assignment-dashboard",
    title: "Purdue Assignment Automation Dashboard",
    category: "Software Tooling & Automation",
    date: "April 2026",
    org: "Personal Software Project",
    summary: "Built a consolidated academic task management web application with a Python backend and clean responsive frontend to scrape assignments across disparate university portals (Brightspace & Gradescope).",
    highlights: [
      "Eliminated 10+ clicks and multi-factor authentication delays across separate LMS platforms.",
      "Aggregates upcoming assignments, homework submissions, and deadlines into a single visual calendar interface.",
      "Auto-syncs submission status: completed assignments instantly vanish upon confirmed upload."
    ],
    tags: ["Python", "Web Scraping", "JavaScript / HTML", "Productivity Tooling"],
    coverImage: "/assets/projects/slide_25.png",
    metrics: [
      { label: "Time Saved", value: "60s per lookup" },
      { label: "Platforms Scraped", value: "Brightspace + Gradescope" },
      { label: "Frontend", value: "Clean Responsive Web" },
    ],
    slides: [
      { src: "/assets/projects/slide_25.png", caption: "Problem identification and Python scraping architecture." },
      { src: "/assets/projects/slide_26.png", caption: "Direct assignment launch and auto-completion tracking mechanics." },
      { src: "/assets/projects/slide_27.png", caption: "Visual assignment schedule and calendar integration view." }
    ]
  },
  {
    id: "cad-freelancing",
    title: "CAD & Rapid Prototyping Platform",
    category: "Web & Engineering Services",
    date: "April 2025",
    org: "Independent Consultancy",
    summary: "Built a web platform to showcase and manage freelance engineering drafting, GD&T tolerance analysis, and FDM rapid prototyping services for external clients.",
    highlights: [
      "Engineered an interactive quote request and project intake UI for engineering drawing deliverables.",
      "Integrated 3D printing cost estimation based on material volume and fabrication time.",
      "Delivered production-ready CAD models and 2D manufacturing drawings compliant with ASME Y14.5."
    ],
    tags: ["Web Design", "Freelance CAD", "Manufacturing Drawings", "Client Logistics"],
    coverImage: "/assets/projects/slide_28.png",
    metrics: [
      { label: "Services", value: "CAD, Drawings, 3D Print" },
      { label: "Standards", value: "ASME Y14.5 GD&T" },
      { label: "Focus", value: "DFM & Rapid Turnaround" },
    ],
    slides: [
      { src: "/assets/projects/slide_28.png", caption: "Freelance CAD and engineering design services web portal." },
      { src: "/assets/projects/slide_29.png", caption: "Client intake, file review, and dynamic quote management dashboard." }
    ]
  }
];
