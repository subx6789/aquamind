const Loading = ({ darkMode }) => {
  return (
    <div
      className={`flex justify-center items-center h-screen ${
        darkMode ? "bg-slate-900" : "bg-gray-100"
      }`}
    >
      <i className="text-4xl text-blue-500 fa-solid fa-droplet fa-bounce mx-4"></i>
    </div>
  );
};

export default Loading;
