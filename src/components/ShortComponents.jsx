import { useEffect, useState } from "react";


export const RecentTasks = () => {
  return (
    <div className="bg-blue-200 p-8 m-10 flex flex-wrap justify-center items-center font-semibold border-2 border-blue-400 rounded shadow-md">
      Here are your Recent Tasks
    </div>
  );
};

export const RegularParagraph = ({
  children,
  styling = "text-sm text-blue-900 font-semibold",
}) => {
  return <p className={styling}>{children}</p>;
};

export const TaskStatusChip = ({ children }) => {
  const [chipStyling, setChipStyling] = useState("");

  useEffect(() => {
    if (children === "Completed") {
      setChipStyling(
        `bg-green-200 border border-green-700 text-green-800 font-semibold shadow rounded-3xl pl-4 pr-4 pt-2 pb-2 justify-self-start`
      );
    } else if (children === "In Progress") {
      setChipStyling(
        `bg-yellow-200 border border-yellow-700 text-yellow-800 font-semibold shadow rounded-3xl pl-4 pr-4 pt-2 pb-2 justify-self-start`
      );
    } else {
      setChipStyling(
        `bg-blue-200 border border-blue-700 text-blue-800 font-semibold shadow rounded-3xl pl-4 pr-4 pt-2 pb-2 justify-self-start`
      );
    }
  }, [children]);

  return <div className={chipStyling}>{children}</div>;
};
