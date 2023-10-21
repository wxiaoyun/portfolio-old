import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DigitalLib, project } from "@/constants";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const CommunityLib: React.FC = () => {
  const [value, setValue] = React.useState(["community-lib"]);

  return (
    <Card className="w-full bg-primary-foreground border-none shadow-lg">
      <Accordion type="multiple" value={value} onValueChange={setValue}>
        <AccordionItem value="community-lib">
          <AccordionTrigger className="pr-3">
            <CardHeader className="text-left w-full">
              <div className="mx-6 mb-6 bg-[#303A42] rounded-md shadow-lg overflow-hidden">
                <AspectRatio ratio={DigitalLib.width! / DigitalLib!.height!}>
                  <img
                    src={DigitalLib.src}
                    alt={DigitalLib.alt}
                  />
                </AspectRatio>
              </div>
              
              <CardTitle>{project.communitylib.title}</CardTitle>

              <CardDescription>
                {project.communitylib.description}
              </CardDescription>
            </CardHeader>
          </AccordionTrigger>

          <AccordionContent>
            <CardContent className="flex flex-col gap-6">
              <Separator orientation="horizontal" />

              <p className="text-sm text-muted-foreground">
                {project.communitylib.details}
              </p>

              <Separator orientation="horizontal" />

              {project.communitylib.items.map((item, index) => (
                <div key={index}>
                  <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h4>

                  <ul className="ml-4">
                    {item.paragraphs.map((item, index) => (
                      <li key={index} className="list-disc">
                        <p className="inline">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <Separator />
            </CardContent>
            <CardFooter>
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                {project.communitylib.time}
              </h4>
            </CardFooter>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default CommunityLib;
