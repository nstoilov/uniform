import Head from "next/head";
import dynamic from "next/dynamic";
import { RootComponentInstance } from "@uniformdev/canvas";
import {
  UniformComposition,
  UniformSlot,
  ComponentProps,
  createUniformApiEnhancer,
} from "@uniformdev/canvas-react";

import "./canvas-components";
import { UniformDeployedPreviewBanner } from "@/components/atoms/UniformDeployedPreviewBanner";
import React from "react";

const PreviewDevPanel = dynamic(
  () => import("lib/preview/PreviewDevPanel/PreviewDevPanel")
);

type MainContainerProps = ComponentProps<{
  preview: boolean;
  data: RootComponentInstance;
}>;

export default function MainContainer({
  data: composition,
  preview,
}: MainContainerProps) {
  // Enables Contextual Editing in Uniform Canvas
  // @see https://docs.uniform.app/capabilities/composition/contextual-editing
  const contextualEditingEnhancer = createUniformApiEnhancer({
    apiUrl: "/api/preview",
  });
  console.log("composition", composition);
  return (
    <>
      <Head>
        <title>{`UniformConf${
          composition?._name ? ` | ${composition?._name}` : ""
        }`}</title>
        <meta name="description" content="UniformConf"></meta>
      </Head>
      <div>
        <UniformDeployedPreviewBanner />
        <UniformComposition
          data={composition}
          contextualEditingEnhancer={contextualEditingEnhancer}
        >
          <UniformSlot name="header" />
          <UniformSlot name="testNikolai" />
          <UniformSlot name="content" />
          <UniformSlot name="footer" />
        </UniformComposition>
        {preview && (
          <PreviewDevPanel preview={preview} composition={composition} />
        )}
      </div>
    </>
  );
}
