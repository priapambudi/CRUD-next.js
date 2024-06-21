import { useRouter } from "next/router";

export default function FoodCard({ food }) {
  const router = useRouter();
  const cardOnClick = () => {
    router.push(`food/${food.id}`);
  };
  return (
    <li className="flex flex-col items-center p-3 border rounded-md border-slate-400 bg-slate-100">
      <img className="w-[300px] h-[200px]" src={food.imageUrl} alt="" />
      <h1 className="py-2 text-xl font-semibold">{food.name}</h1>
      <button
        className="px-3 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={cardOnClick}
      >
        View Details
      </button>
    </li>
  );
}
