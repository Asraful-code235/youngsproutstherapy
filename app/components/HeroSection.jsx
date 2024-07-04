import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative bg-[url('/images/youngsproutstherapy-image-01.jpg')] bg-no-repeat bg-cover bg-center py-10 md:py-20 px-6 rounded-xl max-w-screen-2xl mx-auto">
      <div className="absolute inset-0 bg-black opacity-50 md:opacity-0 rounded-lg"></div>
      <div className="relative grid md:grid-cols-2 grid-cols-1 gap-6">
        <div></div>
        <div>
          <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold leading-snug md:leading-tight text-white md:text-black">
            <span className="text-brand-color-one">Young Sprouts:</span> <br />
            Guiding Growth in Child, Teen, and Family Therapy in Vaughan
          </h1>
          <p className="text-center md:text-left text-lg md:text-xl mt-6 text-white md:text-black">
            Psychotherapy & Psychological Counselling for Kids, <br /> Teens and
            Families in Vaughan/Thornhill
          </p>
          <div className="flex flex-col w-4/12 gap-3 mt-6">
            <Button variant="brandButton">Book A Free Consult</Button>
            <Button>Call Now - (289) 579-4769</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
