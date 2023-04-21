import Link from "next/link";
import {
  registerUniformComponent,
  ComponentProps,
} from "@uniformdev/canvas-react";
import Splitter from "../atoms/Splitter";

type HeroProps = ComponentProps<{
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  entry: any;
}>;

export function Hero({
  title,
  text,
  buttonText,
  buttonLink,
  entry,
}: HeroProps) {
  // const { image } = entry.fields;
  // const { fields } = image;
  // const { file } = fields;
  // const { details, url, fileName } = file;
  console.log("Entry - ", entry);
  console.log("bodyText", entry?.fields?.bodyText?.content[0].content[0].value);

  const url = entry?.fields?.image?.fields?.file?.url;

  return (
    <>
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
            <p className="uppercase tracking-loose w-full">
              This is Uniform demo
            </p>
            <h1
              className="my-4 text-5xl font-bold leading-tight"
              dangerouslySetInnerHTML={{ __html: entry?.fields?.headline }}
            />
            <p
              className="leading-normal text-2xl mb-8"
              dangerouslySetInnerHTML={{
                __html: entry?.fields?.bodyText?.content[0].content[0].value,
              }}
            />
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            {url && (
              <img
                className="w-full md:w-4/5 z-50 min-h-500 max-h-500"
                height={500}
                src={url}
              />
            )}
          </div>
        </div>
      </div>
      <Splitter />
    </>
  );
}

registerUniformComponent({
  type: "hero",
  component: Hero,
});
