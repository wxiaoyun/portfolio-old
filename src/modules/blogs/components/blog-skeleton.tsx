import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { fadeInAnimation } from "@/lib/animation";

export const BlogSkeleton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, height: "auto" }}
      exit={{
        zIndex: -1,
        height: 0,
        opacity: 0,
        y: "-30vh",
      }}
      animate={fadeInAnimation}
      transition={{
        duration: 1,
        type: "spring",
        bounce: 0,
        opacity: { duration: 0.3, ease: "easeIn" },
      }}
      className="w-full"
    >
      <Card className="w-full mt-12 bg-primary-foreground border-none shadow-lg">
        <CardHeader className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <Skeleton className="bg-muted-foreground opacity-5 h-8 lg:h-12 w-[95%] rounded-md" />
            <Skeleton className="bg-muted-foreground opacity-5 h-8 lg:h-12 w-[80%] rounded-md delay-100" />
          </div>

          <div>
            <Skeleton className="bg-muted-foreground opacity-5 h-4 lg:h-6 w-[20%] rounded-md delay-200" />
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <Skeleton className="bg-muted-foreground opacity-5 h-36 lg:h-48 w-full rounded-md delay-300" />

          <Skeleton className="bg-muted-foreground opacity-5 h-4 lg:h-6 w-[90%] ml-auto rounded-md delay-400" />
          <Skeleton className="bg-muted-foreground opacity-5 h-4 lg:h-6 w-[90%] rounded-md delay-500" />
          <Skeleton className="bg-muted-foreground opacity-5 h-4 lg:h-6 w-[95%] rounded-md delay-600" />
          <Skeleton className="bg-muted-foreground opacity-5 h-4 lg:h-6 w-[88%] rounded-md delay-700" />
          <Skeleton className="bg-muted-foreground opacity-5 h-4 lg:h-6 w-[30%] rounded-md delay-800" />
        </CardContent>

        <CardFooter className="flex flex-row flex-wrap gap-3">
          <Skeleton className="bg-muted-foreground opacity-5 h-4 lg:h-6 w-[20%] rounded-md delay-900" />
          <Skeleton className="bg-muted-foreground opacity-5 h-4 lg:h-6 w-[20%] rounded-md delay-900" />
          <Skeleton className="bg-muted-foreground opacity-5 h-4 lg:h-6 w-6 rounded-full ml-auto delay-900" />
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogSkeleton;
