const Header = ({ isHidden }) => {
  return (
    <div
      className={`bg-red-100 h-24 flex justify-center items-center text-2xl sticky top-0 duration-1000 ${
        isHidden && "opacity-0  "
      }`}
    >
      Header
    </div>
  );
};

export default Header;
