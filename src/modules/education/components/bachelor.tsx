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
import { education, NUSLogo, TopAccordionDropDownTime } from "@/constants";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Bachelor: React.FC = () => {
  const [value, setValue] = React.useState<string[]>([]);

  React.useEffect(() => {
    const timeoutID = setTimeout(() => {
      setValue([education.nus.accordion_value]);
    }, TopAccordionDropDownTime);

    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <div className="w-full flex flex-col gap-3 items-start">
      <Card className="w-full bg-primary-foreground border-none shadow-lg">
        <Accordion type="multiple" value={value} onValueChange={setValue}>
          <AccordionItem value={education.nus.accordion_value}>
            <AccordionTrigger className="pr-3">
              <CardHeader className="text-left w-full">
                <div className="mx-6 mb-6">
                  <AspectRatio ratio={NUSLogo.width! / NUSLogo!.height!}>
                    <img src={NUSLogo.src} alt={NUSLogo.alt} />
                  </AspectRatio>
                </div>

                <CardTitle>{education.nus.title}</CardTitle>

                <CardDescription>{education.nus.subtitle}</CardDescription>
              </CardHeader>
            </AccordionTrigger>

            <AccordionContent>
              <CardContent className="flex flex-col gap-6">
                <Separator orientation="horizontal" />

                <p className="text-sm text-muted-foreground">
                  {education.nus.gpa}
                </p>
                
                <h4 className="scroll-m-20 text-left text-lg font-mono font-semibold tracking-tight">
                  {education.nus.compsci.title}
                </h4>
              
                <ul className="flex flex-col gap-2 font-mono">
                  {education.nus.compsci.courselist.map((item, index) => (
                    <li key={index} className="flex">
                      <small className="w-5/6 truncate text-sm leading-none">
                        {`${item.code} ${item.name}`}
                      </small>

                      <small className="w-1/6 text-right text-sm leading-none">
                        {item.grade}
                      </small>
                    </li>
                  ))}
                </ul>

                <Separator orientation="horizontal" />

                <h4 className="scroll-m-20 text-left text-lg font-sans font-semibold tracking-tight">
                  {education.nus.math.title}
                </h4>
              
                <ul className="flex flex-col gap-2">
                  {education.nus.math.courselist.map((item, index) => (
                    <li key={index} className="flex">
                      <small className="w-5/6 truncate text-sm font-normal leading-none">
                        {`${item.code} ${item.name}`}
                      </small>

                      <small className="w-1/6 text-right text-sm font-medium leading-none">
                        {item.grade}
                      </small>
                    </li>
                  ))}
                </ul>

                <Separator orientation="horizontal" />

                <h4 className="scroll-m-20 text-left text-lg font-semibold tracking-tight">
                  {education.nus.others.title}
                </h4>
              
                <ul className="flex flex-col gap-2">
                  {education.nus.others.courselist.map((item, index) => (
                    <li key={index} className="flex">
                      <small className="w-5/6 truncate text-sm font-normal leading-none">
                        {`${item.code} ${item.name}`}
                      </small>

                      <small className="w-1/6 text-right text-sm font-medium leading-none">
                        {item.grade}
                      </small>
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
    </div>
  );
};

export default Bachelor;
