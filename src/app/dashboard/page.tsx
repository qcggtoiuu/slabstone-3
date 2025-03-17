import { redirect } from "next/navigation";

export default async function Dashboard() {
  // Redirect to home page as dashboard is no longer needed
  redirect("/");
}
