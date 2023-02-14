const QuestionThree = (props) => {
  const questions = props.questions;
  return (
    <div className="flex flex-5/12 flex-col items-center gap-2 bg-gray-100 p-6 rounded-xl">
      <img src={questions.image} className="w-14" />
      <p className="h-12 w-2/3 text-center text-slate-600 font-semibold">
        {questions.title}
      </p>
      <div className="flex items-center gap-2">
        {questions.units.map((unit) => (
          <>
            <input
              type="radio"
              name={questions.name}
              id={questions.name}
              value={unit.value}
              onChange={(e) => props.setValue(e.target.value)}
            />
            <label htmlFor={unit} className="text-gray-500">
              {unit.name}
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default QuestionThree;
