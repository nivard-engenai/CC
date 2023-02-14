import QuestionThree from "../Components/questionThree";
import QuestionTwo from "@/Components/questionTwo";
import Title from "@/Components/title";
import Results from "@/Components/results";
import Head from "next/head";
import { useState } from "react";
import Router, { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const {
    query: { powerFootprint },
  } = router;
  const props = { powerFootprint };
  console.log(props.powerFootprint);
  let oldFootprint = Number(props.powerFootprint);

  if (Number.isNaN(oldFootprint)) {
    oldFootprint = 0;
  }

  const [beef, setBeef] = useState(0);
  const [beefUnit, setBeefUnit] = useState(0);
  const [pork, setPork] = useState(0);
  const [porkUnit, setPorkUnit] = useState(0);
  const [fish, setFish] = useState(0);
  const [fishUnit, setFishUnit] = useState(0);
  const [chicken, setChicken] = useState(0);
  const [chickenUnit, setChickenUnit] = useState(0);
  const [lamb, setLamb] = useState(0);
  const [lambUnit, setLambUnit] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [cheeseUnit, setCheeseUnit] = useState(0);
  const [packaging, setPackaging] = useState(0);
  const [waste, setWaste] = useState(0);

  const values = [beef, pork, fish, chicken, lamb, cheese, packaging, waste];
  const units = [
    beefUnit,
    porkUnit,
    fishUnit,
    chickenUnit,
    lambUnit,
    cheeseUnit,
  ];

  const foodValues = values.map(function (item) {
    return Number(item);
  });
  const foodUnits = units.map(function (item) {
    return Number(item);
  });

  console.log(values);
  console.log(foodValues);
  console.log(units);
  console.log(foodUnits);

  const cFootprint =
    (foodValues[0] * foodUnits[0] * 52 +
      foodValues[1] * foodUnits[1] * 52 +
      foodValues[2] * foodUnits[2] * 52 +
      foodValues[3] * foodUnits[3] * 52 +
      foodValues[4] * foodUnits[4] * 52 +
      foodValues[5] * foodUnits[5] * 52 +
      foodValues[6] +
      foodValues[7]) /
      1000 +
    oldFootprint;

  const foodFootprint = cFootprint.toFixed(3);

  function sendProps() {
    Router.push({
      pathname: "/retail",
      query: { foodFootprint },
    });
  }

  function prevPage() {
    Router.push("/");
  }

  const questions = [
    {
      id: 1,
      title: "Beef consumed (per week)",
      name: "Beef",
      category: "Food Consumption",
      image: "images/food/beef.png",
      units: [
        {
          id: 1,
          name: "kg",
          value: "33.3",
        },
        {
          id: 2,
          name: "lb",
          value: "15.13636364",
        },
      ],
    },
    {
      id: 2,
      title: "Pork consumed (per week)",
      name: "Pork",
      category: "Food Consumption",
      image: "images/food/pork.png",
      units: [
        {
          id: 1,
          name: "kg",
          value: "12.31",
        },
        {
          id: 2,
          name: "lb",
          value: "5.5955",
        },
      ],
    },
    {
      id: 3,
      title: "Fish consumed (per week)",
      name: "Fish",
      category: "Food Consumption",
      image: "images/food/tuna.png",
      units: [
        {
          id: 1,
          name: "kg",
          value: "13.63",
        },
        {
          id: 2,
          name: "lb",
          value: "6.195454545",
        },
      ],
    },
    {
      id: 4,
      title: "Chicken consumed (per week)",
      name: "Chicken",
      category: "Food Consumption",
      image: "images/food/chicken.png",
      units: [
        {
          id: 1,
          name: "kg",
          value: "9.87",
        },
        {
          id: 2,
          name: "lb",
          value: "4.48636",
        },
      ],
    },
    {
      id: 5,
      title: "Lamb or mutton consumed (per week)",
      name: "Lamb",
      category: "Food Consumption",
      image: "images/food/sheep.png",
      units: [
        {
          id: 1,
          name: "kg",
          value: "39.72",
        },
        {
          id: 2,
          name: "lb",
          value: "18.05454545",
        },
      ],
    },
    {
      id: 6,
      title: "Cheese consumed (per week)",
      name: "Cheese",
      category: "Food Consumption",
      image: "images/food/cheese.png",
      units: [
        {
          id: 1,
          name: "kg",
          value: "23.88",
        },
        {
          id: 2,
          name: "lb",
          value: "10.8545",
        },
      ],
    },
    {
      id: 7,
      title: "How much of your food is packaged / processed?",
      name: "Packaged",
      category: "Food Consumption",
      image: "images/food/packaging.png",
      units: [
        {
          id: 1,
          name: "Very little",
          value: "50",
        },
        {
          id: 2,
          name: "Below Average",
          value: "200",
        },
        {
          id: 3,
          name: "Average",
          value: "400",
        },
        {
          id: 4,
          name: "Above Average",
          value: "600",
        },
      ],
    },
    {
      id: 8,
      title: "How much of your food do you waste?",
      name: "Waste",
      category: "Food Consumption",
      image: "images/food/compost.png",
      units: [
        {
          id: 1,
          name: "Very little (10% or less)",
          value: "830",
        },
        {
          id: 2,
          name: "Below Average (50% or less)",
          value: "950",
        },
        {
          id: 3,
          name: "Average",
          value: "1100",
        },
        {
          id: 4,
          name: "Above Average (50% or more)",
          value: "1260",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Food Consumption</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center py-5">
        <div className="p-4 flex flex w-10/12 bg-gray-100 rounded-t-xl">
          <Title name="Food Consumption" />
        </div>
        <div className="h-20 mb-5 flex items-center justify-center w-10/12">
          <Results value={foodFootprint} sendData={sendProps} goBack={prevPage} />
        </div>
        <div className="my-2 flex flex-col w-10/12">
          <div className="flex flex-wrap gap-2 justify-center overflow-y-scroll h-96 p-2">
            <QuestionTwo
              questions={questions[0]}
              setValue={setBeef}
              setUnit={setBeefUnit}
            />
            <QuestionTwo
              questions={questions[1]}
              setValue={setPork}
              setUnit={setPorkUnit}
            />
            <QuestionTwo
              questions={questions[2]}
              setValue={setFish}
              setUnit={setFishUnit}
            />
            <QuestionTwo
              questions={questions[3]}
              setValue={setChicken}
              setUnit={setChickenUnit}
            />
            <QuestionTwo
              questions={questions[4]}
              setValue={setLamb}
              setUnit={setLambUnit}
            />
            <QuestionTwo
              questions={questions[5]}
              setValue={setCheese}
              setUnit={setCheeseUnit}
            />
            <QuestionThree questions={questions[6]} setValue={setPackaging} />
            <QuestionThree questions={questions[7]} setValue={setWaste} />
          </div>
        </div>
      </main>
    </>
  );
}
