import Image from "next/image";
import MealSearchInput from "./components/MealSearchInput";

export default async function page({ searchParams }) {
  const query = await searchParams;
  const getMeals = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
    );
    const data = await res.json();
    return data.meals;
  };

  const meals = await getMeals();

  return (
    <>
      <MealSearchInput />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meals?.map((meal) => (
          <div key={meal.idMeal} className="p-4 border-b">
            <Image width={400} height={400} src={meal?.strMealThumb} alt="" />
            <h2 className="text-xl font-bold">{meal.strMeal}</h2>
            <p>{meal.strInstructions}</p>
          </div>
        ))}
      </div>
    </>
  );
}
