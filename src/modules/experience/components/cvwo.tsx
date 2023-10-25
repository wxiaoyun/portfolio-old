import React from "react";
import {
  OpenInNewWindowIcon,
  SewingPinFilledIcon,
} from "@radix-ui/react-icons";
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
import {
  TopAccordionDropDownTimeout,
  experience,
} from "@/constants";
import { CvwoLogo } from "@/modules";

const iconSize = 30;

export const Cvwo: React.FC = () => {
  const [value, setValue] = React.useState<string[]>([]);

  React.useEffect(() => {
    const timeoutID = setTimeout(() => {
      setValue([experience.cvwo.accordion_value]);
    }, TopAccordionDropDownTimeout);

    return () => clearTimeout(timeoutID);
  }, []);

  return (
      <Card className="w-full bg-primary-foreground border-none shadow-lg">
        <Accordion type="multiple" value={value} onValueChange={setValue}>
          <AccordionItem value={experience.cvwo.accordion_value}>
            <AccordionTrigger className="pr-3">
              <CardHeader className="text-left w-full">
                <CvwoLogo />
                <CardTitle>{experience.cvwo.title}</CardTitle>
                <CardDescription>{experience.cvwo.position}</CardDescription>
              </CardHeader>
            </AccordionTrigger>

            <AccordionContent>
              <CardContent className="flex flex-col gap-6">
                <Separator/>
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

                <Separator/>

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

                <Separator/>

                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.cvwo.techstack.map((item, index) => (
                    <img
                      key={index}
                      src={item.src}
                      alt={item.alt}
                      height={iconSize}
                      width={iconSize}
                    />
                  ))}
                </div>

                <Separator/>
              </CardContent>
              <CardFooter className="flex">
                <h4 className="scroll-m-20 text-sm lg:text-lg font-semibold tracking-tight">
                  {experience.cvwo.time}
                </h4>
                <SewingPinFilledIcon className="ml-auto w-4 h-4" />
                <h4 className="scroll-m-20 text-right text-sm lg:text-lg font-semibold tracking-tight">
                  {experience.cvwo.location}
                </h4>
              </CardFooter>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
  );
};

export default Cvwo;
