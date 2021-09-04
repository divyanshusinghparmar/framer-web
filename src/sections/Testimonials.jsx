import Testimonial from "../components/Testimonial";
import Title from "../components/Title";
import { textAnimation, cardAnimation } from "../Animation";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
import "../styles/sections/Testimonials.scss";
function Testimonials() {
  const [element, controls] = useScroll();
  return (
    <div className="testimonials-container" id="testimonials" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title titlte="Testimonials" color="blue" lineCenter={true} />
          <p>See what people are saying about us</p>
        </motion.div>
        <div className="testimonials">
          <Testimonial
            content="The best on the net! Software development saved my business. I use
            Software development often. I am really satisfied with my Software
             Development."
            name="Trushit Vyas"
            designation="Co-Founder"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="Mobile application developer is exactly what out business has been lacing. I have gotten at least 50 times the value from mobile apllication."
            name="Kishan H. Sheth"
            designation="Founder & CEO"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definetly worth the investment"
            name="Romit Gandhi"
            designation="Founder"
            variants={cardAnimation}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
