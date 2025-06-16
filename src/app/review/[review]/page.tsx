export default async function ProductDetails({
    params,
  }: {
    params: Promise<{ reviewId: string }>;
  }) {
    const reviewId = (await params).reviewId;
    return <h1>Details about Review {reviewId}</h1>;
  }
  