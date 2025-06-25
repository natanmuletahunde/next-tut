import { type NextRequest } from "next/server";
export default async function GET(request: NextRequest) { 
  const requestHandlers = new Headers(request.headers);
  console.log(requestHandlers.get('Authorization'));
  return new Response('Profile API data '); // Log the Authorization header
}
