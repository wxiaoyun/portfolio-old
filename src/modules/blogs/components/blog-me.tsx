import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const BlogMe: React.FC<{ feed: MediumFeed }> = ({ feed }) => {
  return (
    <div className="w-full flex flex-row gap-3 justify-start items-center">
      <a href={feed.link} target="_blank" rel="noopener noreferrer">
        <Avatar>
          <AvatarImage src={feed.image} alt={feed.description} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </a>
      <p className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Stories by me on Medium
      </p>
    </div>
  );
};

export default BlogMe;
