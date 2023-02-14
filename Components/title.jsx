const Title = (props) => {
  return (
    <div className="flex flex-wrap w-full gap-2 rounded-t-xl">
      <div className="flex flex-2 flex-inline items-end gap-5 p-5">
        <div>
          <img
            src="images/spe_dg.png"
            alt="Save Planet Earth Logo"
            className="w-8"
          />
        </div>
        <div>
          <p className="text-slate-600">
            SavePlanetEarth |{" "}
            <span className="font-bold">Carbon Calculator</span>
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse flex-1 shrink p-5 justify-items-end items-end">
        <h1 className="text-2xl text-right font-bold text-slate-600">
          {props.name}
        </h1>
      </div>
    </div>
  );
};

export default Title;
