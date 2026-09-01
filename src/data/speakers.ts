export interface Speaker {
  id: string;
  name: string;
  roleTitle: string;
  organization: string;
  avatarUrl: string;
  bio: string;
  linkedInUrl?: string;
}

export const speakers: Speaker[] = [
  {
    id: "sumanto_kar",
    name: "Sumanto Kar",
    roleTitle: "Series Lead Mentor & Module Instructor",
    organization: "FOSSEE, IIT Bombay",
    avatarUrl: "/avatars/sumanto.png",
    bio: "Expert in open-source EDA tools and RF IC Design. Lead mentor for the flagship series.",
  },

  {
    id: "abdur_rahman",
    name: "Abdur Rahman",
    roleTitle: "Module 2 Device Modeling Lead",
    organization: "IHP Microelectronics",
    avatarUrl: "/avatars/abdur.png",
    bio: "Specializes in high-frequency device modeling and SiGe BiCMOS physics at IHP.",
  },
  {
    id: "yegappan_sethu",
    name: "Yegappan Sethu",
    roleTitle: "Module 7 EM Parasitics Extraction",
    organization: "Field Solver & EDA Specialist",
    avatarUrl: "/avatars/yegappan.png",
    bio: "Specialist in 3D Electromagnetic solving and parasitic extraction for physical verification.",
  },
  {
    id: "dr_gs_javed",
    name: "Dr. GS Javed",
    roleTitle: "Module 8 MPW & Industry Lead",
    organization: "Intel Corp. / IEEE CNAG",
    avatarUrl: "/avatars/dr_gs_javed.png",
    bio: "Leading expert in silicon validation, test pipelines, and career advancement in RF IC.",
  },
  {
    id: "krzysztof_herman",
    name: "Krzysztof Herman",
    roleTitle: "Module 8 MPW Tape-Out Submission Pipeline",
    organization: "IHP Open-Silicon Team",
    avatarUrl: "/avatars/krzysztof.png",
    bio: "Provides insights on MPW pipelines and Efabless/IHP open shuttle submissions.",
  },
  {
    id: "rene_scholz",
    name: "Rene Scholz",
    roleTitle: "Series Advisor & Contributor",
    organization: "IHP Microelectronics",
    avatarUrl: "/avatars/rene.png",
    bio: "Provides advisory insights on the complete FOSS to silicon flow.",
  }
];
