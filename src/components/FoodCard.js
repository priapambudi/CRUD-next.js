import { useRouter } from "next/router";

export default function FoodCard({ food }) {
  const router = useRouter();
  const cardOnClick = () => {
    router.push(`food/${food.id}`);
  };
  return (
    <li>
      <img src={food.imageUrl} alt="" />
      <h1>{food.name}</h1>
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={cardOnClick}
      >
        View Details
      </button>
    </li>
  );
}
