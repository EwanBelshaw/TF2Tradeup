import NavBar from "../components/nav-bar";
import { Input } from "../components/ui/input";
import { useState } from "react";

interface BlogData {
  title: string;
}

const Blog: React.FC = () => {
  const [blogData, setBlogData] = useState<BlogData>({
    title: "",
  });

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-orange-300 text-white">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Create a blog!</h1>
        <form onSubmit={formSubmit}>
          <div>
            <Input
              id="tradeup-name"
              className="bg-white border-black text-black"
              placeholder="Tradeup name"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Blog;
