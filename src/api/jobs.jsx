const jobs = [
    {
    id: 1,
    title: "Chief Engineer",
    company: "Maersk Line",
    location: "International Waters",
    type: "Contract",
    salary: "$8,000 - $12,000/month",
    category: "Engine Officers",
    posted: "2 days ago",
    vesselType: "Container Ship",
    experience: "Minimum 5 years as Chief Engineer on container vessels",
    contractDuration: "6 months on/2 months off",
    joiningDate: "15 August 2023",
    description: "Responsible for all engineering operations aboard a modern 14,000 TEU container vessel operating on Asia-Europe routes. Must ensure efficient operation and maintenance of all machinery and equipment.",
    requirements: [
      "STCW certifications (all levels)",
      "Chief Engineer COC (Unlimited)",
      "5+ years experience with MAN B&W engines",
      "Advanced firefighting certification",
      "Valid medical certificate (ENG1 or equivalent)"
    ],
    responsibilities: [
      "Oversee all engineering operations and maintenance",
      "Manage engine department crew of 8 personnel",
      "Ensure compliance with MARPOL and SOLAS regulations",
      "Maintain engine logs and documentation",
      "Coordinate with shore technical teams"
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Comprehensive health and travel insurance",
      "Flight reimbursement (business class)",
      "6 weeks paid vacation per year",
      "Ongoing training opportunities"
    ],
    companyDescription: "Maersk Line is the world's largest container shipping company, operating over 700 vessels and employing more than 80,000 people worldwide. We're committed to sustainable shipping practices.",
    contactEmail: "engineering.careers@maersk.com",
    applicationDeadline: "30 July 2023"
  },
  {
    id: 2,
    title: "Deck Officer (OOW)",
    company: "Mediterranean Shipping Company",
    location: "Europe-Asia Routes",
    type: "Permanent",
    salary: "$5,500 - $7,500/month",
    category: "Deck Officers",
    posted: "1 day ago",
    vesselType: "Bulk Carrier",
    experience: "2+ years as OOW on bulk carriers",
    contractDuration: "4 months on/2 months off",
    joiningDate: "1 September 2023",
    description: "Second officer position available on Capesize bulk carrier operating between European and Asian ports. Navigation watchkeeping and safety responsibilities.",
    requirements: [
      "OOW Certificate of Competency",
      "ECDIS certification",
      "GMDSS Radio Operator license",
      "2+ years sea time as OOW",
      "Experience with bulk cargo operations"
    ],
    responsibilities: [
      "Stand navigation watches (0800-1200/2000-2400)",
      "Maintain safety equipment and documentation",
      "Assist with cargo operations",
      "Update nautical publications",
      "Medical officer responsibilities"
    ],
    benefits: [
      "Stable employment with growth opportunities",
      "Company pension scheme",
      "Flight allowance",
      "4 weeks paid leave per contract",
      "Professional development support"
    ],
    companyDescription: "MSC is a world leader in global container shipping with over 600 vessels. We're family-owned and pride ourselves on long-term crew relationships.",
    contactEmail: "deck.recruitment@msc.com",
    applicationDeadline: "15 August 2023"
  },
  {
    id: 3,
    title: "2nd Engineer",
    company: "COSCO Shipping",
    location: "Worldwide",
    type: "Contract",
    salary: "$6,000 - $9,000/month",
    category: "Engine Officers",
    posted: "3 days ago",
    vesselType: "Tanker",
    experience: "3+ years as 2nd Engineer on tankers",
    contractDuration: "5 months on/2 months off",
    joiningDate: "20 August 2023",
    description: "Second engineer position available on modern VLCC carrying crude oil. Responsible for engine room operations and maintenance under the Chief Engineer's direction.",
    requirements: [
      "2nd Engineer COC (Unlimited)",
      "Tanker experience (oil/chemical)",
      "STCW Advanced Tanker Operations",
      "Experience with Sulzer engines",
      "Valid medical certificate"
    ],
    responsibilities: [
      "Supervise engine room watchkeepers",
      "Maintain main engine and auxiliaries",
      "Oversee bunkering operations",
      "Manage spare parts inventory",
      "Implement safety procedures"
    ],
    benefits: [
      "Competitive tax-free salary",
      "Comprehensive insurance coverage",
      "Performance bonuses",
      "Travel allowance",
      "Company training programs"
    ],
    companyDescription: "COSCO Shipping is China's largest shipping company with a diverse fleet of over 1,300 vessels. We're expanding our international operations.",
    contactEmail: "crew@coscoshipping.com",
    applicationDeadline: "10 August 2023"
  },
  // Continue with similar structure for jobs 4-15...
  {
    id: 4,
    title: "Electrical Officer",
    company: "Evergreen Marine",
    location: "Trans-Pacific",
    type: "Contract",
    salary: "$5,800 - $8,200/month",
    category: "Technical Officers",
    posted: "5 days ago",
    vesselType: "Container Ship",
    experience: "2+ years as ETO on container vessels",
    contractDuration: "6 months on/2 months off",
    joiningDate: "25 August 2023",
    description: "Responsible for all electrical and electronic systems aboard a 12,000 TEU container vessel operating between Asia and North America.",
    requirements: [
      "ETO COC or equivalent",
      "Experience with container ship systems",
      "High voltage certification",
      "Knowledge of automation systems",
      "STCW certifications"
    ],
    responsibilities: [
      "Maintain all electrical systems",
      "Troubleshoot electronic equipment",
      "Oversee refrigeration plant",
      "Maintain navigation equipment",
      "Manage electrical spare parts"
    ],
    benefits: [
      "Attractive salary package",
      "Comprehensive insurance",
      "Travel benefits",
      "Training opportunities",
      "Career progression"
    ],
    companyDescription: "Evergreen Marine is a leading container shipping company with a modern fleet and global network of services.",
    contactEmail: "eto.recruitment@evergreen-marine.com",
    applicationDeadline: "15 August 2023"
  },
  // Continuing from job #5 in src/data/jobs.js
{
  id: 5,
  title: "Chief Cook",
  company: "Royal Caribbean Cruises",
  location: "Caribbean",
  type: "Permanent",
  salary: "$3,500 - $4,500/month + tips",
  category: "Catering Staff",
  posted: "1 week ago",
  vesselType: "Cruise Ship",
  experience: "3+ years in cruise ship galley operations",
  contractDuration: "8 months on/2 months off",
  joiningDate: "5 September 2023",
  description: "Lead culinary team in main galley serving 2,000+ passengers aboard luxury cruise ship. Responsible for menu planning and food safety standards.",
  requirements: [
    "Culinary degree or equivalent experience",
    "Ship Cook Certificate",
    "Food Safety Level 3 certification",
    "Experience with high-volume kitchens",
    "Allergen awareness training"
  ],
  responsibilities: [
    "Manage galley team of 12 cooks",
    "Plan weekly menus",
    "Maintain HACCP standards",
    "Control food costs and inventory",
    "Train junior staff"
  ],
  benefits: [
    "Shared cabin with private bathroom",
    "Paid training programs",
    "Travel opportunities",
    "Crew facilities access",
    "Performance bonuses"
  ],
  companyDescription: "Royal Caribbean International operates the world's most innovative cruise ships, delivering memorable vacations to millions annually.",
  contactEmail: "culinary.careers@rccl.com",
  applicationDeadline: "20 August 2023"
},
{
  id: 6,
  title: "AB Seaman",
  company: "Stena Line",
  location: "North Sea",
  type: "Contract",
  salary: "$3,000 - $4,000/month",
  category: "Deck Ratings",
  posted: "2 days ago",
  vesselType: "Ro-Ro",
  experience: "1+ year as AB on Ro-Ro vessels",
  contractDuration: "6 weeks on/6 weeks off",
  joiningDate: "12 August 2023",
  description: "Able Seaman needed for busy North Sea Ro-Ro ferry operation. Duties include cargo operations, mooring, and safety equipment maintenance.",
  requirements: [
    "AB Certificate",
    "Ro-Ro experience",
    "PST certification",
    "Valid ENG1 medical",
    "EU passport required"
  ],
  responsibilities: [
    "Stand bridge/navigation watches",
    "Mooring operations",
    "Cargo securing",
    "Safety equipment checks",
    "Emergency team member"
  ],
  benefits: [
    "Fixed schedule",
    "Travel benefits",
    "Union representation",
    "Overtime opportunities",
    "Career progression"
  ],
  companyDescription: "Stena Line is Europe's leading ferry operator with routes across the North Sea, Irish Sea and Baltic.",
  contactEmail: "crew@stenaline.com",
  applicationDeadline: "5 August 2023"
},
{
  id: 7,
  title: "ETO (Electro-Technical Officer)",
  company: "Shell Shipping",
  location: "Middle East Routes",
  type: "Contract",
  salary: "$7,000 - $9,500/month",
  category: "Technical Officers",
  posted: "4 days ago",
  vesselType: "LNG Carrier",
  experience: "2+ years as ETO on gas carriers",
  contractDuration: "4 months on/3 months off",
  joiningDate: "1 September 2023",
  description: "ETO position available on modern LNG carrier operating in Middle East-Asia trade. Responsible for all electrical and automation systems.",
  requirements: [
    "ETO Certificate of Competency",
    "LNG experience preferred",
    "High Voltage certification",
    "Automation system knowledge",
    "Gas tanker safety course"
  ],
  responsibilities: [
    "Maintain electrical systems",
    "Troubleshoot automation",
    "Monitor cargo control systems",
    "Maintain navigation electronics",
    "Safety system maintenance"
  ],
  benefits: [
    "Tax-free salary",
    "Comprehensive insurance",
    "Flight allowance",
    "Training programs",
    "Performance bonuses"
  ],
  companyDescription: "Shell Shipping operates one of the world's most advanced LNG fleets, pioneering clean energy transportation.",
  contactEmail: "technical.recruitment@shell.com",
  applicationDeadline: "15 August 2023"
},
{
  id: 8,
  title: "Chief Mate",
  company: "Hapag-Lloyd",
  location: "Global",
  type: "Permanent",
  salary: "$7,500 - $10,000/month",
  category: "Deck Officers",
  posted: "3 days ago",
  vesselType: "Container Ship",
  experience: "2+ years as Chief Mate on container ships",
  contractDuration: "4 months on/3 months off",
  joiningDate: "20 August 2023",
  description: "Chief Mate position on 13,000 TEU container vessel operating worldwide. Responsible for cargo operations, safety, and navigation.",
  requirements: [
    "Chief Mate COC (Unlimited)",
    "Container ship experience",
    "ECDIS certification",
    "Advanced cargo course",
    "Security training"
  ],
  responsibilities: [
    "Manage deck department",
    "Oversee cargo operations",
    "Maintain safety equipment",
    "Navigation planning",
    "ISPS duties"
  ],
  benefits: [
    "Company pension scheme",
    "Comprehensive insurance",
    "Education allowance",
    "Performance bonuses",
    "Career development"
  ],
  companyDescription: "Hapag-Lloyd is a leading global liner shipping company with 250 modern vessels and 13,000 employees worldwide.",
  contactEmail: "officer.recruitment@hlag.com",
  applicationDeadline: "10 August 2023"
},
{
  id: 9,
  title: "3rd Engineer",
  company: "BP Shipping",
  location: "Atlantic Routes",
  type: "Contract",
  salary: "$5,000 - $6,500/month",
  category: "Engine Officers",
  posted: "1 week ago",
  vesselType: "Oil Tanker",
  experience: "1+ year as 3rd Engineer on tankers",
  contractDuration: "4 months on/2 months off",
  joiningDate: "25 August 2023",
  description: "Junior engineer position on product tanker operating trans-Atlantic routes. Watchkeeping and maintenance responsibilities under 2nd Engineer.",
  requirements: [
    "3rd Engineer COC",
    "Oil tanker experience",
    "STCW Advanced Firefighting",
    "ERP system familiarity",
    "Valid medical"
  ],
  responsibilities: [
    "Stand engine room watches",
    "Maintain auxiliary systems",
    "Assist with bunkering",
    "Maintenance documentation",
    "Safety equipment checks"
  ],
  benefits: [
    "Training opportunities",
    "Travel allowance",
    "Performance bonuses",
    "Union benefits",
    "Career progression"
  ],
  companyDescription: "BP Shipping manages one of the world's largest tanker fleets, transporting energy safely and efficiently.",
  contactEmail: "engineering.recruitment@bp.com",
  applicationDeadline: "15 August 2023"
},
{
  id: 10,
  title: "Deck Cadet",
  company: "MSC Cruises",
  location: "Mediterranean",
  type: "Training Contract",
  salary: "$1,200 - $1,800/month",
  category: "Cadets",
  posted: "5 days ago",
  vesselType: "Cruise Ship",
  experience: "Maritime academy student",
  contractDuration: "6 months training",
  joiningDate: "Rolling intake",
  description: "Training position for deck cadets aboard luxury cruise ship. Comprehensive onboard training program covering all aspects of cruise ship operations.",
  requirements: [
    "Current maritime academy student",
    "STCW basic training",
    "ENG1 medical certificate",
    "EU passport/visa",
    "English fluency"
  ],
  responsibilities: [
    "Bridge watchkeeping assistance",
    "Safety equipment maintenance",
    "Navigation practice",
    "Cargo operations training",
    "Emergency drills"
  ],
  benefits: [
    "Comprehensive training",
    "Free accommodation/meals",
    "Travel opportunities",
    "Mentorship program",
    "Potential employment"
  ],
  companyDescription: "MSC Cruises is the world's fastest-growing cruise line with a modern fleet of environmentally advanced ships.",
  contactEmail: "cadet.program@msccruises.com",
  applicationDeadline: "Open until filled"
},
{
  id: 11,
  title: "Fitter (Engine Department)",
  company: "Teekay Shipping",
  location: "Worldwide",
  type: "Contract",
  salary: "$3,800 - $5,200/month",
  category: "Engine Ratings",
  posted: "2 days ago",
  vesselType: "Product Tanker",
  experience: "2+ years in ship engine maintenance",
  contractDuration: "5 months on/2 months off",
  joiningDate: "15 August 2023",
  description: "Skilled fitter needed for engine department on product tanker. Mechanical maintenance and repair responsibilities.",
  requirements: [
    "Fitter qualification",
    "Ship experience preferred",
    "Welding certification",
    "Machining skills",
    "STCW basic training"
  ],
  responsibilities: [
    "Engine maintenance",
    "Pump overhauls",
    "Valve repairs",
    "Machining work",
    "Assist engineers"
  ],
  benefits: [
    "Overtime opportunities",
    "Travel allowance",
    "Training programs",
    "Union benefits",
    "Career progression"
  ],
  companyDescription: "Teekay is a leading midstream oil and gas company with 150 vessels in its conventional and LNG fleets.",
  contactEmail: "crew.recruitment@teekay.com",
  applicationDeadline: "10 August 2023"
},
{
  id: 12,
  title: "Safety Officer",
  company: "Anglo-Eastern",
  location: "Asia-Europe",
  type: "Permanent",
  salary: "$6,500 - $8,500/month",
  category: "Deck Officers",
  posted: "1 day ago",
  vesselType: "Bulk Carrier",
  experience: "2+ years as Safety Officer on bulk carriers",
  contractDuration: "4 months on/3 months off",
  joiningDate: "1 September 2023",
  description: "Safety Officer position on Capesize bulk carrier. Responsible for implementing and monitoring all safety procedures aboard.",
  requirements: [
    "OOW or higher certificate",
    "Advanced safety training",
    "Audit experience",
    "Incident investigation skills",
    "Bulk carrier experience"
  ],
  responsibilities: [
    "Conduct safety inspections",
    "Lead safety meetings",
    "Maintain safety records",
    "Train crew in safety procedures",
    "Investigate incidents"
  ],
  benefits: [
    "Comprehensive benefits",
    "Performance bonuses",
    "Training opportunities",
    "Career development",
    "Travel allowance"
  ],
  companyDescription: "Anglo-Eastern is a leading ship manager with over 600 vessels under management and 30,000 crew members.",
  contactEmail: "safety.recruitment@angloeastern.com",
  applicationDeadline: "20 August 2023"
},
{
  id: 13,
  title: "Chief Steward",
  company: "Norwegian Cruise Line",
  location: "Alaska",
  type: "Seasonal",
  salary: "$4,000 - $5,500/month + tips",
  category: "Catering Staff",
  posted: "1 week ago",
  vesselType: "Cruise Ship",
  experience: "3+ years in cruise ship hotel department",
  contractDuration: "7 months (Alaska season)",
  joiningDate: "1 May 2024",
  description: "Lead hotel services team aboard premium cruise ship operating in Alaska. Manage all guest-facing housekeeping and cleaning operations.",
  requirements: [
    "Hospitality management experience",
    "Cruise ship experience",
    "Food safety certification",
    "Staff management skills",
    "USPH knowledge"
  ],
  responsibilities: [
    "Manage 50+ cabin stewards",
    "Ensure USPH standards",
    "Guest service coordination",
    "Inventory management",
    "Staff training"
  ],
  benefits: [
    "Single cabin accommodation",
    "Travel benefits",
    "Performance bonuses",
    "Crew facilities access",
    "Seasonal rehire options"
  ],
  companyDescription: "Norwegian Cruise Line is an innovator in cruise travel with a fleet of 18 ships offering 'Freestyle Cruising'.",
  contactEmail: "hotel.recruitment@ncl.com",
  applicationDeadline: "1 March 2024"
},
{
  id: 14,
  title: "Dynamic Positioning Operator",
  company: "Odfjell",
  location: "Offshore Worldwide",
  type: "Contract",
  salary: "$8,000 - $11,000/month",
  category: "Offshore Positions",
  posted: "3 days ago",
  vesselType: "Chemical Tanker",
  experience: "2+ years as DPO on tankers",
  contractDuration: "6 weeks on/6 weeks off",
  joiningDate: "Rolling intake",
  description: "DPO position on chemical tanker operating in offshore support roles. Must maintain position during sensitive operations.",
  requirements: [
    "DPO Unlimited certificate",
    "Chemical tanker experience",
    "Advanced DP training",
    "Cargo operations knowledge",
    "Offshore experience"
  ],
  responsibilities: [
    "Operate DP system",
    "Monitor position keeping",
    "Coordinate with bridge team",
    "Maintain DP logs",
    "Emergency response"
  ],
  benefits: [
    "Rotation schedule",
    "Hazard pay",
    "Comprehensive insurance",
    "Training opportunities",
    "Career progression"
  ],
  companyDescription: "Odfjell is a leading owner and operator of chemical tankers and tank terminals with 90 vessels worldwide.",
  contactEmail: "dp.recruitment@odfjell.com",
  applicationDeadline: "Open until filled"
},
{
  id: 15,
  title: "Port Engineer",
  company: "Wallenius Wilhelmsen",
  location: "Rotterdam (Office Based)",
  type: "Permanent",
  salary: "$90,000 - $120,000/year",
  category: "Shore-Based",
  posted: "1 week ago",
  vesselType: "Car Carrier",
  experience: "5+ years as ship engineer with shore experience",
  contractDuration: "Permanent",
  joiningDate: "Negotiable",
  description: "Shore-based engineering position supporting fleet of pure car/truck carriers. Technical supervision and project management role.",
  requirements: [
    "Chief Engineer COC",
    "Shore experience preferred",
    "Project management skills",
    "Budget management",
    "Vendor coordination"
  ],
  responsibilities: [
    "Technical support to fleet",
    "Dry-dock supervision",
    "Maintenance planning",
    "Technical audits",
    "Cost control"
  ],
  benefits: [
    "Office-based position",
    "Company car",
    "Pension scheme",
    "Health insurance",
    "Performance bonuses"
  ],
  companyDescription: "Wallenius Wilhelmsen is the market leader in RoRo shipping and vehicle logistics with 130 vessels.",
  contactEmail: "technical.recruitment@walwil.com",
  applicationDeadline: "31 August 2023"
}
]
export default jobs;