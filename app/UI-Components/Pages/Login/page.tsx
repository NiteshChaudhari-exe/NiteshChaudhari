
import { redirect } from "next/navigation";

export default function Login() {
  // Redirect to home because the login page has been removed
  redirect("/");
}
