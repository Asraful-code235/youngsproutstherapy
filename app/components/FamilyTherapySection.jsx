import Image from "next/image";
import Link from "next/link";

export default function FamilyTherapySection() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto py-16 md:px-0 px-2 ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10">
          <div className="flex flex-col justify-center bg-[#e8f0fe] p-6 md:p-10 rounded-xl text-lg font-semibold text-gray-700">
            <p className="leading-relaxed">
              We are a dedicated team of child and family therapists in Vaughan
              consisting of social workers and registered psychotherapists. With
              expertise in providing comprehensive psychotherapy and counselling
              services, we are committed to:
            </p>
            <ul className="my-4 list-disc ml-6">
              <li>
                Supporting the emotional well-being of children, teens, and
                families
              </li>
              <li>
                Ensuring accessibility and affordability through coverage by
                most insurance companies
              </li>
            </ul>
            <p>
              Currently, we are offering counseling and individual therapy for
              kids, teens, and families online and in person at our conveniently
              located office in the heart of Thornhill.
            </p>
            <div>
              <Link href="/">Get in touch</Link> to see how therapy can help
              your child and family today!
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-xl md:text-5xl md:leading-snug font-bold mb-8 text-[#1F2A37]">
              Expert Psychotherapy and Counseling for Kids, Teens, and Families
            </h2>

            <div>
              <Image
                className="ml-auto w-full rounded-xl"
                src="/images/youngsproutstherapy-image-02.png"
                width={900}
                height={500}
                alt="Family Therapy Vaughan | Young Sprouts Therapy | Vaughan, ON"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
