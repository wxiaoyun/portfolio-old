import React from "react";
import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedInIcon } from ".";
import {
  BUN_URL,
  BunLogo,
  DEVICON_URL,
  EmailPNG,
  FLATICON_URL,
  GITHUB_FORAEONS,
  LINKEDIN_WU_XIAOYUN,
  MAIL_ME,
  REACT_URL,
  ReactLogo,
  TAILWIND_URL,
  TailwindCSSLogo,
} from "@/constants";

const iconSize = 25;

export const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-0 w-full flex flex-row justify-between p-4 bg-background text-primary">
      <p className="text-sm text-muted-foreground break-words w-1/3 self-center">
        <span>{"Icons from "}</span>
        <a
          href={FLATICON_URL}
          title="flaticons"
          className="text-sm self-end"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>{"Flaticon"}</span>
        </a>
        <span>{" and "}</span>
        <a
          href={DEVICON_URL}
          title="devicon"
          className="text-sm self-end"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>{"Devicon"}</span>
        </a>
      </p>

      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-2">
          <small className="text-sm font-medium leading-none">
            Get in touch:
          </small>

          <div className="flex gap-2">
            <a href={GITHUB_FORAEONS} rel="noopener noreferrer" target="_blank">
              <GithubIcon size={iconSize} />
            </a>

            <a
              href={LINKEDIN_WU_XIAOYUN}
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInIcon size={iconSize} />
            </a>
            <a href={MAIL_ME} rel="noopener noreferrer" target="_blank">
              <img
                src={EmailPNG.src}
                width={iconSize}
                height={iconSize}
                alt={EmailPNG.alt}
              />
            </a>
          </div>
        </div>

        <Separator orientation="vertical" />

        <div className="flex flex-col gap-2">
          <small className="text-sm font-medium leading-none">
            Built with:
          </small>

          <div className="flex gap-2">
            <a href={REACT_URL} rel="noopener noreferrer" target="_blank">
              <img
                src={ReactLogo.src}
                height={iconSize}
                width={iconSize}
                alt={ReactLogo.alt}
              />
            </a>
            <a href={TAILWIND_URL} rel="noopener noreferrer" target="_blank">
              <img
                src={TailwindCSSLogo.src}
                height={iconSize}
                width={iconSize}
                alt={TailwindCSSLogo.alt}
              />
            </a>
            <a href={BUN_URL} rel="noopener noreferrer" target="_blank">
              <img src={BunLogo.src} width="25" height="25" alt={BunLogo.alt} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
