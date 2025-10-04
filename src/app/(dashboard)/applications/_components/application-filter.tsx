"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Funnel } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ApplicationFilterItem from "./application-filter-item";

export default function ApplicationFilter() {
  const [showFilterMobile, setShowFilterMobile] = useState(false);

  const onOpenChange = () => {
    setShowFilterMobile((prev) => !prev);
  };

  return (
    <>
      <div className="lg:hidden">
        <Dialog open={showFilterMobile} onOpenChange={onOpenChange}>
          <DialogTrigger asChild>
            <Button>
              <Funnel /> <span className="md:hidden">Filter</span>
            </Button>
          </DialogTrigger>

          {showFilterMobile && (
            <DialogContent className="sm:max-w-md">
              <DialogHeader className="justify-start items-start">
                <DialogTitle>Filter</DialogTitle>
                <DialogDescription>
                  Use filters to narrow down your results.
                </DialogDescription>
              </DialogHeader>

              <ApplicationFilterItem />

              <DialogFooter>
                <div className="flex justify-end gap-4">
                  <Button
                    className="w-fit"
                    variant="outline"
                    onClick={onOpenChange}
                  >
                    Cancel
                  </Button>
                  <Button className="w-fit">Apply</Button>
                </div>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <ApplicationFilterItem />
      </div>
    </>
  );
}
