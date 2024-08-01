import Fees from "./components/Fees";

export const metadata = {
  title: "Fees for Child, Teen, and Family Therapy in Vaughan",
  description:
    "Competitive rates for child, teen, and family therapy services in Vaughan. Our registered therapists and social workers are covered by most workplace insurance.",
};

const pricingPlans = [
  {
    id: 1,
    title: "Individual Child and Teen Therapy",
    price: "$185 / 50",
    period: "Min",
    features:
      "Our Individual Child and Teen Therapy service focuses on providing personalized support to children and teenagers facing emotional, behavioral, or developmental issues. Our therapists create a nurturing environment where young individuals can express themselves, develop coping skills, and work towards positive growth and well-being.",
    img: "/images/child_counseling.webp",
  },
  {
    id: 2,
    title: "Parent Coaching",
    price: "$185 / 50",
    period: "Min",
    features:
      "Parent Coaching is designed to empower parents with effective strategies and tools to navigate the challenges of parenting. Our experienced coaches provide guidance, support, and practical advice to help parents build strong relationships with their children and promote positive behavior.",
    img: "/images/mother_son.webp",
  },
  {
    id: 3,
    title: "Family Therapy and Couples Counselling",
    price: "$200 / 50",
    period: "Min",
    features:
      "Our Family Therapy service offers a warm and nurturing environment for families to address conflicts, improve communication, and build stronger, healthier relationships. Our Couples Counselling service provides a safe and supportive space for couples to address relationship challenges, enhance communication, and strengthen their bond.",
    img: "/images/couple.webp",
  },
];

const PricingSection = () => {
  return <Fees pricingPlans={pricingPlans} />;
};

export default PricingSection;
