const Person = ({ name, age, hobbies }) => {
  //  If the person is over 18 years old, display an additional h3 that says “please go vote!”. Otherwise, display an h3 that says “you must be 18”.
  let goVote;
  if (age >= 18) {
    goVote = <h3>Please go vote</h3>;
  } else {
    goVote = <h3>You must be 18</h3>;
  }
  let hobbiesList = hobbies.map((hobby) => <li>{hobby}</li>);
  return (
    <div>
      <p>Learn some information about this person</p>
      {/* If the person’s name is longer than 8 characters, only display the first six characters of their name. */}
      <p>Name: {name.slice(0, 7)}</p>
      <p>Age: {age}</p>
      {goVote}
      <p>{name}'s hobbies:</p>
      <ul>{hobbiesList}</ul>
      <hr></hr>
    </div>
  );
};
