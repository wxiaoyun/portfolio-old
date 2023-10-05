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

export const Bachelor: React.FC = () => {
  const [value, setValue] = React.useState(["nus"]);

  return (
    <div className="w-full flex flex-col gap-3 items-start">
      <Card className="w-full">
        <Accordion type="multiple" value={value} onValueChange={setValue}>
          <AccordionItem value="nus">
            <AccordionTrigger className="pr-3">
              <CardHeader className="text-left">
                <img
                  src="National_University_of_Singapore_Logo.png"
                  alt="National University of Singapore Logo"
                  className="w-full px-6 mb-6"
                />

                <CardTitle>Bachelor of Computing in Computer Science</CardTitle>

                <CardDescription>
                  National University of Singapore
                </CardDescription>
              </CardHeader>
            </AccordionTrigger>

            <AccordionContent>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <p className="text-sm text-muted-foreground">GPA: 4.68/5.0</p>

                  <Separator orientation="horizontal" />

                  <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                    Relevant Coursework:
                  </h4>

                  <ul>
                    <li className="list-disc list-inside">
                      <p className="inline">
                        CS1101S Programming Methodology: A
                      </p>
                    </li>

                    <li className="list-disc list-inside">
                      <p className="inline">
                        CS2030S Programming Methodology II: A
                      </p>
                    </li>

                    <li className="list-disc list-inside">
                      <p className="inline">
                        CS2040S Data Structures and Algorithms: A
                      </p>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                  Aug 2022 - May 2026 | Singapore
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
