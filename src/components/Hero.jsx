import styles from "../style";
import GetStarted from "./GetStarted";
import { content } from "../constants";
import { discount, imga, robot } from "../assets";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex justify-between w-full">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">
              Get <em>50% </em>
            </span>
            <span> Discount Off </span>
            <span className="text-white"> Per Month</span>
          </p>
        </div>

        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Download
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient"> Your Exculsive</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Software packages.
        </h1>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
          {content.map((content) => (
            <p>{content.content}</p>
          ))}
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:mb-0 mb-10 relative`}
      >
        <img
          src={imga}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
