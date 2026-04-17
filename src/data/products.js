export const products = [
  {
    id: 'mes',
    title: 'Smart Manufacturing Execution Systems (MES)',
    description: 'Realtime production monitoring, manufacturing dashboard, AI analytics for factory intelligence.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    about: 'Our MES is a comprehensive solution that bridges the gap between enterprise-level planning and the factory floor, providing real-time visibility into production processes.',
    features: [
      'Real-time data acquisition from PLC and SCADA systems',
      'Advanced production scheduling and dispatching',
      'Quality management and statistical process control (SPC)',
      'OEE (Overall Equipment Effectiveness) tracking',
      'Digital work instructions and paperless floor operations'
    ],
    benefits: [
      'Increased production throughput and efficiency',
      'Reduction in manufacturing cycle times',
      'Enhanced product quality and compliance tracking',
      'Elimination of manual paper-based reporting',
      'Improved resource utilization and waste reduction'
    ],
    scope20Year: 'In the next 20 years, MES will evolve into fully autonomous factory brains, orchestrating self-healing production lines and integrating seamlessly with global molecular manufacturing networks.',
    advantages: [
      'Seamless integration with ERP and IIoT platforms',
      'Highly scalable cloud-native architecture',
      'AI-driven predictive analytics for bottleneck identification',
      'User-friendly role-based dashboards',
      'Rapid deployment with pre-configured industry templates'
    ],
    architecture: {
      description: 'Distributed microservices architecture built on a high-availability Kubernetes cluster, ensuring 99.99% uptime for critical factory operations.',
      stack: ['Docker', 'Kubernetes', 'Go', 'Redis', 'PostgreSQL'],
      layers: [
        { name: 'Edge Gateway', details: 'PLC & Sensor Integration via MQTT' },
        { name: 'Data Lake', details: 'High-velocity time-series storage' },
        { name: 'Analytics Engine', details: 'AI models for production forecasting' }
      ]
    },
    highlights: [
      'Master your production environment with absolute precision.',
      'Transform raw factory data into actionable strategic intelligence.',
      'Achieve unparalleled transparency across every manufacturing stage.',
      'Empower your workforce with real-time digital insights.',
      'Stay ahead of the competition with industry-leading technology.'
    ]
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance Software',
    description: 'Machine diagnostics and early fault detection to reduce downtime across equipment fleets.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    about: 'Our Predictive Maintenance platform uses machine learning and vibration analysis to foresee equipment failures before they occur, shifting maintenance from reactive to proactive.',
    features: [
      'AI-powered anomaly detection for rotating equipment',
      'Real-time vibration, thermal, and acoustic monitoring',
      'Automated maintenance work order generation',
      'Mean Time Between Failure (MTBF) analysis',
      'Mobile-ready alerts and diagnostic reports'
    ],
    benefits: [
      'Up to 30% reduction in maintenance costs',
      'Significant decrease in unplanned downtime',
      'Extended machinery lifespan and ROI',
      'Improved safety for factory personnel',
      'Optimized spare parts inventory management'
    ],
    scope20Year: 'By 2045, maintenance will be standardly self-executing, with machines performing their own repairs using integrated nanorobotics and 3D-printed modular components.',
    advantages: [
      'Universal sensor compatibility (LoRaWAN, Zigbee, WiFi)',
      'Proven algorithms trained on petabytes of industrial data',
      'Easy-to-interpret root cause analysis visualizers',
      'Cloud and Edge computing hybrid processing',
      'Zero-config setup for common industrial motors'
    ],
    architecture: {
      description: 'Hybrid Edge-Cloud processing model. Anomaly detection happens at the edge for zero latency, while long-term trend analysis is offloaded to the cloud.',
      stack: ['TensorFlow Lite', 'Python', 'AWS IoT Greengrass', 'TimescaleDB'],
      layers: [
        { name: 'Sensor Layer', details: 'Vibration & Thermal Monitoring' },
        { name: 'Edge Intelligence', details: 'Real-time fault classification' },
        { name: 'Central Command', details: 'Fleet-wide maintenance scheduling' }
      ]
    },
    highlights: [
      'Predict the future of your machinery health today.',
      'End the era of costly unplanned production stops.',
      'Maximize your mechanical assets with data-driven care.',
      'Secure your operational continuity with AI-guided monitoring.',
      'Lead the industry in reliability and safety standards.'
    ]
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin Technology',
    description: 'Virtual factory simulations with holographic digital twin models and real-time analytics.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    about: 'We create living virtual replicas of physical assets, processes, and systems that synchronize with their real-world counterparts in real-time for ultimate simulation and control.',
    features: [
      'Real-time IoT data synchronization',
      '3D spatial mapping and CAD integration',
      'What-if scenario simulation engines',
      'Augmented Reality (AR) overlay support',
      'Historical performance replay and analysis'
    ],
    benefits: [
      'Optimize factory layouts before physical implementation',
      'Test process changes in a risk-free virtual environment',
      'Remote monitoring and troubleshooting of global assets',
      'Faster training for operators through virtual simulations',
      'Predictive performance modeling for long-term planning'
    ],
    scope20Year: 'The future of digital twins lies in "Full Spectrum Reality" where the virtual and physical are indistinguishable, allowing for instantaneous teleportation of expert knowledge to any site.',
    advantages: [
      'High-fidelity rendering for industrial accuracy',
      'Bi-directional control capabilities',
      'Open-source API for custom integrations',
      'Low-latency data streaming protocol',
      'Unified view of complex multi-site operations'
    ],
    architecture: {
      description: 'High-fidelity synchronization engine using WebSockets and GraphQL for seamless bi-directional data flow between physical assets and virtual models.',
      stack: ['three.js', 'React Three Fiber', 'GraphQL', 'WebSockets', 'Elixir'],
      layers: [
        { name: 'CAD Sync', details: 'Automated geometric model mesh' },
        { name: 'Telemetry Engine', details: 'Sub-millisecond state updates' },
        { name: 'Simulation Lab', details: 'Physics-based predictive modeling' }
      ]
    },
    highlights: [
      'Double your operational visibility with virtual replicas.',
      'Design the perfect factory without moving a single bolt.',
      'Master complexity through high-fidelity spatial data.',
      'Iterate faster than ever in a safe digital sandbox.',
      'Connect the physical and digital worlds seamlessly.'
    ]
  },
  {
    id: 'robotics',
    title: 'Robotics Automation Systems',
    description: 'High-precision robotic arms and automated assembly lines for smart manufacturing.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    about: 'Our robotics systems specialize in collaborative and autonomous movement, enabling high-speed, high-precision tasks that were previously impossible for machines.',
    features: [
      '6-Axis high-speed movement controllers',
      'Soft-touch grippers for delicate component handling',
      'Integrated computer vision for pick-and-place',
      'Safety laser scanners for human-robot collaboration',
      'Low-code programming interface'
    ],
    benefits: [
      'Unmatched consistency in product quality',
      'Drastic reduction in labor costs for repetitive tasks',
      'Ability to operate 24/7 in hazardous environments',
      'High flexibility for modular assembly lines',
      'Precise material handling with zero wastage'
    ],
    scope20Year: 'Next-generation robotics will feature biological-inspired muscles and neural network self-programming, allowing robots to learn new tasks in minutes by simply observing humans.',
    advantages: [
      'Highest accuracy in the industry (±0.01mm)',
      'Energy-efficient servo-drive technology',
      'Modular design for easy part replacement',
      'Integrated IoT diagnostic sensors',
      'Plug-and-play compatibility with standard end-effectors'
    ],
    architecture: {
      description: 'Neural-feedback control loop architecture. Combines traditional high-precision motion controllers with computer vision for adaptive path planning.',
      stack: ['ROS2', 'C++', 'OpenCV', 'CUDA', 'EtherCAT'],
      layers: [
        { name: 'Motion Control', details: 'Sub-millisecond hardware loop' },
        { name: 'Vision System', details: 'AI-guided object recognition' },
        { name: 'Safety Layer', details: 'Redundant human-detection circuits' }
      ]
    },
    highlights: [
      'Accelerate your production line beyond human limits.',
      'Achieve perfection in every part with automated precision.',
      'Automate the impossible with intelligent robotic motion.',
      'Build a workforce that never tires and never fails.',
      'Pioneer the future of autonomous assembly today.'
    ]
  }
];
