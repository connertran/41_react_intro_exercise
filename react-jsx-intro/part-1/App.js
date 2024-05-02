const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Conner" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
