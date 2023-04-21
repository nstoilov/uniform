import React from "react";
import Link from "next/link";
import {
  registerUniformComponent,
  ComponentProps,
} from "@uniformdev/canvas-react";
import { ToggleEmbeddedContextDevTools } from "@uniformdev/context-devtools";
import getConfig from "next/config";

type Props = ComponentProps<{
  testParam: string;
  entry: any;
}>;

const TestNikolai = ({ testParam, entry }: Props) => {
  console.log("testParam", testParam);
  console.log("entry", entry);
  return (
    <div className="w-full flex flex-col md:flex-row py-4">
      <div className="flex-1 mb-6"></div>
      <p className="text-gray-900 text-right flex-1 leading-8">{testParam}</p>
    </div>
  );
};

registerUniformComponent({
  type: "testNikolai",
  component: TestNikolai,
});

export default TestNikolai;
