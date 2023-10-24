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
import { TopAccordionDropDownTimeout, project } from "@/constants";
import { GithubIcon, PortfolioLogo } from "@/modules";

const iconSize = 15;

export const PortfolioPage: React.FC = () => {
  const [value, setValue] = React.useState<string[]>([]);

  React.useEffect(() => {
    const timeoutID = setTimeout(() => {
      setValue([project.portfolio.accordion_value]);
    }, TopAccordionDropDownTimeout);

    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <div className="w-full flex flex-col gap-3 items-start">
      <Card className="w-full bg-primary-foreground border-none shadow-lg">
        <Accordion type="multiple" value={value} onValueChange={setValue}>
          <AccordionItem value={project.portfolio.accordion_value}>
            <AccordionTrigger className="pr-3">
              <CardHeader className="text-left w-full">
                <PortfolioLogo />

                <CardTitle>{project.portfolio.title}</CardTitle>

                <CardDescription>
                  {project.portfolio.description}
                </CardDescription>
              </CardHeader>
            </AccordionTrigger>

            <AccordionContent>
              <CardContent className="flex flex-col gap-6">
                <Separator orientation="horizontal" />
                <p className="text-sm text-muted-foreground">
                  {project.portfolio.p1}
                </p>
                <a
                  href={project.portfolio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto flex items-center gap-2 hover:opacity-70 transition"
                >
                  <p className="text-sm text-muted-foreground">Source code</p>
                  <GithubIcon size={iconSize} />
                </a>
                <Separator orientation="horizontal" />
                <p className="leading-7">{project.portfolio.p2}</p>
                <Separator orientation="horizontal" />{" "}
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <h4 className="scroll-m-20 text-sm lg:text-lg  font-semibold tracking-tight">
                  {project.portfolio.time}
                </h4>
              </CardFooter>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
};

export default PortfolioPage;
