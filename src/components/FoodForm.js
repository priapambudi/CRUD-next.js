import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function FoodForm({ defaultFormData, isEdit }) {
  const router = useRouter();
  const [formData, setFormData] = useState(
    defaultFormData || {
      name: "",
      imageUrl: "",
      description: "",
      ingredients: [],
    }
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    const urlEdit = `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${router.query.id}`;
    const urlCreate = "https://api-bootcamp.do.dibimbing.id/api/v1/create-food";
    const resp = await axios.post(
      isEdit ? urlEdit : urlCreate,
      {
        name: formData.name,
        imageUrl: formData.imageUrl,
        description: formData.description,
        ingredients: formData.ingredients,
      },
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
      }
    );
    if (resp.data.code === "200") router.push("/");
    // console.log(resp);
  };

  const onDelete = async () => {
    const resp = await axios.delete(
      `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${router.query.id}`,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
      }
    );
    if (resp.data.code === 200) router.push("/");
  };

  return (
    <div className="w-1/3 p-2 m-10 mx-auto border rounded-md border-slate-500">
      <form
        className="flex flex-col items-center justify-center gap-5"
        onSubmit={onSubmit}
      >
        {isEdit ? null : (
          <h1 className="text-2xl font-semibold">Create New Food</h1>
        )}
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Name
          </label>
          <input
            id="name"
            placeholder="Input food name..."
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="imageUrl" className="font-semibold text-gray-700">
            Image URL
          </label>
          <input
            id="imageUrl"
            placeholder="Input url..."
            value={formData.imageUrl}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))
            }
            className="p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="description" className="font-semibold text-gray-700">
            Description
          </label>
          <input
            id="description"
            placeholder="Input description..."
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            className="p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="ingredients" className="font-semibold text-gray-700">
            Ingredients
          </label>
          <input
            id="ingredients"
            placeholder="Input ingredients..."
            value={formData.ingredients}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                ingredients: e.target.value.split(","),
              }))
            }
            className="p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-5">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            type="submit"
          >
            {isEdit ? "Update Food" : "Create Food"}
          </button>
          {isEdit && (
            <button
              className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
              type="submit"
              onClick={onDelete}
            >
              Delete Food
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
