export default  async function ProductReviews({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const { productId } = await params;
    return <h1>Reviews for Product {productId}</h1>;
}