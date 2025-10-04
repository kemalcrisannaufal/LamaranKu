import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export default function FormInput<T extends FieldValues>({
  form,
  label,
  type = "text",
  name,
  placeholder,
  suffixIcon,
  onClickSuffixIcon,
}: {
  form: UseFormReturn<T>;
  label: string;
  type?: string;
  name: Path<T>;
  placeholder: string;
  suffixIcon?: ReactNode;
  onClickSuffixIcon?: () => void;
}) {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              suffixIcon={suffixIcon}
              onClickSuffixIcon={onClickSuffixIcon}
            />
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
}
