export default function FoodDetail({ food }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen m-10 border p-9">
      <img className="w-1/3 " src={food.imageUrl} alt="" />
      <h1>{food.name}</h1>
      <p>{food.description}</p>
      <p>{food.ingredients.join(", ")}</p>
    </div>
  );
}
