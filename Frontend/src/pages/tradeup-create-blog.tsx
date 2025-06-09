import { Textarea } from "@/components/ui/textarea";
import NavBar from "../components/nav-bar";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { createBlog } from "@/lib/api";
import type { CreateBlogRequest } from "@/domain/domain";
import { useAuth } from "react-oidc-context";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

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

  const [error, setError] = useState<string | undefined>();

  const updateField = (field: keyof BlogData, value: any) => {
    setBlogData((prev) => ({ ...prev, [field]: value }));
  };

  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(undefined);
    if (isLoading || !user || !user.access_token) {
      console.error("User not found.");
      return;
    }

    const request: CreateBlogRequest = {
      title: blogData.title,
      description: blogData.description,
      content: blogData.content,
    };
    try {
      await createBlog(user.access_token, request);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else if (typeof err === "string") {
        setError(err);
      } else {
        setError("Something unknown went wrong.");
      }
    }
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

          {error && (
            <div>
              <Alert variant="destructive" className="border-red-700">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </div>
          )}
          <div className="py-5">
            <Button onClick={formSubmit}>Submit</Button>
          </div>
          <p>{JSON.stringify(blogData)}</p>
        </form>
      </div>
    </div>
  );
};
export default CreateBlog;
