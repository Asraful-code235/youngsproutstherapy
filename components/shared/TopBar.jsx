import Link from "next/link";

export default function TopBar() {
  return (
    <Link
      className="font-bold"
      href="https://youngsproutstherapy.janeapp.com/"
      target="_blank"
    >
      <div className="text-black text-center mx-auto py-1.5 font-semibold bg-brand-color-three">
        Ready to schedule an appointment? <span> Click Here</span>
      </div>
    </Link>
  );
}
