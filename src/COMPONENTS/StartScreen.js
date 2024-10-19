function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        <span
          style={{
            fontWeight: "500",
            letterSpacing: "0.5px",
            wordSpacing: "1px",
          }}
        >
          Let's start
        </span>
      </button>
    </div>
  );
}

export default StartScreen;
