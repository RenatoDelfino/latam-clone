import React from "react";

import { Skeleton as SkeletonItem } from "@/components/ui/skeleton";
import { Separator } from "./ui/separator";

const Skeleton = ({ className }: any) => {
  return (
    <div className={`skeleton ${className}`}>
      <div className="center w-full !justify-between">
        <div className="center-col !items-start space-y-2">
          <SkeletonItem className="h-[30px] w-[100px]" />
          <SkeletonItem className="h-[20px] w-[120px]" />
        </div>
        <div className="center-col !items-end space-y-2">
          <SkeletonItem className="h-[30px] w-[100px]" />
          <SkeletonItem className="h-[20px] w-[120px]" />
        </div>
      </div>
      <Separator orientation="horizontal" className="my-4" />
      <div className="center !justify-between">
        <SkeletonItem className="h-[32px] w-[140px]" />
        <SkeletonItem className="h-[32px] w-[140px]" />
      </div>
    </div>
  );
};

export default Skeleton;
