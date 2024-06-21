export default function FoodDetail({ food }) {
  return (
    <div className="flex flex-col items-center justify-center m-10 border rounded-md border-slate-500">
      <img
        className="w-[500px] h-[250px] rounded-t-md object-cover"
        src={food.imageUrl}
        alt=""
      />
      <div className="p-4">
        <h1 className="mb-2 text-2xl font-bold">Name: {food.name}</h1>
        <p className="mb-2">Description: {food.description}</p>
        <p>Ingredients: {food.ingredients.join(", ")}</p>
      </div>
    </div>
  );
}
