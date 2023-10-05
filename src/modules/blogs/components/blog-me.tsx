import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fadeInAnimation } from "@/lib/animation";

export const BlogMe: React.FC<{ feed: MediumFeed }> = ({ feed }) => {
  return (
    <motion.div
      className="w-full mt-12"
      initial={{ opacity: 0, height: 0 }}
      animate={fadeInAnimation}
    >
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
    </motion.div>
  );
};

export default BlogMe;
