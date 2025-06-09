import { Textarea } from "@/components/ui/textarea";
import NavBar from "../components/nav-bar";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { createBlog } from "@/lib/api";
import type { CreateBlogRequest } from "@/domain/domain";
import { useAuth } from "react-oidc-context";
import { Button } from "@/components/ui/button";

interface BlogData {
  title: string;
  description: string;
  content: string;
}

const CreateBlog: React.FC = () => {
  const { isLoading, user } = useAuth();

  const [blogData, setBlogData] = useState<BlogData>({
    title: "",
    description: "",
    content: "",
  });

  const updateField = (field: keyof BlogData, value: any) => {
    setBlogData((prev) => ({ ...prev, [field]: value }));
  };

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading || !user || !user.access_token) {
      console.error("User not found.");
      return;
    }

    const request: CreateBlogRequest = {
      title: blogData.title,
      description: blogData.description,
      content: blogData.content,
    };

    createBlog(user.access_token, request);
  };

  return (
    <div className="min-h-screen bg-orange-300 text-white">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Create a blog!</h1>
        <form onSubmit={formSubmit}>
          <div>
            <Input
              id="blog-title"
              className="bg-white border-black text-black mb-6"
              placeholder="Blog title"
              onChange={(e) => updateField("title", e.target.value)}
              required
            />
            <Input
              id="blog-description"
              className="bg-white border-black text-black mb-6"
              placeholder="Blog description"
              onChange={(e) => updateField("description", e.target.value)}
              required
            />
            <Textarea
              className="bg-white border-black text-black mb-6"
              placeholder="Blog content"
              onChange={(e) => updateField("content", e.target.value)}
              required
            />
          </div>
          <Button onClick={formSubmit}>Submit</Button>
          <p>{JSON.stringify(blogData)}</p>
        </form>
      </div>
    </div>
  );
};
export default CreateBlog;
