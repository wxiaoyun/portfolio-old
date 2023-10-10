import React from "react";
import { motion } from "framer-motion";
import { fadeSlideInVariants } from "@/lib/variants";
import {
  Card,
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
import { education } from "@/constants";

export const NUSCollege: React.FC = () => {
  const [value, setValue] = React.useState(["nusc"]);

  return (
    <motion.div
      className="w-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={fadeSlideInVariants}
        className="flex flex-col gap-3 items-start"
      >
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
                <CardFooter>
                  <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                    {education.nusc.time}
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

export default NUSCollege;
