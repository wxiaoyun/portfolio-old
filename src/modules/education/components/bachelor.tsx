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
import { education, NUSLogo } from "@/constants";

export const Bachelor: React.FC = () => {
  const [value, setValue] = React.useState(["nus"]);

  return (
    <div className="w-full flex flex-col gap-3 items-start">
      <Card className="w-full bg-primary-foreground border-none shadow-lg">
        <Accordion type="multiple" value={value} onValueChange={setValue}>
          <AccordionItem value="nus">
            <AccordionTrigger className="pr-3">
              <CardHeader className="text-left">
                <img
                  src={NUSLogo.src}
                  alt={NUSLogo.alt}
                  className="w-full px-6 mb-6"
                />

                <CardTitle>{education.nus.title}</CardTitle>

                <CardDescription>{education.nus.subtitle}</CardDescription>
              </CardHeader>
            </AccordionTrigger>

            <AccordionContent>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <Separator orientation="horizontal" />

                  <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                    {education.nus.coursework.title}
                  </h4>

                  <ul className="ml-4">
                    {education.nus.coursework.courselist.map((item, index) => (
                      <li key={index} className="list-disc">
                        <p className="inline">{item}</p>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-muted-foreground">
                    {education.nus.gpa}
                  </p>

                  <Separator orientation="horizontal" />
                </div>
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
    </div>
  );
};

export default Bachelor;
