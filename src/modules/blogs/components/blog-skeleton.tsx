import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const BlogSkeleton: React.FC = () => {
  return (
    <Card className="w-full">
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
  );
};

export default BlogSkeleton;
