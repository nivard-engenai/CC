const Results = (props) => {
  const footprint = props.value;
  return (
    <div className="h-20 flex flex w-full gap-5 p-5 text-white bg-green-900 rounded-b-xl ">
      <p className="text-md w-1/2 self-center mx-5 bg-emerald-800 p-2 px-4 rounded-md">
        <span className="text-2xl font-semibold">{footprint}</span> CO2e(mt)
      </p>
      <button
        type="button"
        className="w-2/12 text-md text-green-600 border-2 border-green-600 rounded-md"
        onClick={() => props.goBack()}
      >
        Previous page
      </button>
      <button
        type="button"
        className="w-2/12 text-md text-white bg-green-600 rounded-md"
        onClick={() => props.sendData()}
      >
        Next page
      </button>
    </div>
  );
};

export default Results;
