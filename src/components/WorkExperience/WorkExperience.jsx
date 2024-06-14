
import "./WorkExperience.css";


const WorkExperience = () => {

  return (
    
    <section id='work-exp' className="experience-container">
      <h5>Work Experience</h5>

      <div className="experienced-content">

        <div className="work-experience-cardd">
          <h6>Website Developer at MJ Associates</h6 >
          <div className="work-duration">December 2021 - November 2023</div>
          <ul>
              <li>Led a team of frontend developers in the redesign of the company's flagship product, resulting in a 30% increase in user satisfaction.</li>
              <li>Implemented advanced CSS animations and transitions to enhance the overall user experience.</li>
              <li>Collaborated with UX/UI designers to translate wireframes and mockups into responsive and interactive web applications.</li>
          </ul>
        </div >

        <div className="work-experience-cardd">
          <h6>Web Developer Freelance</h6 >
          <div className="work-duration">November 2023 - Present</div>
          <ul>
              <li>Developed and maintained client websites, ensuring high-quality standards and timely project delivery.</li>
              <li>Implemented SEO best practices, leading to a 25% increase in organic search traffic for key clients.</li>
              <li>Worked closely with the design team to create pixel-perfect, cross-browser-compatible web pages.</li>
          </ul>
        </div >

      </div>
    </section>
  );
};

export default WorkExperience;
