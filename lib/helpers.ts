import { ExperienceMapper } from "@ninetailed/experience.js-utils";

export function mapExperiences(experiences: any) {
  return (experiences || [])
    .map((experience: any) => {
      return {
        name: experience.nt_name,
        type: experience.nt_type,
        config: experience.nt_config,
        audience: {
          id: experience.nt_audience[0].nt_audience_id,
        },
        id: experience.uid,
        variants: experience.nt_variants?.map((variant: any) => {
          return {
            id: variant.uid,
            ...variant,
          };
        }),
      };
    })
    .filter((experience: any) => ExperienceMapper.isExperienceEntry(experience))
    .map((experience: any) => ExperienceMapper.mapExperience(experience));
}
