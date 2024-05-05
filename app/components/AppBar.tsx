import { auth } from "app/auth";
import Link from "next/link";
import { SignOut } from "./SignOut";

async function AppBar() {
  const session = await auth();

  if (!session)
    return (
      <div className="flex justify-center items-center">
        <Link href="/login">Signin</Link>
      </div>
    );

  return (
    <div>
      {JSON.stringify(session)}
      <SignOut />
    </div>
  );
}

export default AppBar;
