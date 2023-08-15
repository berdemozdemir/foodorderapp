import { useSelector } from "react-redux";

import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Beyti",
    description: "Urfa usulu cok lezzetli",
    price: 12.55,
  },
  {
    id: "m2",
    name: "Adana",
    description: "Adana usulu cok lezzetli",
    price: 15.55,
  },
  {
    id: "m3",
    name: "Pide",
    description: "Ankara usulu cok lezzetli",
    price: 9.55,
  },
  {
    id: "m4",
    name: "Tavuk Izgara",
    description: "İzmir usulu cok lezzetli",
    price: 22.55,
  },
];


function MealsList() {
  return (
    <ul className="-top-20 relative">
      {DUMMY_MEALS.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </ul>
  );
}

export default MealsList;
