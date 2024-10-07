import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex-center">
      <FaSpinner className="text-blue-500 text-4xl animate-spin" />
    </div>
  );
};

export default Loading;
