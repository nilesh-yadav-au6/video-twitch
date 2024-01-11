import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Dshboard</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
