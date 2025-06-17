export default async function ForgetPassword() {
  return (
    <div>
      <h1>Forget Password</h1>
      <p>To reset your password, please enter your email address below.</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}