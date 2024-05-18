import Lottie from "lottie-react";
import loader from "../../assets/loader.json";

const Loader = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const animationStyle = {
    width: "200px",
    height: "200px",
  };
  return (
    <div style={containerStyle}>
      <Lottie animationData={loader} loop={true} style={animationStyle} />
    </div>
  );
};

export default Loader;
