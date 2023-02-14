import QuestionTwo from "@/Components/questionTwo";
import Results from "@/Components/results";
import Head from "next/head";
import Title from "../Components/title";
import { useState } from "react";
import Router, { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const {
    query: { petFootprint },
  } = router;
  const props = { petFootprint };
  console.log(props.petFootprint);
  let oldFootprint = Number(props.petFootprint);

  if (isNaN(oldFootprint)) {
    oldFootprint = 0;
  }

  const [gasoline, setGasoline] = useState(0);
  const [gasolineUnits, setGasolineUnits] = useState(0);
  const [diesel, setDiesel] = useState(0);
  const [dieselUnits, setDieselUnits] = useState(0);
  const [cng, setCNG] = useState(0);
  const [cngUnits, setCNGUnits] = useState(0);
  const [hybrid, setHybrid] = useState(0);
  const [hybridUnits, setHybridUnits] = useState(0);
  const [electric, setElectric] = useState(0);
  const [electricUnits, setElectricUnits] = useState(0);

  const values = [gasoline, diesel, cng, hybrid, electric];
  const units = [
    gasolineUnits,
    dieselUnits,
    cngUnits,
    hybridUnits,
    electricUnits,
  ];

  const landValues = values.map(function (item) {
    return Number(item);
  });
  const landUnits = units.map(function (item) {
    return Number(item);
  });

  console.log(values);
  console.log(landValues);
  console.log(units);
  console.log(landUnits);

  const cFootprint =
    oldFootprint +
    (landValues[0] * landUnits[0] * 12 +
    landValues[1] * landUnits[1] * 12 +
    landValues[2] * landUnits[2] * 12 +
    landValues[3] * landUnits[3] * 12 +
    landValues[4] * landUnits[4] * 12)/1000;

  const landFootprint = cFootprint.toFixed(3);

  function sendProps() {
    Router.push({
      pathname: "/air",
      query: { landFootprint },
    });
  }

  function prevPage() {
    Router.push({
      pathname: "/pets",
      query: { petFootprint },
    });
  }

  const questions = [
    {
      id: 1,
      title: "Gasoline Car (per month)",
      name: "Gasoline",
      category: "Land Travel",
      units: [
        {
          id: 1,
          name: "km",
          value: "0.27909",
        },
        {
          id: 2,
          name: "miles",
          value: "0.44914",
        },
      ],
    },
    {
      id: 2,
      title: "Diesel Car (per month)",
      name: "Diesel",
      category: "Land Travel",
      units: [
        {
          id: 1,
          name: "km",
          value: "0.20721",
        },
        {
          id: 2,
          name: "miles",
          value: "0.33348",
        },
      ],
    },
    {
      id: 3,
      title: "CNG Car (per month)",
      name: "CNG",
      category: "Land Travel",
      units: [
        {
          id: 1,
          name: "km",
          value: "0.23626",
        },
        {
          id: 2,
          name: "miles",
          value: "0.38023",
        },
      ],
    },
    {
      id: 4,
      title: "Plug-in-Hybrid Electric Car (per month)",
      name: "Hybrid Electric",
      category: "Land Travel",
      units: [
        {
          id: 1,
          name: "km",
          value: "0.07674",
        },
        {
          id: 2,
          name: "miles",
          value: "0.1235",
        },
      ],
    },
    {
      id: 5,
      title: "Electric Car (per month)",
      name: "Electric",
      category: "Land Travel",
      units: [
        {
          id: 1,
          name: "km",
          value: "0",
        },
        {
          id: 2,
          name: "miles",
          value: "0",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Power Consumption</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center py-5">
        <div className="p-4 flex flex w-10/12 bg-gray-100 rounded-t-xl">
          <Title name="Land Travel Footprint" />
        </div>
        <div className="h-20 mb-5 flex items-center justify-center w-10/12">
          <Results value={landFootprint} sendData={sendProps} goBack={prevPage} />
        </div>
        <div className="my-2 flex flex-col w-10/12 overflow-y-scroll h-96 p-2">
          <img
            src="images/land/sport-car.png"
            alt="cartoon car"
            className="w-24 self-center"
          />
          <h1 className="text-xl text-slate-700 font-bold mb-6 text-center">
            Distance Travelled in a:
          </h1>
          <div className="flex flex-wrap gap-2 justify-center">
            <QuestionTwo
              questions={questions[0]}
              setValue={setGasoline}
              setUnit={setGasolineUnits}
            />
            <QuestionTwo
              questions={questions[1]}
              setValue={setDiesel}
              setUnit={setDieselUnits}
            />
            <QuestionTwo
              questions={questions[2]}
              setValue={setCNG}
              setUnit={setCNGUnits}
            />
            <QuestionTwo
              questions={questions[3]}
              setValue={setHybrid}
              setUnit={setHybridUnits}
            />
            <QuestionTwo
              questions={questions[4]}
              setValue={setElectric}
              setUnit={setElectricUnits}
            />
          </div>
        </div>
      </main>
    </>
  );
}
