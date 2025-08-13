
const Head = ({children , className}) => {
  return (
    <h2 className={`text-xl sm:text-3xl lg:text-4xl font-extrabold mb-4 pt-2 sm:pt-4 logoText { ${className}`}>{children}</h2>
  );
};

export default Head;