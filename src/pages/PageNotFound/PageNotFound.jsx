import notFoundImg from "../../assets/error/notFound.jpg";
const NotFound = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    backgroundColor: "#f64f57",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  };
  return (
    <div style={containerStyle}>
      <img src={notFoundImg} alt="Page not found" style={imageStyle} />
    </div>
  );
};
export default NotFound;
