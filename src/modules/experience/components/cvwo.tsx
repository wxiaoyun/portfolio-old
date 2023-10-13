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
import { experience } from "@/constants";
import { CvwoLogo } from "@/modules";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";

export const Cvwo: React.FC = () => {
  const [value, setValue] = React.useState(["cvwo"]);

  return (
    <div className="w-full flex flex-col gap-3 items-start">
      <Card className="w-full bg-primary-foreground border-none shadow-lg">
        <Accordion type="multiple" value={value} onValueChange={setValue}>
          <AccordionItem value="cvwo">
            <AccordionTrigger className="pr-3">
              <CardHeader className="text-left w-full">
                <CvwoLogo />
                <CardTitle>{experience.cvwo.title}</CardTitle>
                <CardDescription>{experience.cvwo.roles}</CardDescription>
              </CardHeader>
            </AccordionTrigger>

            <AccordionContent>
              <CardContent className="flex flex-col gap-6">
                <Separator orientation="horizontal" />
                <p className="text-sm text-muted-foreground">
                  {experience.cvwo.description}
                </p>

                <div className="w-full flex justify-around text-muted-foreground">
                  <a
                    href={experience.cvwo.CVWO_PAGE_URL}
                    className="flex items-center gap-2 hover:opacity-70 transition"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {experience.cvwo.officialpage}
                    <OpenInNewWindowIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={experience.cvwo.CVWO_PROJECT_URL}
                    className="flex items-center gap-2 hover:opacity-70 transition"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {experience.cvwo.mywork}
                    <OpenInNewWindowIcon className="w-4 h-4" />
                  </a>
                </div>

                <Separator orientation="horizontal" />

                {experience.cvwo.items.map((item, index) => (
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

                <Separator orientation="horizontal" />
              </CardContent>
              <CardFooter className="w-full flex flex-col items-start">
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                  {experience.cvwo.time}
                </h4>
              </CardFooter>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
};

export default Cvwo;
