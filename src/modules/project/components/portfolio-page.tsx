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
import { project, GITHUB_FORAEONS_PORTFOLIO_REPO } from "@/constants";
import { GithubIcon, PortfolioLogo } from "@/modules";

const iconSize = 20;

export const PortfolioPage: React.FC = () => {
  const [value, setValue] = React.useState(["portfolio-page"]);

  return (
    <div className="w-full flex flex-col gap-3 items-start">
      <Card className="w-full bg-primary-foreground border-none shadow-lg">
        <Accordion type="multiple" value={value} onValueChange={setValue}>
          <AccordionItem value="portfolio-page">
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
                <p className="leading-7">{project.portfolio.p1}</p>
                <p className="leading-7">{project.portfolio.p2}</p>
                <Separator orientation="horizontal" />{" "}
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                  {project.portfolio.time}
                </h4>

                <a
                  href={GITHUB_FORAEONS_PORTFOLIO_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <p className="text-sm text-muted-foreground">Source code</p>
                  <GithubIcon size={iconSize} />
                </a>
              </CardFooter>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
};

export default PortfolioPage;
