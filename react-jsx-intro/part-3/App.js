const App = () => {
  return (
    <div>
      <Person name="Billy" age={16} hobbies={["football", "reading"]} />
      <Person
        name="Dave The Chicken"
        age={16}
        hobbies={["golf", "video-editing"]}
      />
      <Person
        name="Conner Tran"
        age={21}
        hobbies={["video games", "running", "hitting the gym"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
