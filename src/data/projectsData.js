export const projects = [
  {
    title: "Adaptive CRD Control System",
    category: "Research → Implementation → Hardware",
    description: "Deep reinforcement learning for adaptive control in geotechnical consolidation testing. Translates academic research into production-ready system with hardware validation.",
    tech: ["Python", "PyTorch", "Deep RL (SAC/TD3/PPO)", "Constrained MDP", "Domain Randomization", "NumPy"],
    highlights: [
      "27-29% reduction in testing duration (44h → 31h average)",
      "85% success rate under parameter uncertainty (±10-30%)",
      "Robust policy via constrained MDP and domain randomization",
      "IEEE Access publication under review"
    ],
    mathematicalFoundation: [
      "Constrained MDP formulation with safety-first reward design",
      "Actor-critic methods: SAC, TD3, PPO comparative evaluation",
      "Domain randomization for robust policy learning",
      "0.37% measurement accuracy maintained (compression index)"
    ],
    status: "Under Review (IEEE) + Hardware Validation In Progress",
    github: "https://github.com/Targhib49/crd-adaptive-control",
    tags: ["Deep RL", "Control Systems", "Research Translation", "Hardware"]
  },
  {
    title: "Surgical Robot Trajectory Planning",
    category: "Classical Control + Deep RL Foundation",
    description: "Hierarchical control architecture for surgical robotics - classical baseline (70% success) with preparation for learned adaptive trajectory planning.",
    tech: ["Python", "MuJoCo", "Inverse Kinematics", "PID Control", "Cubic Splines", "NumPy/SciPy"],
    highlights: [
      "Velocity-level inverse kinematics with Jacobian mapping",
      "Multiple PID tuning methods compared (Ziegler-Nichols, Bayesian, PSO)",
      "Mean tracking error: 436.98mm (acceptable baseline)",
      "Foundation for RL-based adaptive planning (in progress)"
    ],
    mathematicalFoundation: [
      "Velocity-level inverse kinematics (Jacobian-based)",
      "Cubic spline trajectory generation with continuous derivatives",
      "Constraint satisfaction via low-pass filtering + saturation",
      "Hierarchical control: PID → IK → Planning"
    ],
    status: "Classical Baseline Complete (70%) | RL Phase In Progress",
    github: "https://github.com/Targhib49/surgical-robot-velocity-control",
    tags: ["Robotics", "Control", "IK", "RL Foundation"]
  },
  {
    title: "AI Research Dashboard",
    category: "Multi-Domain Paper Implementations",
    description: "Interactive web platform showcasing production implementations of foundational AI papers across NLP, Computer Vision, Graph Neural Networks, and Reinforcement Learning.",
    tech: ["React", "TypeScript", "FastAPI", "PyTorch", "PostgreSQL", "D3.js", "Docker"],
    highlights: [
      "Transformer architecture: attention mechanisms, positional encoding",
      "Vision Transformers and CNNs for computer vision tasks",
      "Graph Neural Networks: GCN, GAT with message passing",
      "Deep RL algorithms: policy gradients, Q-learning variants",
      "Interactive demos with mathematical explanations"
    ],
    mathematicalFoundation: [
      "Multi-head self-attention and scaled dot-product attention",
      "Graph convolutions and message passing frameworks",
      "Policy gradient theorems and actor-critic methods",
      "Backpropagation through time and gradient flow analysis"
    ],
    status: "In Development (Target: 8-12 implementations)",
    github: "https://github.com/Targhib49/ai-research-dashboard",
    tags: ["NLP", "Computer Vision", "GNN", "Full-Stack", "Research Implementation"]
  },
  {
    title: "Kamil Pascasarjana Platform",
    category: "Production Full-Stack System",
    description: "Full-stack Muslim postgraduate community hub serving real users with personalized dashboards, e-commerce, blogs, and utility tools.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Authentication", "Real-time Features"],
    highlights: [
      "Serving active user community with diverse features",
      "Complex user management and personalization system",
      "Production deployment with monitoring and maintenance",
      "End-to-end product development experience"
    ],
    mathematicalFoundation: null,
    status: "On Hold (Maintained for Users)",
    link: "https://kamilitb.vercel.app",
    tags: ["Full-Stack", "Production", "User Experience"]
  }
];

export const comingSoonProjects = [
  {
    title: "Control Systems Sandbox",
    category: "Classical to Modern Control Theory",
    description: "Comparative implementations of control algorithms (classical, modern, learning-based) across diverse plant models - demonstrating control theory versatility.",
    tech: ["Python", "MuJoCo", "Isaac Gym", "NumPy", "SciPy", "Control Library", "React"],
    plannedImplementations: [
      "Inverted Pendulum: PID, LQR, PPO/SAC",
      "CSTR: PID cascade, MPC, SAC for optimization",
      "Quadcopter: Cascaded PID, Geometric control, TD3",
      "Robotic Manipulator: IK + PID, Adaptive control, SAC"
    ],
    mathematicalFocus: [
      "Stability analysis: Lyapunov, Routh-Hurwitz",
      "Optimal control: LQR/LQG, Riccati equations",
      "Model Predictive Control with constraints",
      "Adaptive control: MRAC, parameter estimation"
    ],
    status: "Coming Soon",
    tags: ["Control Theory", "Classical Control", "MPC", "Adaptive Control", "Deep RL"]
  },
  {
    title: "Battery Charging Optimizer",
    category: "AI-Powered Energy Systems",
    description: "Deep RL-based battery charging optimization balancing charging speed, battery longevity, and safety constraints with interactive visualization.",
    tech: ["Python", "SAC/TD3", "Battery Physics Model", "React", "Real-time Monitoring"],
    plannedImplementations: [
      "Equivalent Circuit Model for battery physics",
      "SAC/TD3 for continuous control optimization",
      "Temperature and voltage constraint satisfaction",
      "Interactive web dashboard with real-time visualization"
    ],
    mathematicalFocus: [
      "Constrained MDP with thermal and voltage limits",
      "Battery aging model integration",
      "Multi-objective optimization (speed vs longevity)",
      "Domain randomization for battery parameter variations"
    ],
    status: "Coming Soon",
    tags: ["Deep RL", "Energy Systems", "Constrained Optimization"]
  }
];