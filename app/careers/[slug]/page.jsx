import { CAREER_ROLES, getRoleBySlug, getAllRoleSlugs } from "@/data/careerData";
import JobApplicationClient from "@/components/career/JobApplicationClient";

export async function generateStaticParams() {
  return getAllRoleSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const role = getRoleBySlug(params.slug);
  return {
    title: `${role.title} — Careers | CYBERSHIELD`,
    description: role.description.slice(0, 160),
    openGraph: {
      title: `${role.title} — Careers | CYBERSHIELD`,
      description: role.description.slice(0, 160),
    },
  };
}

export default function CareerJobDetailPage({ params }) {
  const role = getRoleBySlug(params.slug);
  return <JobApplicationClient role={role} allRoles={CAREER_ROLES} />;
}
