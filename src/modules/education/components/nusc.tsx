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
import { education } from "@/constants";

export const NUSCollege: React.FC = () => {
  const [value, setValue] = React.useState(["nusc"]);

  return (
    <Card className="w-full bg-primary-foreground border-none shadow-lg">
      <Accordion type="multiple" value={value} onValueChange={setValue}>
        <AccordionItem value="nusc">
          <AccordionTrigger className="pr-3">
            <CardHeader className="text-left">
              <img
                src="NUS_College_Logo.png"
                alt="NUS College Logo"
                className="w-full px-6 mb-6 min-h-[200px] object-contain"
              />

              <CardTitle>{education.nusc.title}</CardTitle>

              <CardDescription>{education.nusc.subtitle}</CardDescription>
            </CardHeader>
          </AccordionTrigger>

          <AccordionContent>
            <CardContent className="flex flex-col gap-6">
              <Separator />

              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                {education.nusc.coursework.title}
              </h4>

              <ul className="ml-4">
                {education.nusc.coursework.courselist.map((item, index) => (
                  <li key={index} className="list-disc">
                    <p className="inline">{item}</p>
                  </li>
                ))}
              </ul>

              <Separator />
            </CardContent>
            <CardFooter>
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                {education.nusc.time}
              </h4>
            </CardFooter>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default NUSCollege;
