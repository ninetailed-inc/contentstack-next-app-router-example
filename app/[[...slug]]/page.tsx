import { getAllLandingPages, getLandingPage } from "@/lib/api";
import { mapExperiences } from "@/lib/helpers";
import ClientExperience from "@/components/client/ClientExperience";
import ClientHero from "@/components/client/ClientHero";

export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: { slug: string[] | undefined };
}) {
  const pageData =
    params.slug === undefined
      ? await getLandingPage("/")
      : await getLandingPage("/" + params.slug.join("/"));

  console.log(pageData);

  return (
    <>
      <div>Howdy! You visited the {params.slug} page!</div>
      <div>
        There are {pageData.sections.length} sections on this page,{" "}
        {
          pageData.sections.filter(
            (section: any) => section._content_type_uid === "hero"
          ).length
        }{" "}
        of which is a Hero section.
      </div>
      {pageData.sections.map((section: any) => {
        if (section._content_type_uid === "hero") {
          const mappedExperiences = mapExperiences(section.nt_experiences);
          return (
            <ClientExperience
              {...section}
              id={section.uid}
              key={section.uid}
              experiences={mappedExperiences}
              component={ClientHero}
            />
          );
        }
      })}
    </>
  );
}

export async function generateStaticParams() {
  const pages = await getAllLandingPages();
  const paths = pages
    .filter((page: any) => {
      return page.url !== "/";
    })
    .map((page: any) => {
      return { slug: page.url.replace(/^\/+/g, "").split("/") };
    });

  const allPaths = [...paths, { slug: [""] }];
  return allPaths;
}
