import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[fit] rounded  border text-blue-700 p-[2px] cursor-pointer hover:border-indigo-900 hover:text-white`}>
    <div className="flex p-2 font-bold  w-fit justify-between">
      <p className="text-gradient mr-1">Get </p>
      <p> Pro <em className="text-gradient">Inxtra</em> Dashboard</p>
    </div>
  </div>
);

export default GetStarted;
