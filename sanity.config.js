import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./lib/sanity/schemas";
import { projectId, dataset, previewSecretId } from "./lib/sanity/config";

import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { table } from "@sanity/table";
import { codeInput } from "@sanity/code-input";
import { pageStructure } from "./lib/sanity/plugins/settings";

export const PREVIEWABLE_DOCUMENT_TYPES = ["post"];

export default defineConfig({
  name: "default",
  title: "Youngsproutstherapy",
  basePath: "/studio",
  projectId: projectId,
  dataset: dataset,

  plugins: [
    deskTool({
      structure: pageStructure([]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // singletonPlugin(),
    visionTool(),
    unsplashImageAsset(),
    table(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
