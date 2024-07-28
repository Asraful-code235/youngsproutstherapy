import Modules from "@/components/Modules/Modules";
import { getServiceBySlug } from "@/lib/sanity/client";

export default async function Page({ params: { slug } }) {
  const service = await getServiceBySlug(slug);
  if (!service) return <span>No page found</span>;
  return (
    <article className="">
      <Modules modules={service?.contentModules} />;
    </article>
  );
}

// export async function generateMetadata({ params }) {
// 	const page = await getPage(params)
// 	if (!page) notFound()
// 	return processMetadata(page)
// }
