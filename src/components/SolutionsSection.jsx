
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, BrainCircuit, Puzzle, BarChart, X as CloseIcon } from 'lucide-react';

const solutions = [
  {
    id: 1,
    icon: <Zap className="w-10 h-10" />,
    title: "Process Automation",
    subtitle: "Streamline Processes, Maximize Efficiency",
    description: "Empower your teams by automating repetitive, time-consuming tasks. We build scalable workflows that reduce errors and save time.",
    capabilities: ["RPA Platforms: UiPath, Blue Prism", "Low-Code Workflows: Power Automate", "Legacy Integration: VBA, Bonita BPM"],
    color: "from-blue-500 to-blue-700",
    image: "https://images.unsplash.com/photo-1611095973763-414afb939390?q=80&w=800"
  },
  {
    id: 2,
    icon: <BrainCircuit className="w-10 h-10" />,
    title: "Hyperautomation",
    subtitle: "Scale Faster with AI-Driven Workflows",
    description: "Go beyond traditional automation by integrating AI, ML, and intelligent data pipelines for faster, smarter, and more responsive operations.",
    capabilities: ["ML Frameworks: TensorFlow, XGBoost", "Generative AI Tools: ChatGPT, Azure AI", "Orchestration: Apache Airflow"],
    color: "from-purple-500 to-purple-700",
    image: "https://images.unsplash.com/photo-1620712943543-290d24270b8f?q=80&w=800"
  },
  {
    id: 3,
    icon: <Puzzle className="w-10 h-10" />,
    title: "Custom Solutions",
    subtitle: "Tailored Tech for Unique Business Needs",
    description: "We design and develop custom digital solutions that align perfectly with your operations, goals, and existing tech stack.",
    capabilities: ["Custom App Development: Power Apps", "API Strategy & Integration: MuleSoft", "Data Unification: Microsoft Dataverse"],
    color: "from-teal-500 to-teal-700",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800"
  },
  {
    id: 4,
    icon: <BarChart className="w-10 h-10" />,
    title: "Operational Efficiency",
    subtitle: "Optimize Systems for Sustainable Growth",
    description: "Modernize your operations with robust data analytics, infrastructure automation, and real-time performance monitoring.",
    capabilities: ["Business Intelligence: Power BI, Tableau", "DevOps Automation: Docker, Terraform", "Monitoring & Logging: ELK Stack"],
    color: "from-amber-500 to-amber-700",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
  }
];

const SolutionsSection = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedSolution = solutions.find(s => s.id === selectedId);

  return (
    <section id="solutions" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            A Universe of Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Click on a solution to explore how we can revolutionize your business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <motion.div
              key={solution.id}
              layoutId={`card-container-${solution.id}`}
              onClick={() => setSelectedId(solution.id)}
              className={`p-6 rounded-2xl cursor-pointer text-white flex flex-col items-center text-center justify-center aspect-square bg-gradient-to-br ${solution.color} shadow-lg`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: solution.id * 0.1 }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              {solution.icon}
              <motion.h3 className="font-display text-2xl font-bold mt-4">{solution.title}</motion.h3>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                layoutId={`card-container-${selectedId}`}
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl text-white bg-gradient-to-br ${selectedSolution.color} p-8 shadow-2xl`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 25 } }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <motion.button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 p-2 rounded-full z-10">
                  <CloseIcon className="w-6 h-6" />
                </motion.button>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                         <img src={selectedSolution.image} alt={selectedSolution.title} className="rounded-xl w-full object-cover shadow-lg" />
                         <div className="mt-6 text-center">{selectedSolution.icon}</div>
                    </div>
                    <div className="md:w-2/3">
                        <motion.h2 className="font-display text-4xl font-bold">{selectedSolution.title}</motion.h2>
                        <motion.h5 className="text-lg text-white/80 mb-4">{selectedSolution.subtitle}</motion.h5>
                        <motion.p className="mb-6">{selectedSolution.description}</motion.p>
                        <motion.h4 className="font-bold text-xl mb-2">Key Capabilities:</motion.h4>
                        <ul className="space-y-2 list-disc list-inside">
                            {selectedSolution.capabilities.map(cap => <li key={cap}>{cap}</li>)}
                        </ul>
                    </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SolutionsSection;
