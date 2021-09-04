import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "../styles/components/Blog.scss";
import { motion } from "framer-motion";

import Button from "./Button";
function Blog({ image, title, subtitle, variants, animate }) {
  return (
    <motion.div
      className="blog-container"
      variants={variants}
      animate={animate}
    >
      <div className="image">
        <img src={image} alt="blog" />
      </div>
      <div className="content">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="subtitle">
          <p>{subtitle}</p>
        </div>
        <Button
          content="Read More"
          color="inverse"
          icon={<HiOutlineArrowNarrowRight />}
        />
      </div>
    </motion.div>
  );
}

export default Blog;
