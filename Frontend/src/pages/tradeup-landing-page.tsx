import { Button } from "@/components/ui/button";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router";

const TradeupLandingPage: React.FC = () => {
  const { isAuthenticated, isLoading, signinRedirect, signoutRedirect } =
    useAuth();

  const navigate = useNavigate();

  if (isLoading) {
    return <p> Loading</p>;
  }

  return (
    <div className="bg-orange-300 min-h-screen text-white">
      {/*Nav*/}

      <div className="bg-gray-500 flex justify-end p-4 container mx-auto">
        {isAuthenticated ? (
          <div className="flex gap-4">
            <Button
              className="cursor-pointer"
              onClick={() => navigate("/create-blog")}
            >
              Create-blog
            </Button>

            <Button
              className="cursor-pointer"
              onClick={() => signoutRedirect()}
            >
              Log out
            </Button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Button className="cursor-pointer" onClick={() => signinRedirect()}>
              Log in
            </Button>
          </div>
        )}
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left column */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold ">TF2 tradeup calculator</h1>
            <p>
              A platform to test TF2 trade ups with ease and read/create blogs
              of niche topics on TF2 skins and trading!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="cursor-pointer"
                onClick={() => navigate("/create-tradeup")}
              >
                Create a tradeup
              </Button>
              <Button
                className="cursor-pointer"
                onClick={() => navigate("/blog")}
              >
                View blogs{" "}
              </Button>
            </div>
          </div>

          {/* right column */}
          <div className="bg-gray-600 rounded-lg aspect-square w-full max-w-sm overflow-hidden">
            <img
              src="./src/assets/tf2scout.jpeg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TradeupLandingPage;
