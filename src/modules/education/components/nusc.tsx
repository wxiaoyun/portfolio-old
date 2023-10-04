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

export const NUSCollege: React.FC = () => {
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
        <Card className="w-full">
          <Accordion type="multiple">
            <AccordionItem value="nusc">
              <AccordionTrigger className="pr-3">
                <CardHeader className="text-left">
                  <img
                    src="NUS_College_Logo.png"
                    alt="National University of Singapore Logo"
                    className="w-full px-6 mb-6"
                  />

                  <CardTitle>NUS Undergraduate Honours College</CardTitle>

                  <CardDescription>NUS College</CardDescription>
                </CardHeader>
              </AccordionTrigger>

              <AccordionContent>
                <CardFooter>
                  <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                    Aug 2022 - May 2026 | Singapore
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
