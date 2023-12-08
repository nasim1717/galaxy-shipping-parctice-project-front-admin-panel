// eslint-disable-next-line react/prop-types
const Button2 = ({ icon, name }) => {
  return (
    <button className="flex items-center text-[#059669] py-2 px-3 hover:bg-[#e2e8f0] bg-[#f8fafc] font-bold rounded">
      <span>{icon}</span>
      {name}
    </button>
  );
};

export default Button2;
