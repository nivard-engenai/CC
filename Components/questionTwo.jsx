const QuestionTwo = (props) => {
  const questions = props.questions;
  return (
    <div className="flex basis-5/12 flex-col items-center gap-2 bg-gray-100 p-6 rounded-xl">
      <img src={questions.image} className="w-14" />
      <p className="h-12 w-2/3 text-center text-slate-600 font-semibold">
        {questions.title}
      </p>
      <input
        className="p-3 w-2/3 rounded-lg"
        type="number"
        name={questions.name}
        id={questions.name}
        placeholder={questions.placeholder}
        onChange={(e) => props.setValue(e.target.value)}
      />
      <div className="flex items-center gap-2">
        {questions.units.map((unit) => (
          <>
            <input
              type="radio"
              name={questions.name}
              id={questions.name}
              value={unit.value}
              onChange={(e) => props.setUnit(e.target.value)}
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

export default QuestionTwo;
