import React from "react";

import { motion } from "framer-motion";
import { fadeSlideInVariants } from "@/lib/variants";
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
import { project } from "@/constants";

export const CommunityLib: React.FC = () => {
  const [value, setValue] = React.useState(["community-lib"]);

  return (
    <motion.div
      className="w-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div
        variants={fadeSlideInVariants}
        className="flex flex-col gap-3 items-start"
      >
        <Card className="w-full bg-primary-foreground border-none shadow-lg">
          <Accordion type="multiple" value={value} onValueChange={setValue}>
            <AccordionItem value="community-lib">
              <AccordionTrigger className="pr-3">
                <CardHeader className="text-left">
                  <CardTitle>{project.communitylib.title}</CardTitle>

                  <CardDescription>
                    {project.communitylib.description}
                  </CardDescription>
                </CardHeader>
              </AccordionTrigger>

              <AccordionContent>
                <CardContent>
                  <div className="flex flex-col gap-6">
                    <Separator orientation="horizontal" />

                    <p className="text-sm text-muted-foreground">
                      {project.communitylib.details}
                    </p>

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

                    <Separator orientation="horizontal" />
                  </div>
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
      </motion.div>
    </motion.div>
  );
};

export default CommunityLib;
