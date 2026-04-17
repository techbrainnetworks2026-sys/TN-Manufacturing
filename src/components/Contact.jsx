import './Contact.css';


export default function Contact() {
  const industries = [
    "Aerospace","Agriculture","Automotive","Chemical","Defence Technology",
    "Education","Energy & Utilities","Entertainment and Media","Finance",
    "Food Technology","Healthcare","Infrastructure","Logistics","Manufacturing",
    "Ocean Technology","Oil and Gas","Pharmaceutical","Retail","Sports",
    "Technology","Telecommunication","Textile","Transportation","Travel"
  ];

  const services = [
    "Software Development","Hardware Engineering","Product Design","Research & Development"
  ];

  return (
    <section id="contact" className="relative bg-[#0B1220] py-24 overflow-hidden min-h-screen flex items-center">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* HEADER */}
        <div className="text-center mb-20 animate-fade-in">
          <span className="text-blue-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Powerful Together</span>
          </h2>

          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            We help businesses across industries design and deploy scalable digital solutions tailored to real-world needs.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">

          {/* LEFT - GLASS CARD */}
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col justify-between transform transition duration-500 hover:border-white/20">

            <div className="space-y-12">
              <p className="text-gray-300 text-xl leading-relaxed font-light">
                Your all-in-one partner for <strong className="text-white font-semibold">digital transformation</strong>. 
                From concept to deployment, we build solutions that scale with your business.
              </p>

              {/* LOCATIONS */}
              <div className="grid sm:grid-cols-2 gap-8">

                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition duration-300">
                      <span className="text-2xl">🇮🇳</span>
                    </div>
                    <h4 className="text-white font-bold text-xl tracking-tight">India</h4>
                  </div>
                  <address className="not-italic text-gray-400 text-base leading-loose font-light">
                    Thanjavur<br />
                    Ayyampettai Post<br />
                    Tamil Nadu, India
                  </address>
                </div>

                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:scale-110 transition duration-300">
                      <span className="text-2xl">🇬🇧</span>
                    </div>
                    <h4 className="text-white font-bold text-xl tracking-tight">United Kingdom</h4>
                  </div>
                  <address className="not-italic text-gray-400 text-base leading-loose font-light">
                    London<br />
                    Covent Garden<br />
                    WC2H 9JQ
                  </address>
                </div>

              </div>
            </div>

            {/* CONTACT LINKS */}
            <div className="mt-16 pt-10 border-t border-white/10 space-y-6">

              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/30 transition duration-300">
                  <span className="text-blue-400 text-xl italic">📞</span>
                </div>
                <span className="text-white text-lg font-medium tracking-tight group-hover:text-blue-400 transition duration-300">+91 8754906714</span>
              </div>

              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/30 transition duration-300">
                  <span className="text-blue-400 text-xl">📧</span>
                </div>
                <a href="mailto:contact@techbrainnetworks.com" className="text-blue-400 text-lg font-medium tracking-tight hover:underline">
                  contact@techbrainnetworks.com
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col justify-center">

            <form className="space-y-8">

              {/* INPUT GRID */}
              <div className="grid md:grid-cols-2 gap-6">

                {[
                  { id: 'name', label: "Full Name", type: "text", className: "text-black", placeholder: "e.g. John Doe" },
                  { id: 'company', label: "Company", type: "text", className: "text-black", placeholder: "e.g. Tech Corp" },
                  { id: 'email', label: "Business Email", type: "email", className: "text-black", placeholder: "john@company.com" },
                  { id: 'mobile', label: "Mobile Number", type: "tel", className: "text-black", placeholder: "+91 00000 00000" }
                ].map((field) => (
                  <div key={field.id} className="relative group">
                    <label htmlFor={field.id} className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-5 py-4 rounded-[1.25rem] border border-gray-100 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition duration-300 text-gray-900 placeholder:text-gray-300"
                    />
                  </div>
                ))}

              </div>

              {/* SELECTS */}
              <div className="grid md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Industry</label>
                  <select className="w-full px-5 py-4 rounded-[1.25rem] border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-blue-500/5 outline-none text-gray-900 appearance-none cursor-pointer">
                    <option value="">Select Industry</option>
                    {industries.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Service</label>
                  <select className="w-full px-5 py-4 rounded-[1.25rem] border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-blue-500/5 outline-none text-gray-900 appearance-none cursor-pointer">
                    <option value="">Select Service</option>
                    {services.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>

              </div>

              {/* TEXTAREA */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Project Details</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project requirements..."
                  className="w-full px-5 py-4 rounded-[1.25rem] border border-gray-100 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition duration-300 text-gray-900 placeholder:text-gray-300"
                />
              </div>

              {/* BUTTON */}
              <button 
                type="submit"
                className="w-full py-5 rounded-[1.25rem] bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Send Message
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
