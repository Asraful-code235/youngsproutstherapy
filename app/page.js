import HomeComponent from "./components/HomeContent";

export const metadata = {
  title: "Young Sprouts | Child, Teen &amp; Family Therapy | Vaughan",
  description:
    "Psychotherapy and counseling for kids &amp; teens in Vaughan. Find support for kids &amp; teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
};

export default function Home() {
  return (
    <main className="">
      <HomeComponent />
    </main>
  );
}
