import { Metadata } from "next";
export const metadate: Metadata = {
  title: {
    absolute: "Marketing",
  },
};
export default async function Marketing() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <h1>Welcome To Marketing page!</h1>
    </>
  ); // Simulating a delay
}

