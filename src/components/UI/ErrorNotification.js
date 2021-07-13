import logo from "../../assets/logo.png";
const ErrorNotification = (props) => {
  let message = "";
  if (props.status.indexOf("404") !== -1) {
    message = (
      <div>
        <p>Sorry, the page you are looking for does not exist</p>
        <p>
          You can always go back to the <a href="/">HomePage</a>
        </p>
      </div>
    );
  }
  return (
    <div className="container">
      <section className="notification">
        <img src={logo} alt="Auto1" />
        <h2>{props.status}</h2>
        {message}
      </section>
    </div>
  );
};

export default ErrorNotification;
