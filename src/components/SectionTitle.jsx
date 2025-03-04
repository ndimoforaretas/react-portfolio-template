const SectionTitle = ({ text }) => {
  return (
    /*
    - text in h2 tag
    - text with red underline
    - margin top and bottom
    */
    <h2 className="mb-14 mt-4 pt-5 text-center text-3xl uppercase text-slate-900 dark:text-slate-100">
      <span className=" font-bold my-4 border-b-3 border-b-pink-700 pb-1">
        {text}
      </span>
    </h2>
  );
};
export default SectionTitle;
