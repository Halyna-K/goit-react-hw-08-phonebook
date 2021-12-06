import PropTypes from "prop-types";
import s from "./Title.module.css";

const Title = ({ text }) => {
  return (
    <>
      <h1 className={s.text}> {text} </h1>
      {/* {children} */}
    </>
  );
};

Title.propTypes = {
  text: PropTypes.string,
};
export default Title;
