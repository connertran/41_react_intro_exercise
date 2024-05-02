const App = () => {
  return (
    <div>
      <Tweet
        username="bob123"
        name="Bob Garret"
        date={new Date().toDateString()}
        message="The app is the best"
      />
      <Tweet
        username="jack09"
        name="Jack Doll"
        date={new Date().toDateString()}
        message="Let's update this app"
      />
      <Tweet
        username="bubby12"
        name="Bubby Jason"
        date={new Date().toDateString()}
        message="The app needs some styling"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
