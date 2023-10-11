import React from "react";
import { Separator } from "@/components/ui/separator";
import { GithubIcon } from ".";
import {
  BunPNG,
  DEVICON_URL,
  EmailPNG,
  FLATICON_URL,
  GITHUB_FORAEONS,
  LINKEDIN_WU_XIAOYUN,
  MAIL_ME,
  ReactLogo,
  TailwindCSSLogo,
} from "@/constants";

const iconSize = 25;

export const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-0 w-full flex flex-row justify-between p-4 bg-background text-primary">
      <p className="text-sm text-muted-foreground break-words w-1/3 self-center">
        Icons from{" "}
        <a
          href={FLATICON_URL}
          title="flaticons"
          className="text-sm self-end"
          rel="noopener noreferrer"
          target="_blank"
        >
          Flaticon
        </a>{" "}
        and{" "}
        <a
          href={DEVICON_URL}
          title="devicon"
          className="text-sm self-end"
          rel="noopener noreferrer"
          target="_blank"
        >
          Devicon
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
              <svg viewBox="0 0 128 128" height={iconSize} width={iconSize}>
                <path
                  fill="#0076b2"
                  d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
                ></path>
                <path
                  fill="#fff"
                  d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                ></path>
              </svg>
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
            <img
              src={ReactLogo.src}
              height={iconSize}
              width={iconSize}
              alt={ReactLogo.alt}
            />
            <img
              src={TailwindCSSLogo.src}
              height={iconSize}
              width={iconSize}
              alt={TailwindCSSLogo.alt}
            />
            <img src={BunPNG.src} width="25" height="25" alt={BunPNG.alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
