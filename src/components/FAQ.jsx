import './FAQ.css';
const faqs = [
  {
    question: 'How do you support digital transformation?',
    answer: 'We blend AI, industrial IoT, robotics, and cloud systems to deliver turnkey smart factory solutions that improve agility and reduce waste.',
  },
  {
    question: 'Can you integrate with existing equipment?',
    answer: 'Yes. Our solutions are designed to interface with legacy PLCs, ERP systems, sensors, and manufacturing execution platforms.',
  },
  {
    question: 'What is the timeline for deployment?',
    answer: 'Implementation timelines depend on scope, but most pilot systems can launch within weeks with phased scaling across the factory.',
  },
  {
    question: 'Do you offer custom hardware design?',
    answer: 'Absolutely. Our hardware engineering team specializes in prototyping and manufacturing custom sensor nodes and industrial controllers tailored to your specifications.',
  },
  {
    question: 'Is your software cloud-based or on-premise?',
    answer: 'We offer flexible deployment models including cloud-native architectures, on-premise servers, and hybrid edge-computing solutions based on security needs.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including Aerospace, Automotive, Healthcare, Logistics, and Smart Manufacturing.',
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-[#0B1220] py-24 overflow-hidden border-t border-white/5">
      
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Expert Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Common Questions</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Everything you need to know about our digital transformation strategies and industrial solutions.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div 
              key={i} 
              className="group backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <div className="flex gap-6">
                {/* ICON / COUNTER */}
                <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 items-center justify-center text-blue-400 font-bold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {item.question}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CALL TO ACTION LOOK-ALIKE */}
        <div className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 text-center backdrop-blur-md">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Our specialized consultants are ready to help you navigate your digital transformation journey.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-600/20"
          >
            Contact our advisors <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

