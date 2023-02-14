const QuestionOne = (props) => {
  const questions = props.questions;

  return (
    <div className="flex basis-5/12 flex-col items-center gap-2 bg-gray-100 p-6 rounded-xl">
      <img src={questions.image} className="w-14" />
      <p className="h-12 w-2/3 text-center w-full text-slate-600 font-semibold">
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
    </div>
  );
};

export default QuestionOne;
