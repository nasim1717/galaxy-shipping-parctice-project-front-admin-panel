// eslint-disable-next-line react/prop-types
const Button1 = ({ icon, name }) => {
  return (
    <button className="flex items-center text-[#4338ca] hover:bg-[#e2e8f0] py-2 px-3 bg-[#f8fafc] font-bold rounded">
      <span>{icon}</span>
      {name}
    </button>
  );
};

export default Button1;
