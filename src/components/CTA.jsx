import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row xs:text-[1.5rem] flex-col bg-black-gradient-2 rounded box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className="font-extrabold text-blue-100 md:text-[5rem]" >
      <div className="flex justify-between xs:text-[1.5rem]">
      Get Your Inxtra File Now On 
      <div className="flex flex-row ml-8 md:ml-0">
      <p className="font-extrabold text-blue-700 "> Inx</p>
      <p className="font-extrabold text-white">tra</p>
      </div>
        </div>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Streamline Your Setup, Effortless Installs Online.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
