import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <div>
      <Navigation />
      <h1>HELLOW WORLD</h1>

      {/* this will create full page reload */}
      {/* <a href="/cabins">Explore cabins</a> */}
      <Link href="/cabins">Explore Luxury</Link>
    </div>
  );
}
