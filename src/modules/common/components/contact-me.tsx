import React from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  PERSONAL_EMAIL,
  EmailPNG,
  GITHUB_FORAEONS,
  LINKEDIN_WU_XIAOYUN,
  MAIL_ME,
} from "@/constants";
import { GithubIcon, LinkedInIcon } from ".";
import { Separator } from "@/components/ui/separator";

const iconSize = 25;

export const ContactBtn: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger className="ml-auto lg:ml-0">
        <Button variant="ghost" size="icon">
          <Phone className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle contact-me modal window</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-2">
          <DialogTitle>Contact Me</DialogTitle>

          <Separator />

          <DialogDescription>
            You can reach me at any of the following links:
          </DialogDescription>

          <a
            href={GITHUB_FORAEONS}
            rel="noopener noreferrer"
            target="_blank"
            className="flex gap-3 items-center"
          >
            <GithubIcon size={iconSize} />
            <span className="text-sm font-medium leading-none text-muted-foreground hover:opacity-70 transition">
              {GITHUB_FORAEONS}
            </span>
          </a>

          <a
            href={LINKEDIN_WU_XIAOYUN}
            rel="noopener noreferrer"
            target="_blank"
            className="flex gap-3 items-center"
          >
            <LinkedInIcon size={iconSize} />
            <span className="text-sm font-medium leading-none text-muted-foreground hover:opacity-70 transition">
              {LINKEDIN_WU_XIAOYUN}
            </span>
          </a>

          <a
            href={MAIL_ME}
            rel="noopener noreferrer"
            target="_blank"
            className="flex gap-3 items-center"
          >
            <img
              src={EmailPNG.src}
              width={iconSize}
              height={iconSize}
              alt={EmailPNG.alt}
            />
            <span className="text-sm font-medium leading-none text-muted-foreground hover:opacity-70 transition">
              {PERSONAL_EMAIL}
            </span>
          </a>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
