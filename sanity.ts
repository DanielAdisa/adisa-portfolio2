import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

export const config = {
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2024-07-27",
    useCdn:process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor1 = (source: any) =>
    createImageUrlBuilder().image(source);