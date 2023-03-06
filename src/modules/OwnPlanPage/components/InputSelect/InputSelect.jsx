const InputSelect = ({ className }) => {
  return (
    <select
      className={className}
      //   onFocus={(e) => {
      //     console.dir(e.target.closest("li").querySelector("input"));
      //     e.target.closest("li").querySelector("input").autofocus = true;
      //   }}
    >
      <option>usd</option>
      <option>eur</option>
      <option>uah</option>
    </select>
  );
};

export default InputSelect;
