import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  STATUS_OPTIONS,
  TYPE_OPTIONS,
} from "@/constants/applications-constant";
import { Label } from "@/components/ui/label";

export default function ApplicationFilterItem() {
  return (
    <>
      <div className="space-y-1.5">
        <Label>Status</Label>
        <Select>
          <SelectTrigger className="w-full lg:w-[180px]">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {STATUS_OPTIONS.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1.5">
        <Label>Type</Label>
        <Select>
          <SelectTrigger className="w-full lg:w-[150px]">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {TYPE_OPTIONS.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
