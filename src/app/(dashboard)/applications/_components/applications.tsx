import DataTable from "@/components/commons/data-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  APPLICATIONS,
  HEADER,
  STATUS_OPTIONS,
  TYPE_OPTIONS,
} from "@/constants/applications-constant";
import { cn } from "@/lib/utils";
import { EllipsisVertical } from "lucide-react";
import { useMemo } from "react";
import ApplicationFilter from "./application-filter";
import { FileUp } from "lucide-react";

export default function Applications() {
  const data = useMemo(() => {
    return APPLICATIONS.map((item) => {
      const type = TYPE_OPTIONS.find((opt) => opt.value === item.type)!;
      const status = STATUS_OPTIONS.find((opt) => opt.value === item.status)!;
      return {
        ...item,
        type: (
          <div
            className={cn(
              "flex justify-center items-center gap-2 w-fit px-3 py-1 rounded-xl",
              type.className
            )}
          >
            <type.icon />
            {type.label}
          </div>
        ),
        status: (
          <div
            className={cn(
              "flex justify-center items-center gap-2 w-fit px-3 py-1 rounded-xl font-semibold",
              status.color
            )}
          >
            <status.icon />
            {status.label}
          </div>
        ),
        action: (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      };
    });
  }, [APPLICATIONS]);

  return (
    <div className="w-full space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Applications</h1>
        <p className="text-muted-foreground">
          Keep track of the jobs you’ve applied for and their current status.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-end gap-4">
        <ApplicationFilter />
        <div className="flex items-center gap-2">
          <Input placeholder="Search..." className="w-full md:max-w-64" />
          <div className="flex justify-end items-center gap-2">
            <Button>+ Add </Button>
            <Button className="bg-green-700 hover:bg-green-600">
              <FileUp /> Export
            </Button>
          </div>
        </div>
      </div>

      <DataTable header={HEADER} data={data} isLoading={false}></DataTable>
    </div>
  );
}
