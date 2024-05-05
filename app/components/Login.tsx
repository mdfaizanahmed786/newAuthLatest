import { signIn } from "app/auth";

export function Login() {
  return (
    <>
      <form
        action={async (formData) => {
          "use server";
        console.log(formData, "FOORM")
          await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirectTo: "/",
          });
        }}
      >
        <label>
          Email
          <input className="text-black" name="email" type="email" />
        </label>
        <label>
          Password
          <input className="text-black" name="password" type="password" />
        </label>
        <button>Sign In</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    </>
  );
}
