const Tweet = ({ username, name, date, message }) => {
  return (
    <div>
      <ul className="tweet-list">
        <li>
          Name: <span className="name">{name}</span>
        </li>
        <li>
          Username: <span className="username">{username}</span>
        </li>
        <li>
          Tweet date: <span className="date">{date}</span>{" "}
        </li>
        <li>
          Message: <span className="message">{message}</span>
        </li>
      </ul>
    </div>
  );
};
