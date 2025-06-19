import { Metadata } from 'next'
export const metadata:Metadata= {
    title: {
        absolute: "Counter",
    },
}
export default async function Counter() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <h1>Welcome To counter  page!</h1>
    </>
  ); // Simulating a delay
}