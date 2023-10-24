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
import { TopAccordionDropDownTimeout, cca } from "@/constants";
import { CvwoLogo } from "@/modules";

export const CvwoExco: React.FC = () => {
  const [value, setValue] = React.useState<string[]>([]);

  React.useEffect(() => {
    const timeoutID = setTimeout(() => {
      setValue([cca.cvwoexco.accordion_value]);
    }, TopAccordionDropDownTimeout);

    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <div className="w-full flex flex-col gap-3 items-start">
      <Card className="w-full bg-primary-foreground border-none shadow-lg">
        <Accordion type="multiple" value={value} onValueChange={setValue}>
          <AccordionItem value={cca.cvwoexco.accordion_value}>
            <AccordionTrigger className="pr-3">
              <CardHeader className="text-left w-full">
                <CvwoLogo />
                <CardTitle>{cca.cvwoexco.title}</CardTitle>
                <CardDescription>{cca.cvwoexco.position}</CardDescription>
              </CardHeader>
            </AccordionTrigger>

            <AccordionContent>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <Separator />
                  <p className="text-sm text-muted-foreground">
                    {cca.cvwoexco.description}
                  </p>

                  <a
                    href={cca.cvwoexco.CVWO_PAGE_URL}
                    className="flex items-center gap-2 hover:opacity-70 transition text-muted-foreground mx-auto"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {cca.cvwoexco.officialpage}
                    <OpenInNewWindowIcon className="w-4 h-4" />
                  </a>

                  <Separator />

                  {cca.cvwoexco.items.map((item, index) => (
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
                </div>
              </CardContent>
              <CardFooter className="flex">
                <h4 className="scroll-m-20 text-sm lg:text-lg font-semibold tracking-tight">
                  {cca.cvwoexco.time}
                </h4>
                <SewingPinFilledIcon className="ml-auto w-4 h-4" />
                <h4 className="scroll-m-20 text-right text-sm lg:text-lg font-semibold tracking-tight">
                  {cca.cvwoexco.location}
                </h4>
              </CardFooter>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
};

export default CvwoExco;
