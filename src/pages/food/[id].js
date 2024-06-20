import axios from "axios";
import FoodDetail from "@/components/FoodDetail";
import FoodForm from "@/components/FoodForm";
import BaseLayouts from "@/layouts/BaseLayouts";

export async function getServerSideProps(context) {
  const resp = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`,
    {
      headers: {
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
      },
    }
  );
  const data = resp.data.data;
  return { props: { food: data } };
}

export default function FoodDetailPage({ food }) {
  return (
    <BaseLayouts>
      <div>
        <FoodDetail food={food} />
        <FoodForm defaultFormData={food} isEdit={true} />
      </div>
    </BaseLayouts>
  );
}
