import { isErrorResponse, type CreateBlogRequest } from "@/domain/domain";

export const createBlog = async (
  accessToken: string,
  request: CreateBlogRequest,
): Promise<void> => {
  const response = await fetch("/api/v1/blogs", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    if (isErrorResponse(responseBody)) {
      throw new Error(responseBody.error);
    } else {
      console.error(JSON.stringify(responseBody));
      throw new Error("An unknown error occurred");
    }
  }
};
