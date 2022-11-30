export const Text = ({ type, children, className }) => {
  return (
    <>
      {type === "h1" && <h1 className={className}>{children}</h1>}
      {type === "h2" && <h2 className={className}>{children}</h2>}
      {type === "h3" && <h3 className={className}>{children}</h3>}
      {type === "h4" && <h4 className={className}>{children}</h4>}
      {type === "p" && <p className={className}>{children}</p>}
      {type === "span" && <span className={className}>{children}</span>}
      {type === "label" && <label className={className}>{children}</label>}
      {type === "legend" && <legend className={className}>{children}</legend>}
    </>
  );
};
