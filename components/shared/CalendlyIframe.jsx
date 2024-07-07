const CalendlyIframe = () => {
  return (
    <section className="py-16 bg-[#FBFCFD]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-8">
          Book Your Free 15-Minute Consultation
        </h2>
        <p className="text-center text-gray-600">
          See how our therapy services can help your child and family.
        </p>
        <div className="flex justify-center ">
          <iframe
            src="https://calendly.com/youngsproutstherapy/15-minute-consult?month=2024-07"
            width="100%"
            frameBorder="0"
            className="min-h-[80vh] border-0 rounded-lg bg-white"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CalendlyIframe;
