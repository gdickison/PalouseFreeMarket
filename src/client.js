import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2022-02-26',
    useCdn: true
})
