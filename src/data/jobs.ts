export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  tags: string[];
  description: string;
  postedAt: string;
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior AI Engineer",
    company: "NeuroTech Inc.",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    salary: "$160k - $210k",
    tags: ["Python", "TensorFlow", "LLMs"],
    description: "We are looking for a Senior AI Engineer to lead our new generative models team. You will be responsible for training and deploying large-scale models that power our core products. Experience with PyTorch and distributed training is required.",
    postedAt: "2d ago"
  },
  {
    id: "2",
    title: "Frontend Developer (React/Next.js)",
    company: "DesignGrid",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $150k",
    tags: ["React", "Next.js", "TypeScript"],
    description: "DesignGrid is seeking a talented Frontend Developer with a keen eye for design. You will build stunning, responsive user interfaces using Next.js and modern CSS techniques. Experience with Framer Motion or similar animation libraries is a huge plus.",
    postedAt: "5h ago"
  },
  {
    id: "3",
    title: "Machine Learning Researcher",
    company: "GlobalCo AI",
    location: "Hyderabad, India (Onsite)",
    type: "Full-time",
    salary: "Competitive",
    tags: ["Research", "PyTorch", "NLP"],
    description: "Join GlobalCo as an ML Researcher focusing on Natural Language Processing. You will publish papers, attend top conferences, and help integrate cutting-edge research into our enterprise solutions.",
    postedAt: "1w ago"
  },
  {
    id: "4",
    title: "DevOps / MLOps Engineer",
    company: "ScaleFast",
    location: "New York, NY",
    type: "Contract",
    salary: "$90 - $120 / hr",
    tags: ["Kubernetes", "AWS", "CI/CD"],
    description: "We need an experienced DevOps engineer with MLOps background to streamline our model deployment pipelines. You will work closely with data scientists to containerize and scale models.",
    postedAt: "3d ago"
  }
];
