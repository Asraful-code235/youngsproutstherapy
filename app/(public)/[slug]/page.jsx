import ApproachAndSpecialties from "@/components/shared/ApproachAndSpecialties";
import NotFoundPage from "@/components/shared/NotFoundPage";
import PageContent from "@/components/shared/PageContent";
import ParentingGroupsTherapy from "@/components/shared/ParentingGroupsTherapy";

export default function Page({ params }) {
  if (params.slug === "approach-and-specialties") {
    return <ApproachAndSpecialties />;
  } else if (params.slug === "anxiety-therapy-for-kids-and-teens") {
    return (
      <PageContent
        title={
          <>
            Anxiety Therapists and Counseling <br />
            for Kids and Teens in Vaughan
          </>
        }
      />
    );
  } else if (params.slug === "behaviour-therapy-for-kids-and-teens") {
    return (
      <PageContent
        title={
          <>
            Behaviour Therapy in Vaughan for <br /> Kids and Teens
          </>
        }
      />
    );
  } else if (params.slug === "adhd-therapy-for-kids-and-teens") {
    return (
      <PageContent
        title={
          <>
            Therapy and Counseling in <br />
            Vaughan for Kids and Teens <br />
            with ADHD
          </>
        }
      />
    );
  } else if (params.slug === "autism-therapy-vaughan") {
    return (
      <PageContent
        title={
          <>
            Therapy and Counseling in Vaughan for <br />
            Kids and Teens with Autism Spectrum <br />
            Disorder (ASD)
          </>
        }
      />
    );
  } else if (params.slug === "trauma-therapy-for-kids-and-teens") {
    return (
      <PageContent
        title={
          <>
            Trauma Therapy and Counseling in <br />
            Vaughan for Kids and Teens
          </>
        }
      />
    );
  } else if (params.slug === "grief-therapy-for-kids-and-teens") {
    return (
      <PageContent
        title={
          <>
            Grief Therapy and Counseling in <br />
            Vaughan for Kids and Teens
          </>
        }
      />
    );
  } else if (params.slug === "therapy-for-parents-of-kids-and-teens") {
    return (
      <PageContent
        title={
          <>
            Therapy and Counseling in <br />
            Vaughan for Parents
          </>
        }
      />
    );
  } else if (params.slug === "couples-counseling") {
    return (
      <PageContent
        title={
          <>
            Therapy and Counseling for <br />
            Couples in Vaughan
          </>
        }
      />
    );
  } else if (params.slug === "clinical-supervision") {
    return (
      <PageContent
        title={
          <>
            Clinical Supervision for <br />
            Psychotherapists in Vaughan, <br />
            Ontario
          </>
        }
      />
    );
  } else if (params.slug === "group-therapy-for-kids-and-families") {
    return <ParentingGroupsTherapy />;
  } else {
    return <NotFoundPage />;
  }
}
