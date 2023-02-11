import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

function FaqItem(props) {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  return (
    <>
      {/* FAQ */}
      <div className="max-w-5xl mx-auto text-left mt-5">
        {/* QUESTION */}
        <div className="bg-blupayBlue-300 h-16 flex justify-between align-middle px-10">
          <h4 className="my-auto font-medium">{props.question}?</h4>
          <button onClick={() => setIsFaqOpen(!isFaqOpen)}>
            {isFaqOpen ? (
              <span>
                <FaCaretUp />
              </span>
            ) : (
              <span>
                <FaCaretDown />
              </span>
            )}
          </button>
        </div>

        {/* ANSWER */}
        <div
          className="px-10 mt-5 shadow-sm pb-5"
          style={{
            display: isFaqOpen ? "block" : "none",
            height: !isFaqOpen ? "0px" : "auto",
          }}
        >
          <p>{props.answer}</p>
        </div>
      </div>
    </>
  );
}

export default FaqItem;
