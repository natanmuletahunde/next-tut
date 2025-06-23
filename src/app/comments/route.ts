import { comments } from "./data";

// GET handler to return all comments
export async function GET() {
  return Response.json(comments); // Fixed typo: Response.json
}

// POST handler to add a new comment
export async function POST(request: Request) {
  const commentData = await request.json(); // Renamed to avoid shadowing
  const newComment = {
    id: comments.length + 1,
    name: commentData.name, // Access name from request body
  };
  comments.push(newComment); // Push to the imported comments array
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}