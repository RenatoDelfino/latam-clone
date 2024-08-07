import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { ZodType } from "zod";

import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/mainselect";

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  name: string;
  label: string;
  options: Option[];
  validationSchema?: ZodType<any>;
}

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  label,
  options,
  validationSchema,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="input select relative">
      <Controller
        name={name}
        control={control}
        rules={{
          validate: (value) => {
            if (validationSchema) {
              try {
                validationSchema.parse(value);
                return true;
              } catch (e: any) {
                return e.errors[0]?.message || "Invalid value";
              }
            }
            return true;
          },
        }}
        render={({ field }) => (
          <>
            <label className="label" htmlFor={name}>
              {label}
            </label>
            {errors[name] && (
              <p className="text-[#fd5959] text-sm">
                {errors[name].message as string}
              </p>
            )}
            <Select
              {...field}
              value={field.value}
              onValueChange={(value) => field.onChange(value)}
            >
              <SelectTrigger className="h-[55px]">
                <SelectValue />
              </SelectTrigger>

              <SelectContent className="z-[99999999999999999] ">
                {options.map((option) => (
                  <SelectItem
                    className="py-[10px] px-[20px] text-[16px] font-[400] leading-[1.5rem] my-[6px] text-[#5c5c5c]"
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </>
        )}
      />
    </div>
  );
};

export default SelectField;
