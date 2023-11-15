// eslint-disable-next-line react/prop-types
const SearchBtn = ({ name, icon, loading }) => {
  return (
    <button disabled={loading} className="btn hover:bg-[#216046]">
      {icon}
      <span>{name}</span>
    </button>
  );
};

export default SearchBtn;
