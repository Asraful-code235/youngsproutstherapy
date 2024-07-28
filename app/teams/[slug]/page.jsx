import { getTeamBySlug } from "../../../lib/sanity/client";
import TeamDefault from "./components/TeamDefault";

export async function generateMetadata({ params }) {
  const team = await getTeamBySlug(params.slug);
  return { title: team.name };
}

export default async function TeamDetails({ params }) {
  const team = await getTeamBySlug(params.slug);
  return <TeamDefault team={team} />;
}
