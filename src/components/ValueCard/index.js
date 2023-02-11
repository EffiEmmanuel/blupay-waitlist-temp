import { FaPray } from "react-icons/fa";

function ValueCard(props) {
  return (
    <div className=" mt-5 doodleBgBlue w-full md:max-w-md text-white p-20 rounded-2xl">
      {props.icon}
      <h3 className="text-2xl mt-3 font-bold">{props.valueTitle}</h3>
      <p className="mt-4">{props.valueText}</p>
    </div>
  );
}

export default ValueCard;
