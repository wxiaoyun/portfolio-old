import React from "react";
import * as RadixSeparator from "@radix-ui/react-separator";

const Separator: React.FC<{ orientation?: "vertical" | "horizontal" }> = ({
  orientation,
}) => {
  return (
    <RadixSeparator.Root
      className="bg-slate-600 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
      orientation={orientation}
    />
  );
};

export default Separator;
