import React from "react";
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
import { cca } from "@/constants";

export const CvwoExco: React.FC = () => {
  const [value, setValue] = React.useState(["cvwoexco"]);

  return (
    <div className="w-full flex flex-col gap-3 items-start">
      <Card className="w-full bg-primary-foreground border-none shadow-lg">
        <Accordion type="multiple" value={value} onValueChange={setValue}>
          <AccordionItem value="cvwoexco">
            <AccordionTrigger className="pr-3">
              <CardHeader className="text-left">
                <CardTitle>{cca.cvwoexco.title}</CardTitle>

                <CardDescription>{cca.cvwoexco.position}</CardDescription>
              </CardHeader>
            </AccordionTrigger>

            <AccordionContent>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <p className="text-sm text-muted-foreground">
                    {cca.cvwoexco.p1}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                  {cca.cvwoexco.time}
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
