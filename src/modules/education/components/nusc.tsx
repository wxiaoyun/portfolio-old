import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { NUSCLogo, education } from "@/constants";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";

export const NUSCollege: React.FC = () => {
  const [value, setValue] = React.useState(["nusc"]);

  return (
    <Card className="w-full bg-primary-foreground border-none shadow-lg">
      <Accordion type="multiple" value={value} onValueChange={setValue}>
        <AccordionItem value="nusc">
          <AccordionTrigger className="pr-3">
            <CardHeader className="text-left w-full">
              <div className="mx-6 mb-6">
                <AspectRatio ratio={NUSCLogo.width! / NUSCLogo!.height!}>
                  <img src={NUSCLogo.src} alt={NUSCLogo.alt} />
                </AspectRatio>
              </div>

              <CardTitle>{education.nusc.title}</CardTitle>

              <CardDescription>{education.nusc.subtitle}</CardDescription>
            </CardHeader>
          </AccordionTrigger>

          <AccordionContent>
            <CardContent className="flex flex-col gap-6">
              <Separator />

                <h4 className="scroll-m-20 text-left text-lg font-semibold tracking-tight">
                  {education.nusc.coursework.title}
                </h4>
              
                <ul className="flex flex-col">
                  {education.nusc.coursework.courselist.map((item, index) => (
                    <li key={index} className="flex">
                      <small className="w-5/6 truncate text-sm font-normal">
                        {`${item.code} ${item.name}`}
                      </small>

                      <small className="w-1/6 text-right text-sm font-medium">
                        {item.grade}
                      </small>
                    </li>
                  ))}
                </ul>

              <Separator />
            </CardContent>
              <CardFooter className="flex">
                <h4 className="scroll-m-20 text-sm lg:text-lg font-semibold tracking-tight">
                  {education.nus.time}
                </h4>
                <SewingPinFilledIcon className="ml-auto w-4 h-4" />
                <h4 className="scroll-m-20 text-right text-sm lg:text-lg font-semibold tracking-tight">
                  {education.nus.location}
                </h4>
              </CardFooter>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default NUSCollege;
