import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
    apiVersion: '2022-02-26',
    useCdn: true
})
