import "../css/style.css";

function MainPage(props) {
  return (
    <div className="main-page">
      <h1>Welcome to the Main Page</h1>
      <p>{props.message}</p>
    </div>
  );
}

export default MainPage;
