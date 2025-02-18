

const ButtonComp = (prop) => {
  return (
    <>
    <button className="btn btn-outline-primary mx-5">
      <a href={prop.url} className="text-decoration-none text-dark">{prop.nameButton}</a>
    </button>
    </>
  );
};
export default ButtonComp;
