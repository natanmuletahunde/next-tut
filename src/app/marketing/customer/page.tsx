export default async function Customer() {
  return (
    <div>
      <h1>Customer Page</h1>
      <p>This is the customer page where you can manage your account and view orders.</p>
      <ul>
        <li><a href="/orders">View Orders</a></li>
        <li><a href="/profile">Edit Profile</a></li>
        <li><a href="/support">Customer Support</a></li>
      </ul>
    </div>
  );
}