import { img2 } from "../assets";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
  <div className="absolute z-[0] w-[80%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex mr-0 items-center md:flex-row flex-col sm:mb-16  relative z-[1]">
      <h2 className={styles.heading2}>
        Our
        Web Hosting Packages<br className="sm:block hidden" />
      </h2>
      <img src={img2} alt="feedback" className="w-[50%] h-[50%]" srcset="" />
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-center max-w-[450px]`}>
        Welcome to our world of hosting solutions, 
        where your online presence finds its perfect match. 
        Explore our range of hosting packages designed to cater to every need,
        from personal blogs to enterprise-level websites.
        </p>
      </div>
    </div>

    <div className="flex md:flex-row flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      <FeedbackCard/>
      {/* {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)} */}
    </div>
  </section>
);

export default Testimonials;
