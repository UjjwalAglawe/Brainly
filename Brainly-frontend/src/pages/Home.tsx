import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-100 p-6 flex flex-col justify-center items-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Welcome to Brainly
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Save and organize your favorite tweets, YouTube videos, and more.
        </p>

        <Button
          onClick={() => navigate("/signup")}
          size="md"
          variant="primary"
          text="Sign in to Get Started"
          fullwidth={true}
          loading={false}
        />
      </div>
    </div>
  );
}
