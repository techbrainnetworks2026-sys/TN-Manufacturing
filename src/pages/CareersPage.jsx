import './CareersPage.css';
const roles = [
  { title: 'Android Developer', skill: 'Java, Kotlin' },
  { title: 'CAD/CAM Designer', skill: 'Solidworks' },
  { title: 'DFT (Design for Test) Engineer', skill: 'DFT Methodologies, ATPG, JTAG' },
  { title: 'FARM-stack Developer', skill: 'FastAPI, ReactJs, MongoDB' },
  { title: 'FPGA Engineer', skill: 'VHDL, ModelSim, Xilinx Vivado' },
  { title: 'Hardware Design & Testing', skill: 'C, Embedded C, RTOS, KiCad' },
  { title: 'iOS Developer', skill: 'Swift' },
  { title: 'Machine Learning Engineer', skill: 'Python, Keras, OpenCV, Scikit, TensorFlow' },
  { title: 'MEAN-stack Developer', skill: 'AngularJs, NodeJs, MongoDB, ExpressJs' },
  { title: 'MERN-stack Developer', skill: 'ReactJs, NodeJs, MongoDB, ExpressJs' },
  { title: 'Physical Design Engineer', skill: 'RTL-to-GDSII Flow, Place and Route, Timing Closure' },
  { title: 'Robotics Engineer', skill: 'C++, Python, ROS' },
  { title: 'Software Tester', skill: 'Automation and Manual Testing' },
  { title: 'UX/UI Designer', skill: 'Framer, Figma, Adobe XD, Sketch' },
  { title: 'Verification Engineer', skill: 'SystemVerilog, UVM, Functional Coverage' },
  { title: 'VLSI Design Engineer', skill: 'RTL Design, Verilog, Synthesis' },
];

export default function CareersPage() {
  return (
    <div>
      <section className="section">
        <div className="container section-heading">
          <span className="section-label">Careers</span>
          <h2>Join Techbrain Networks and build the future of technology.</h2>
          <p>We are revolutionizing the future of technology with 480 innovative products spanning 24 industries. Our solutions are designed to deliver impact, and we are looking for talented people who want to make a difference.</p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container section-heading">
          <h3>Open Positions</h3>
          <p>Explore current roles where innovation, collaboration, and real-world impact come together.</p>
        </div>
        <div className="container grid-responsive">
          {roles.map((role) => (
            <article key={role.title} className="card career-card">
              <h3>{role.title}</h3>
              <p><strong>Skill:</strong> {role.skill}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <article className="card">
            <h3>Why work with us?</h3>
            <p>Our mission is to make advanced technology accessible to all, creating a global impact and shaping a brighter future. We support professionals across education, finance, transportation, retail, healthcare, and more.</p>
          </article>
          <article className="card">
            <h3>Apply today</h3>
            <p>Whether you are starting your career or looking for your next challenge, we offer roles tailored to your skills and ambitions. Join us to build tailored technology solutions that matter.</p>
          </article>
        </div>
      </section>
    </div>
  );
}

