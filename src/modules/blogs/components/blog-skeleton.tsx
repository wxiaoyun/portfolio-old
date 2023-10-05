import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const BlogSkeleton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1, height: "auto" }}
      exit={{
        zIndex: -1,
        height: 0,
        opacity: 0,
        y: "-30vh",
      }}
      transition={{
        duration: 1,
        type: "spring",
        bounce: 0,
        opacity: { duration: 0.3, ease: "easeIn" },
      }}
      className="w-full"
    >
      <Card className="w-full mt-12">
        <CardHeader className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <Skeleton className="h-12 w-full rounded-md" />
            <Skeleton className="h-12 w-[40%] rounded-md" />
          </div>

          <div>
            <Skeleton className="h-6 w-[20%] rounded-md" />
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <Skeleton className="h-48 w-full rounded-md" />

          <Skeleton className="h-6 w-full rounded-md" />
          <Skeleton className="h-6 w-full rounded-md" />
          <Skeleton className="h-6 w-full rounded-md" />
          <Skeleton className="h-6 w-full rounded-md" />
          <Skeleton className="h-6 w-[30%] rounded-md" />
        </CardContent>

        <CardFooter className="flex flex-row flex-wrap gap-3">
          <Skeleton className="h-6 w-[20%] rounded-md" />
          <Skeleton className="h-6 w-[20%] rounded-md" />
          <Skeleton className="h-6 w-6 rounded-full ml-auto" />
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogSkeleton;
