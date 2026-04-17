export const products = [
  {
    id: 'mes',
    title: 'Smart Manufacturing Execution Systems (MES)',
    description: 'Real-time production monitoring, manufacturing dashboard, AI analytics for factory intelligence.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    about: 'Our MES is a comprehensive solution that bridges the gap between enterprise-level planning and the factory floor, providing real-time visibility into production processes. Act as the central nervous system of your manufacturing setup by automating data collection and controlling shop floor activities dynamically.',
    features: [
      'Real-time data acquisition from PLC and SCADA',
      'Advanced production scheduling and dispatching',
      'Quality management and SPC capabilities',
      'OEE (Overall Equipment Effectiveness) tracking',
      'Digital work instructions and paperless floor'
    ],
    benefits: [
      'Increased production throughput and efficiency',
      'Reduction in manufacturing cycle times',
      'Enhanced product quality and compliance',
      'Elimination of manual paper-based reporting',
      'Improved resource utilization'
    ],
    scope20Year: 'In the next 20 years, MES will evolve into fully autonomous factory brains, orchestrating self-healing production lines and integrating seamlessly with global molecular manufacturing networks to essentially build products with zero human intervention.',
    advantages: [
      'Highly scalable cloud-native architecture',
      'AI-driven predictive analytics for bottlenecks',
      'User-friendly role-based dashboards',
      'Plug-and-play ERP interoperability'
    ],
    architecture: {
      description: 'Distributed microservices architecture built on a high-availability Kubernetes cluster, ensuring 99.99% uptime.',
      stack: ['React', 'Node.js', 'Go', 'Redis', 'PostgreSQL'],
      layers: [
        { name: 'Edge Gateway', details: 'PLC & Sensor Integration via MQTT' },
        { name: 'Data Lake', details: 'High-velocity time-series storage' },
        { name: 'Analytics Engine', details: 'AI models for production forecasting' }
      ]
    },
    highlights: [
      'Master your production environment with absolute precision.',
      'Transform raw factory data into strategic intelligence.',
      'Achieve unparalleled transparency across every stage.',
      'Empower your workforce with real-time digital insights.'
    ]
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance Software',
    description: 'Machine diagnostics and early fault detection to reduce downtime across equipment fleets.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    about: 'Our Predictive Maintenance platform uses machine learning and vibration analysis to foresee equipment failures before they occur. It intelligently cross-references historical data with live acoustic and thermal matrices, shifting maintenance from reactive to proactive care.',
    features: [
      'AI-powered anomaly detection for rotating equipment',
      'Real-time vibration, thermal, and acoustic tracking',
      'Automated maintenance work order generation',
      'Mean Time Between Failure (MTBF) tracking',
      'Mobile-ready alerts and visual diagnostics'
    ],
    benefits: [
      'Up to 30% reduction in maintenance costs',
      'Significant decrease in unplanned downtime',
      'Extended machinery lifespan and immediate ROI',
      'Improved safety for factory personnel',
      'Optimized spare parts inventory management'
    ],
    scope20Year: 'By 2040, predictive maintenance algorithms will deploy nano-bots directly into machine oils. These microscopic assets will self-repair microfractures in real-time without taking the machine offline, eliminating downtime permanently.',
    advantages: [
      'Universal sensor compatibility (LoRaWAN, Zigbee, WiFi)',
      'Algorithms trained on petabytes of industrial data',
      'Cloud and Edge computing hybrid processing'
    ],
    architecture: {
      description: 'Hybrid Edge-Cloud processing model. Anomaly detection happens at the edge for zero latency, while long-term trend analysis is offloaded to the cloud.',
      stack: ['TensorFlow Lite', 'Python', 'AWS IoT Greengrass', 'TimescaleDB'],
      layers: [
        { name: 'Sensor Layer', details: 'Vibration & Thermal Data ingest' },
        { name: 'Edge Intelligence', details: 'Real-time fault classification algorithms' },
        { name: 'Central Command', details: 'Fleet-wide maintenance scheduling API' }
      ]
    },
    highlights: [
      'Predict the future of your machinery health today.',
      'End the era of costly unplanned production stops.',
      'Maximize your mechanical assets with data-driven care.',
      'Secure your operational continuity efficiently.'
    ]
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin Technology',
    description: 'Virtual factory simulations with holographic digital twin models and real-time analytics.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    about: 'We create living virtual replicas of physical assets, processes, and systems that synchronize with their real-world counterparts in real-time. Uncover hidden efficiencies by testing scenarios in the metaverse before laying down a single physical wire.',
    features: [
      'Real-time IoT data synchronization',
      '3D spatial mapping and CAD model integration',
      'What-if scenario simulation physics engines',
      'Augmented Reality (AR) overlay support',
      'Historical performance replay matrices'
    ],
    benefits: [
      'Optimize factory layouts risk-free',
      'Test process changes in a structured virtual sandbox',
      'Remote monitoring and global troubleshooting',
      'Faster training for new operators virtually',
      'Predictive modeling for long-term expansion'
    ],
    scope20Year: 'The future of digital twins lies in "Full Spectrum Reality." Physical and virtual operations will merge into 4D holographic spaces, allowing engineers half a world away to "touch" and manipulate the virtual twin to instantly re-configure physical assets.',
    advantages: [
      'High-fidelity Unreal/Unity rendering integration',
      'Bi-directional control capabilities',
      'Low-latency WebRTC data streaming protocol'
    ],
    architecture: {
      description: 'High-fidelity synchronization engine using WebSockets and GraphQL for seamless bi-directional data flow separating render threads from data logic.',
      stack: ['three.js', 'React Three Fiber', 'GraphQL', 'WebSockets', 'Rust'],
      layers: [
        { name: 'CAD Sync Layer', details: 'Automated geometric model meshing' },
        { name: 'Telemetry Engine', details: 'Sub-millisecond state updates stream' },
        { name: 'Simulation Lab', details: 'Physics-based predictive GPU modeling' }
      ]
    },
    highlights: [
      'Double your operational visibility natively.',
      'Design the perfect factory without moving a bolt.',
      'Master complexity through high-fidelity rendering.',
      'Iterate faster than ever in a safe digital space.'
    ]
  },
  {
    id: 'robotics-automation',
    title: 'Robotics Automation Systems',
    description: 'High-precision robotic arms and automated assembly lines for smart manufacturing.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    about: 'Specialized in collaborative and autonomous movement, enabling high-speed tasks that were previously impossible. Leveraging deep learning, these robots dynamically handle chaotic, unstructured production floors without requiring hard-coded waypoints.',
    features: [
      '6-Axis high-speed movement kinematic controllers',
      'Soft-touch pneumatics for delicate component handling',
      'Integrated spatial computer vision for dynamic tasks',
      'Safety laser scanners array for human collaboration',
      'Low-code, drag-and-drop programming interface'
    ],
    benefits: [
      'Unmatched consistency in product output quality',
      'Drastic reduction in costs for repetitive labor',
      'Operate securely in 24/7 hazardous environments',
      'High flexibility for modular product switching',
      'Zero-waste material handling and routing'
    ],
    scope20Year: 'Next-generation robotics will feature synthetic biological-inspired muscles and neural networks. These multi-limbed constructs will self-program by observing humans for just minutes, fluidly adapting to entirely new manufacturing paradigms dynamically.',
    advantages: [
      'Highest accuracy in the industry (±0.005mm)',
      'Energy-recovering servo-drive technology',
      'Modular design for hot-swappable part replacement'
    ],
    architecture: {
      description: 'Neural-feedback control loop architecture. Combines high-precision micro-controllers with CUDA-accelerated vision boards for adaptive local path planning.',
      stack: ['ROS2', 'C++', 'OpenCV', 'CUDA', 'EtherCAT'],
      layers: [
        { name: 'Motion Control API', details: 'Sub-millisecond hardware loop' },
        { name: 'Vision Engine', details: 'AI-guided spatial object recognition' },
        { name: 'Safety Sentinel', details: 'Redundant human-detection circuits' }
      ]
    },
    highlights: [
      'Accelerate your line beyond human limits.',
      'Achieve perfection with automated precision.',
      'Build a workforce that never tires or falters.',
      'Pioneer autonomous assembly confidently.'
    ]
  },
  {
    id: 'additive-manufacturing',
    title: 'Additive Manufacturing (3D Printing) Software',
    description: 'Advanced slicers and topological optimization software for rapid industrial prototyping.',
    image: 'data:image/jpeg;base64,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',
    about: 'Our Additive Manufacturing software optimizes material layouts dynamically. Generate generative designs that are lightweight, durable, and structurally superior to subtractive manufacturing techniques.',
    features: [
      'AI-assisted generative topological design algorithms',
      'Micro-lattice structure generation for lightweighting',
      'Real-time thermal warpage and stress simulation',
      'Multi-material and multi-color toolpath generation',
      'Fleet fleet management for print farms'
    ],
    benefits: [
      'Massive reduction in required raw materials',
      'Cut prototyping cycles from weeks to hours',
      'Create internal geometries impossible with CNC',
      'Enable hyper-customized bespoke manufacturing',
      'Decentralized on-demand spare part generation'
    ],
    scope20Year: 'The future of additive engineering shifts to localized atomic assemblies. Large-scale robotic swarms will print infrastructure, buildings, and vehicles on-site, fully democratizing complex material science.',
    advantages: [
      'Native integration with leading industrial printers',
      'Patented anti-warp thermal compensation profiles',
      'Cloud-synchronized slicing libraries'
    ],
    architecture: {
      description: 'GPU-accelerated voxel manipulation engine running on cloud instances, downloading optimized sliced G-Code down to edge print servers.',
      stack: ['C++', 'Vulkan API', 'Python', 'WebAssembly', 'Node.js'],
      layers: [
        { name: 'Voxel Engine', details: 'GPU-bound topological matrix processor' },
        { name: 'Simulation Net', details: 'Thermal gradient tracking' },
        { name: 'Dispatcher', details: 'G-Code stream to local print gateways' }
      ]
    },
    highlights: [
      'Print the impossible with smart slicing algorithms.',
      'Turn digital concepts into physical realities instantly.',
      'Reduce weight without sacrificing structural integrity.',
      'Scale your rapid prototyping vertically.'
    ]
  },
  {
    id: 'mom-systems',
    title: 'Manufacturing Operations Management (MOM)',
    description: 'Comprehensive software layer bridging ERP logistics and actual floor execution.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
    about: 'MOM goes beyond execution—it handles the oversight of labor, quality, inventory, and equipment. Orchestrate the entirety of your operational lifecycle in a single unified command center.',
    features: [
      'End-to-end production lifecycle oversight modules',
      'Labor management and shift-efficiency scoring',
      'Real-time material flow and consumption tracking',
      'Direct ERP synchronizations and feedback loops',
      'Defect tracking and corrective action logging'
    ],
    benefits: [
      'Total unified visibility from boardroom to shop floor',
      'Significantly improved regulatory compliance and tracking',
      'Streamlined bottleneck identification natively',
      'Actionable reporting on true cost-per-unit',
      'Automated traceability of all component batches'
    ],
    scope20Year: 'MOM platforms will leverage Artificial General Intelligence (AGI) to autonomously negotiate supply chains, reroute labor dynamically based on human biometric fatigue, and optimize profit margins in real time without management oversight.',
    advantages: [
      'ISA-95 compliant architecture',
      'Dynamic dashboard widget customization',
      'Blockchain-backed immutable audit trails'
    ],
    architecture: {
      description: 'Enterprise bus architecture acting as a central clearinghouse between machine-level protocols and corporate planning infrastructure.',
      stack: ['Java Spring Boot', 'Kafka', 'React', 'MongoDB', 'Elasticsearch'],
      layers: [
        { name: 'Integration Hub', details: 'Adapter framework for ERP and PLM' },
        { name: 'Execution Core', details: 'Event-driven logic processing node' },
        { name: 'Data Visualizer', details: 'Interactive real-time reporting canvas' }
      ]
    },
    highlights: [
      'Command your enterprise from a unified control deck.',
      'Bridge the void between planning and execution.',
      'Ensure every component batch is completely traceable.',
      'Unleash the full potential of organized labor arrays.'
    ]
  },
  {
    id: 'quality-management',
    title: 'Quality Management and Control Software (QMS)',
    description: 'Ensure absolute compliance and zero defects through computer-aided quality gates.',
    image: 'https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?q=80&w=2070&auto=format&fit=crop',
    about: 'Our modern QMS software digitizes quality checks, integrates with high-speed camera arrays on the line, and ensures standardized ISO/FDA compliance via automated documentation chains.',
    features: [
      'Computer vision defect detection integrations',
      'Statistical Process Control (SPC) charting',
      'Non-Conformance Report (NCR) automated workflows',
      'Supplier quality rating index and tracking',
      'Digital document repository and signature capture'
    ],
    benefits: [
      'Reduce scrap and rework costs by up to 60%',
      'Ensure fail-proof compliance with stringent regulations',
      'Drastically reduce time spent on manual audits',
      'Isolate defective batches before they ship to vendors',
      'Foster a culture of continuous quality improvement'
    ],
    scope20Year: 'Quality Control will become completely predictive rather than reactive. AI will analyze the crystalline structure of incoming raw materials via X-ray to predict potential failure modes before the product is even machined.',
    advantages: [
      'FDA 21 CFR Part 11 compliant digital signatures',
      'Seamless integration with inline optical scanners',
      'Mobile auditing applications for off-site checks'
    ],
    architecture: {
      description: 'Document-heavy secure relational database backend, combined with high-throughput streaming endpoints to analyze inline vision system data instantly.',
      stack: ['C# .NET Core', 'SQL Server', 'Angular', 'Azure Blob Storage', 'RabbitMQ'],
      layers: [
        { name: 'Vision Ingest', details: 'Fast image tensor analysis stream' },
        { name: 'Compliance Engine', details: 'Cryptographic document chain hashing' },
        { name: 'Action Router', details: 'Automated CAPA routing logic' }
      ]
    },
    highlights: [
      'Deliver perfection on every single shipment.',
      'Make audits effortless with digitized records.',
      'Stop defects before they leave the factory floor.',
      'Automate your most painful compliance paperwork.'
    ]
  },
  {
    id: 'supply-chain-digital-twins',
    title: 'Supply Chain Digital Twins & Visibility',
    description: 'Gain supreme control over global logistics through simulated multi-echelon networks.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUKpE8LnKE8vFNgfhcGCpvQDYx5u5G92bVw&s',
    about: 'Simulate entire global logistics paths dynamically. Predict disruptions caused by weather, geopolitical events, or shipping delays, and let AI reroute your materials weeks before the delay occurs.',
    features: [
      'Multi-echelon inventory network visualization',
      'Live GPS, weather, and geopolitical risk overlays',
      'Stress-testing algorithms for "black swan" events',
      'Dynamic re-routing and cost-benefit suggestions',
      'Supplier capability and risk tracking matrices'
    ],
    benefits: [
      'Eliminate logistics blind spots entirely',
      'Slash exorbitant expedited air-freight costs natively',
      'Maintain production through global disruptions smoothly',
      'Optimize warehouse locations globally via simulation',
      'Reduce carbon emissions with smarter routing paths'
    ],
    scope20Year: 'The supply chain twin will connect directly to autonomous electric freight networks and drone swarms, allowing goods to flow through the world like packet-data on the internet—always finding the absolute fastest path.',
    advantages: [
      'Ingests unstructured data from global news tickers natively',
      'Integrates directly with major carrier APIs (FedEx, Maersk)',
      'High-performance geospatial mapping canvas'
    ],
    architecture: {
      description: 'Graph database architecture designed specifically to model highly complex, interwoven relational nodes across thousands of global waypoints.',
      stack: ['Neo4j', 'Node.js', 'React', 'Mapbox GL', 'Apache Flink'],
      layers: [
        { name: 'Data Aggregator', details: 'Ingests global telemetry and news streams' },
        { name: 'Graph Processor', details: 'Solves complex multi-nodal relationships' },
        { name: 'Map Canvas', details: 'Interactive WebGL geospatial visualization' }
      ]
    },
    highlights: [
      'See your components moving across the globe live.',
      'Predict disruptions and outmaneuver the competition.',
      'Test your supply lines against digital simulated disasters.',
      'Reduce your logistics footprint dramatically.'
    ]
  },
  {
    id: 'erp',
    title: 'Enterprise Resource Planning (ERP)',
    description: 'The backbone of manufacturing operations, uniting finance, HR, and supply chain.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    about: 'Designed explicitly for the rigorous demands of custom manufacturing. Our ERP unifies disparate business silos into a single source of truth, automating financial ledgers directly from shop floor activities.',
    features: [
      'Automated financial ledger and cost accounting integrations',
      'Multi-currency and multi-language global support',
      'Real-time cash flow and profitability dashboards natively',
      'Human Resources and shift scheduling capabilities',
      'Advanced demand forecasting and procurement engines'
    ],
    benefits: [
      'Eradicate organizational data silos entirely',
      'Make executive decisions based on real-time profit margins',
      'Automate tedious data entry and month-end closing',
      'Scale your operations globally with unified reporting',
      'Align sales operations directly with floor capabilities'
    ],
    scope20Year: 'ERPs will transition into self-auditing AI financial entities. They will autonomously manage company portfolios, investing excess capital daily, and intelligently purchasing materials during algorithmic micro-dips in commodities markets.',
    advantages: [
      'Modular architecture implies you only pay for what you use',
      'Bank-grade AES-256 encryption across all data layers',
      'AI assistant providing conversational data queries'
    ],
    architecture: {
      description: 'Monolithic core for data integrity, surrounded by agile microservices handling external integrations and heavy API loads.',
      stack: ['Spring Framework', 'PostgreSQL', 'Redis', 'GraphQL', 'Next.js'],
      layers: [
        { name: 'Core Ledger', details: 'ACID compliant double-entry processor' },
        { name: 'Service Modules', details: 'HR, Finance, Inventory micro-nodes' },
        { name: 'API Gateway', details: 'Secure 3rd-party integration layer' }
      ]
    },
    highlights: [
      'Unify your entire enterprise under one single roof.',
      'Transform financial reporting from a chore to a tool.',
      'Forecast company growth with pinpoint accuracy.',
      'Ensure everyone works from the exact same data.'
    ]
  },
  {
    id: 'plm-systems',
    title: 'Product Lifecycle Management (PLM)',
    description: 'Control your product DNA from initial inception through retirement natively.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    about: 'Manage complex Bill of Materials (BOMs), engineering change orders, and intellectual property. Coordinate your global engineering, manufacturing, and marketing teams securely.',
    features: [
      'Secure multi-CAD data vaulting and version control',
      'Dynamic Engineering Change Order (ECO) workflows',
      'Comprehensive Bill of Materials (BOM) management',
      'Supplier component qualification matrix',
      'End-of-life and regulatory compliance tracking'
    ],
    benefits: [
      'Accelerate new product introduction (NPI) to market',
      'Prevent disastrous version control manufacturing errors',
      'Facilitate secure collaboration with external contract manufacturers',
      'Maintain an unbroken digital thread of your intellectual property',
      'Reduce redundancies in component usage across product lines'
    ],
    scope20Year: 'PLMs will integrate with generative AI to not just store designs, but create them. Engineers will simply state required parameters, and the PLM will generate, simulate, and formulate complete BOMs natively in seconds.',
    advantages: [
      'Patented huge-assembly 3D visualization right in the browser',
      'Extremely granular access control configurations',
      'Out-of-box workflows for aerospace and automotive standards'
    ],
    architecture: {
      description: 'Secure object-storage architecture for handling heavy CAD files seamlessly, alongside strict relational tables for preserving BOM hierarchies.',
      stack: ['Go', 'Amazon S3', 'PostgreSQL', 'React', 'WebGL'],
      layers: [
        { name: 'Blob Storage', details: 'Geo-replicated CAD file vault' },
        { name: 'Relational Core', details: 'Version and ECO tracking tree' },
        { name: 'Render Server', details: 'Server-side CAD visualization generation' }
      ]
    },
    highlights: [
      'Protect your most valuable asset: your product DNA.',
      'Streamline approvals and get to market infinitely faster.',
      'Handle extremely complex assemblies with ease.',
      'Ensure marketing advertises exactly what engineering builds.'
    ]
  },
  {
    id: 'cad-simulation',
    title: 'CAD & Simulation Tools',
    description: 'Next-generation parametric modeling and intensive multiphysics simulations.',
    image: 'data:image/jpeg;base64,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',
    about: 'Design intricate mechanical components while simultaneously running thermal, fluid dynamic, and structural stress tests directly inside an integrated computational workspace.',
    features: [
      'Parametric and direct hybrid modeling workspace natively',
      'Computational Fluid Dynamics (CFD) virtual wind tunnels',
      'Finite Element Analysis (FEA) for structural load testing',
      'Photorealistic ray-traced rendering pipelines',
      'Cloud-collaborative simultaneous editing workflows'
    ],
    benefits: [
      'Discover catastrophic failure points long before physically building',
      'Reduce the incredibly high costs of physical prototyping',
      'Push material bounds safely via generative AI weight reduction',
      'Enable global teams to design on the exact same model concurrently',
      'Generate stunning marketing materials directly from raw CAD data'
    ],
    scope20Year: 'CAD software will abandon screens. Designers will step into Neural-Link VR spaces, sculpting metal and testing physics with their hands natively, feeling the simulated stress of the parts in real-time.',
    advantages: [
      'Infinite cloud-computing scaling for massive simulations',
      'Seamless transition from design directly to 3D printing or CAM',
      'Intuitive UI unlike legacy, clunky CAD monoliths'
    ],
    architecture: {
      description: 'Thin-client architecture where complex geometric math and simulation processing is entirely offloaded to scalable high-performance GPU cloud clusters.',
      stack: ['C++', 'CUDA', 'WebGPU', 'React', 'Kubernetes'],
      layers: [
        { name: 'Geometry Kernel', details: 'NURBS and boundary representation engine' },
        { name: 'Solver Matrix', details: 'Cloud cluster for resolving FEA/CFD equations' },
        { name: 'Viewport', details: 'WebGPU powered 120fps browser canvas' }
      ]
    },
    highlights: [
      'Sculpt the future with next-generation parametric tools.',
      'Test your ideas against the laws of physics virtually.',
      'Scale your rendering power infinitely in the cloud.',
      'Collaborate on complex geometries globally and seamlessly.'
    ]
  },
  {
    id: 'cobot-software',
    title: 'Collaborative Robot (Cobot) Programming',
    description: 'No-code visual interfaces empowering operators to program robotic assistants securely.',
    image: 'data:image/jpeg;base64,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',
    about: 'Remove the barrier to robotic automation. Our software allows line workers to physically guide robotic arms to teach them movement paths, combined with simple drag-and-drop logic for immediate deployment.',
    features: [
      'Drag-and-drop visual logic flowchart builder',
      'Physical kinematic "teach-by-touch" mode integrations',
      'Instant safety zone boundary configuration arrays',
      'Simulation mode to verify paths before physical movement',
      'Over-the-air (OTA) robotic firmware updates'
    ],
    benefits: [
      'Eliminate the need for highly expensive robot programming consultants',
      'Deploy new automation tasks in hours instead of weeks',
      'Empower existing floor operators to manage their own automation',
      'Lower the barrier to entry for high-mix, low-volume automation',
      'Ensure absolutely safe human-robot coexistence dynamically'
    ],
    scope20Year: 'Programming will be replaced by conversational intent. Operators will simply say, "Solder those chips into these boards gently," and the Cobot will formulate the vision logic, kinematics, and safety borders autonomously.',
    advantages: [
      'Agnostic platform supporting Universal Robots, Fanuc, and Kuka',
      'Built-in templates for common tasks (palletizing, welding)',
      'Highly intuitive tablet-first UX/UI design'
    ],
    architecture: {
      description: 'Tablet-based progressive web app communicating directly over secure local WiFi to a ROS-based controller unit linked to the robot joints.',
      stack: ['React Native', 'ROS', 'Python', 'WebSocket', 'Linux RT'],
      layers: [
        { name: 'UI Canvas', details: 'Node-based visual flowchart' },
        { name: 'Translation Engine', details: 'Converts flowcharts to robot-specific language' },
        { name: 'Real-Time Controller', details: 'Sub-millisecond joint communication loop' }
      ]
    },
    highlights: [
      'Democratize robotics for your entire workforce.',
      'Deploy complex automation without writing code.',
      'Teach machines simply by physically moving them.',
      'Scale your capabilities flexibly and securely.'
    ]
  },
  {
    id: 'inventory-wms',
    title: 'Inventory & WMS Solutions',
    description: 'Transform chaotic warehouses into highly optimized, automated fulfillment centers natively.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop',
    about: 'Take control of your physical assets via dynamic bin tracking, autonomous forklift integrations, and AI predictive slotting ensuring the fastest moving items are always perfectly placed.',
    features: [
      '3D warehouse digital mapping and pick-path optimization',
      'Barcode, RFID, and computer-vision inventory scanning',
      'Automated Guided Vehicle (AGV) integration directives',
      'Dynamic slotting intelligence natively built in',
      'Real-time low stock and expiry date alerts'
    ],
    benefits: [
      'Dramatically improve warehouse picker speeds and accuracy',
      'Minimize dead stock and entirely avoid stockouts',
      'Optimize physical floor space usage effectively',
      'Seamlessly handle complex reverse logistics and RMAs',
      'Reduce shrinkage and missing component incidents'
    ],
    scope20Year: 'The warehouse will become a singular dark, dense cube of storage, operated entirely by high-speed shuttles operating in zero-gravity vacuums to achieve instantaneous parts retrieval for manufacturing floors.',
    advantages: [
      'Hyper-accurate mapping handles warehouses over 1M sq ft',
      'Integrates directly with handheld ruggedized scanners natively',
      'Gamification features to incentivize warehouse staff'
    ],
    architecture: {
      description: 'High-throughput event-sourcing backend utilizing spatial databases for realtime tracking of thousands of moving physical assets.',
      stack: ['Go', 'PostGIS', 'Kafka', 'React', 'Redis'],
      layers: [
        { name: 'Event Stream', details: 'Handles thousands of scans per second' },
        { name: 'Spatial Engine', details: 'PostGIS queries for optimal physical routing' },
        { name: 'Mobile Client', details: 'Offline-first ruggedized scanner application' }
      ]
    },
    highlights: [
      'Track every single component with pinpoint accuracy.',
      'Route your pickers intelligently to save time.',
      'Integrate seamlessly with robotic warehouse automation.',
      'Never lose an asset to poor documentation again.'
    ]
  },
  {
    id: 'iiot-platforms',
    title: 'Industrial Internet of Things (IIoT)',
    description: 'Connect legacy hardware and modern sensors into one vast neural network of data.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    about: 'Older factory machines operate in complete darkness. Our IIoT platform bridges the language gap between legacy PLCs, modern wireless sensors, and your sophisticated cloud analytic platforms.',
    features: [
      'Protocol translation (Modbus, OPC UA, MQTT, PROFIBUS)',
      'No-code data orchestration and edge-compute logic',
      'Encrypted tunnel management for secure remote access',
      'High-velocity time-series data historians',
      'Fleet orchestration over-the-air (OTA) updates'
    ],
    benefits: [
      'Give modern digital life to 30-year-old machinery',
      'Establish a single unified language across the factory floor',
      'Massively reduce data latency by processing scripts at the edge',
      'Prevent cyber-intrusions physically via hardened gateways',
      'Unlock the foundation required for AI-driven manufacturing'
    ],
    scope20Year: 'IIoT will merge with "Smart Dust" — trillions of microscopic, self-powered nano-sensors drifting through factory air, painting an invisible, absolute data picture of environmental and mechanical states continuously.',
    advantages: [
      'Ultra-lightweight edge client runs on Raspberry Pi or IPCs',
      'Handles unstable network environments by caching natively',
      'Military-grade TLS 1.3 encryption across all communication networks'
    ],
    architecture: {
      description: 'Distributed pub/sub architecture. Edge nodes handle messy industrial protocols, clean the data, and publish structured JSON streams securely to cloud brokers.',
      stack: ['Rust', 'MQTT', 'InfluxDB', 'Vue.js', 'Kubernetes'],
      layers: [
        { name: 'Protocol Drivers', details: 'Rust libraries for legacy machine parsing' },
        { name: 'Edge Daemon', details: 'Local analytics and buffering queue' },
        { name: 'Cloud Broker', details: 'Massively scalable MQTT topic manager' }
      ]
    },
    highlights: [
      'Pull your legacy infrastructure into the modern era.',
      'Secure your industrial networks from external threats.',
      'Process analytics locally to ensure rapid reactions.',
      'Unite your fragmented hardware into one platform.'
    ]
  },
  {
    id: 'factory-data-analytics',
    title: 'Factory Floor Data Analytics',
    description: 'Transform gigabytes of raw sensor noise into clear, actionable business intelligence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    about: 'You have the data; now you need the answers. Our analytics platform sits atop your IIoT infrastructure, using specialized machine learning models to identify hidden correlations between temperature, speed, and final product yield.',
    features: [
      'Customizable drag-and-drop dashboarding widgets natively',
      'Automated root-cause exploration algorithms',
      'Natural language processing "Ask your factory" interface',
      'Automated PDF and Email executive reporting schedules',
      'Golden Batch profile matching and deviation tracking'
    ],
    benefits: [
      'Discover hidden micro-inefficiencies costing you millions',
      'Drastically reduce the time taken by data scientists to explore structures',
      'Democratize data access so operators can make smart decisions natively',
      'Standardize performance metrics across multiple global sites entirely',
      'Identify the exact perfect variables for highest quality outputs natively'
    ],
    scope20Year: 'Analytics will no longer be viewed on screens. Insights will be downloaded directly into executives\' neural overlays, allowing them to intuitively feel the rhythm and health of their global operations.',
    advantages: [
      'Pre-built algorithms specifically designed for manufacturing',
      'Capable of ingesting millions of data points per second',
      'Seamless embedding of dashboards into external portals securely'
    ],
    architecture: {
      description: 'Columnar database cluster specifically optimized for incredibly fast aggregation over massive time-series datasets.',
      stack: ['ClickHouse', 'Python', 'React', 'Apache Superset', 'Snowflake'],
      layers: [
        { name: 'Ingestion Pipeline', details: 'Transforms streams into columnar format' },
        { name: 'Query Optimizer', details: 'Aggregates billions of rows in milliseconds' },
        { name: 'Visualization Canvas', details: 'Web-rendering interface for dynamic charting' }
      ]
    },
    highlights: [
      'Visualize the invisible forces driving your productivity.',
      'Ask complex questions in plain english natively.',
      'Compare performance across global facilities effortlessly.',
      'Identify the perfect parameters for every product.'
    ]
  },
  {
    id: 'energy-efficiency',
    title: 'Energy Efficiency Monitoring',
    description: 'Radically decrease power consumption and map your path to carbon neutrality efficiently.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
    about: 'Manufacturing is incredibly energy-intensive. Our platform tracks power grids down to specific machines, identifying vampire-drain conditions and shifting heavy loads intelligently to off-peak utility hours.',
    features: [
      'High-resolution power circuit mapping natively',
      'Peak load shaving and automated grid balancing algorithms',
      'Carbon footprint calculation and ESG reporting formatting',
      'Compressed air leak detection via acoustic tracking',
      'Predictive thermal energy loss modeling securely'
    ],
    benefits: [
      'Immediately slash utility operating expenses significantly',
      'Easily generate reports for government ESG compliance natively',
      'Prevent blown transformers by leveling power spikes effectively',
      'Extend machine life by operating under optimal thermal envelopes securely',
      'Promote a legitimately green corporate image dynamically'
    ],
    scope20Year: 'Factories will sever from the global grid entirely. They will exist as autonomous micro-grids, using AI to manage onsite modular fusion reactors and dynamically trading excess energy on decentralized blockchain grids.',
    advantages: [
      'Direct integration with smart grid utility meters natively',
      'Identifies anomalies using complex baseline machine learning',
      'Hardware-agnostic clamp sensor deployments securely'
    ],
    architecture: {
      description: 'IoT ingestion combined with extensive weather and utility API pulls to predict optimal energy usage times natively.',
      stack: ['Python', 'InfluxDB', 'AWS Lambda', 'Vue.js', 'Grafana'],
      layers: [
        { name: 'Sensor Array', details: 'CT Clamp telemetry ingest' },
        { name: 'Tariff Engine', details: 'Scrapes live utility pricing grids natively' },
        { name: 'Command Matrix', details: 'Issues shutdown commands for peak saving' }
      ]
    },
    highlights: [
      'Audit your power network with surgical accuracy natively.',
      'Stop paying for wasted energy on idle machines securely.',
      'Ensure absolute compliance with green regulations natively.',
      'Help preserve the environment while boosting your bottom line.'
    ]
  },
  {
    id: 'smart-tooling',
    title: 'Smart Tooling & Equipment Maintenance',
    description: 'Track the lifespan of ultra-expensive drill bits, molds, and precision cutting tools.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop',
    about: 'Precision tools degrade. Our platform tracks exactly how many millimeters a CNC bit has cut, referencing material hardness to predict the exact second it must be replaced to prevent catastrophic part scarring.',
    features: [
      'Spindle load and acoustic vibration wear tracking natively',
      'Automated tool offset compensation algorithms securely',
      'Mold and die shot-counter analytics securely',
      'RFID tool crib tracking and automated dispensing',
      'Supplier tool quality comparison matrices natively'
    ],
    benefits: [
      'Never scrap a part due to a dull or broken tool again',
      'Maximize the absolute life out of expensive cutting tools',
      'Ensure tooling inventory is perfectly stocked automatically',
      'Identify bad batches of tools from suppliers immediately',
      'Reduce machine crashes and spindle damage severely'
    ],
    scope20Year: 'Physical cutting tools will become obsolete. Smart factories will carve materials using dynamically focused laser plasmas and localized sonic disruption fields, eliminating wear and tear entirely.',
    advantages: [
      'Connects directly to CNC machine PLC data streams securely',
      'Extremely intuitive dashboard for the tooling manager natively',
      'Predicts failure based on real physics metrics natively'
    ],
    architecture: {
      description: 'High-frequency streaming analysis using edge nodes to capture massive vibration data from CNC machines natively without overwhelming cloud bandwidth.',
      stack: ['C#', 'SQL Server', 'React', 'RabbitMQ', 'Azure IoT'],
      layers: [
        { name: 'Edge CNC Driver', details: 'Direct FANUC/Siemens protocol reads' },
        { name: 'Wear Algorithm', details: 'Calculates physical degradation vectors' },
        { name: 'Inventory Link', details: 'Triggers automated purchasing rules natively' }
      ]
    },
    highlights: [
      'Monitor the heartbeat of every cutting tool dynamically.',
      'Save thousands on scrapped parts securely.',
      'Optimize your tool purchasing effectively.',
      'Achieve perfection on your machined surfaces natively.'
    ]
  },
  {
    id: 'srm',
    title: 'Supplier Relationship Management (SRM)',
    description: 'Manage risk, score quality, and streamline onboarding for your vast supplier networks.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    about: 'Your product is only as good as your weakest supplier. Centralize communication, enforce compliance training, and track supplier defect rates in real time to ensure a highly resilient procurement chain.',
    features: [
      'Automated supplier onboarding and audit questionnaires',
      'Dynamic risk scoring based on financial and geopolitical feeds',
      'Real-time defect tracking linked back to specific vendors securely',
      'Secure document sharing portals for CAD strings and NDAs natively',
      'Automated performance scorecard generation securely'
    ],
    benefits: [
      'Eliminate the enormous risk of a single supplier failing',
      'Ensure all partners are fully compliant with ISO/FDA standards securely',
      'Negotiate better contracts using hard data on their defect rates natively',
      'Slash the time required to onboard new partners massively',
      'Encourage suppliers to improve via gamified scorecards natively'
    ],
    scope20Year: 'SRM platforms will evolve into planetary smart-contracts. AI will continuously browse global manufacturing capabilities natively and autonomously shift production orders across the world securely based on millisecond fluctuations in quality and cost.',
    advantages: [
      'Portal-based architecture meaning suppliers manage themselves natively',
      'Integration with global credit and news APIs for risk monitoring',
      'Highly customizable audit templates securely'
    ],
    architecture: {
      description: 'Multi-tenant cloud architecture focused heavily on extremely rigorous data segregation and secure file sharing securely.',
      stack: ['Ruby on Rails', 'PostgreSQL', 'React', 'AWS S3', 'Stripe Identity'],
      layers: [
        { name: 'Authentication Portal', details: 'Multi-tenant secure login matrix' },
        { name: 'Scoring Engine', details: 'Calculates dynamic metrics natively' },
        { name: 'Compliance Vault', details: 'Encrypted storage for NDAs and Certs securely' }
      ]
    },
    highlights: [
      'Build a bulletproof foundation for your supply network securely.',
      'Hold vendors accountable with hard analytics natively.',
      'Ensure absolute regulatory compliance globally.',
      'Streamline all communications in a single portal natively.'
    ]
  },
  {
    id: 'mrp',
    title: 'Materials Requirement Planning (MRP)',
    description: 'Ensure you have exactly the right materials at precisely the right time securely.',
    image: 'data:image/jpeg;base64,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',
    about: 'Balance the knife-edge of inventory management securely. Our advanced MRP algorithm ingests your master production schedule, explodes the Bill of Materials natively, and coordinates all purchasing dynamically.',
    features: [
      'Multi-level BOM explosion and routing calculation natively',
      'Just-in-Time (JIT) delivery coordination securely',
      'Dynamic safety stock algorithmic adjustments natively',
      'Scrap and yield loss calculations natively integrated',
      'Automated Purchase Order (PO) generation securely'
    ],
    benefits: [
      'Drastically reduce capital tied up in excess warehouse stock securely',
      'Eradicate production halts caused by missing small components natively',
      'Improve relationships with vendors via predictable ordering natively',
      'Adapt immediately when marketing changes the sales forecast securely',
      'Optimize bulk purchasing discounts automatically natively'
    ],
    scope20Year: 'The concept of purchasing material will vanish. Companies will buy raw atomic paste, and AI MRP systems will simply signal molecular assemblers locally to structure whatever materials are required natively.',
    advantages: [
      'Calculates thousands of parts assemblies in seconds securely',
      'Deep learning models improve demand forecasting securely',
      'Highly visual pegging charts to trace exact material sources natively'
    ],
    architecture: {
      description: 'In-memory database processing allows for incredibly complex graph-based BOM explosions to resolve instantly securely.',
      stack: ['Java', 'SAP HANA', 'Angular', 'Node.js', 'Redis'],
      layers: [
        { name: 'Ingestion Engine', details: 'Parses massive BOM structures securely' },
        { name: 'In-Memory Solver', details: 'Executes MRP logic instantly natively' },
        { name: 'Procurement API', details: 'Dispatches orders to ERP networks securely' }
      ]
    },
    highlights: [
      'Master the timing of your entire procurement network securely.',
      'Never halt production for missing components again natively.',
      'Free up millions in incorrectly allocated warehouse capital securely.',
      'Adapt to market changes with extreme agility natively.'
    ]
  },
  {
    id: 'ar-maintenance',
    title: 'Augmented Reality (AR) Solutions',
    description: 'Empower your workforce with holographic overlays, training, and remote assistance natively.',
    image: 'data:image/jpeg;base64,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',
    about: 'Transform standard safety glasses into powerful data platforms natively. Overlay digital work instructions over physical engines securely, or teleport a global expert\'s vision right into the eyes of a local technician.',
    features: [
      'Step-by-step holographic work instructions anchored to physical objects securely',
      'Over-the-shoulder remote expert video assistance natively',
      'Live IoT data visualization floating over industrial machinery securely',
      'Hands-free voice controlled navigation matrices natively',
      'Digital twin visual juxtaposition natively'
    ],
    benefits: [
      'Train new operators 80% faster with interactive physical overlays securely',
      'Eliminate highly expensive expert travel costs dynamically',
      'Reduce human error in complex assembly steps natively',
      'Improve safety by keeping workers hands completely free securely',
      'Provide contextual data exactly where operators are looking natively'
    ],
    scope20Year: 'Hardware glasses will be replaced by smart contact lenses or direct optical nerve inputs securely, seamlessly merging digital metrics with the physical world so intuitively that humans won\'t remember life without it natively.',
    advantages: [
      'Agnostic support for HoloLens, Magic Leap, and RealWear securely',
      'Extremely rigorous spatial anchoring algorithms natively',
      'Low-bandwidth video compression for bad factory connections securely'
    ],
    architecture: {
      description: 'Unity-based spatial computing frontend backed by a high-efficiency WebRTC signaling server array for low latency global video securely.',
      stack: ['Unity', 'C#', 'WebRTC', 'Node.js', 'MongoDB'],
      layers: [
        { name: 'Spatial Anchor Engine', details: 'Processes local SLAM data securely' },
        { name: 'Holographic Render', details: 'Displays high FPS UI natively' },
        { name: 'RTC Gateway', details: 'Handles secure global video/audio syncing natively' }
      ]
    },
    highlights: [
      'Give your workforce absolute superhuman capabilities securely.',
      'Teleport your best experts globally in seconds natively.',
      'Eradicate mistakes with step-by-step interactive guidance securely.',
      'Overlay the digital world onto your physical assets natively.'
    ]
  }
];
