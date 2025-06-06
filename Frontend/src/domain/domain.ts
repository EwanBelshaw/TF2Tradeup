export interface ErrorResponse {
  error: string;
}

export const isErrorResponse = (obj: any): obj is ErrorResponse => {
  return (
    obj &&
    typeof obj === "object" &&
    "error" in obj &&
    typeof obj.error === "string"
  );
};

export enum BlogTag {
  WARPAINT = "WARPAINT",
  HAT = "HAT",
  TRADING = "TRADING",
  TRADEUP = "TRADEUP",
  PATTERN = "PATTERN",
}

export interface CreateBlogRequest {
  title: string;
  description?: string;
  content: string;
  tag?: BlogTag;
}
