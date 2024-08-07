import React, { useEffect, useRef } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { ZodType } from "zod";
import { useMask } from "@react-input/mask";

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  validationSchema: ZodType<any>;
  mask?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type = "text",
  validationSchema,
  mask,
  className,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;
  const labelRef = useRef<HTMLLabelElement>(null);

  const inputRef = useMask({
    mask: mask || "",
    replacement: { _: /\d/ },
  });

  const handleInputChange = (value: string) => {
    if (labelRef.current) {
      labelRef.current.classList.toggle("active", Boolean(value));
    }
  };

  useEffect(() => {
    if (labelRef.current && inputRef.current) {
      handleInputChange(inputRef.current.value);
    }
  }, [inputRef.current?.value]);

  return (
    <div className={`${className} input input-field`}>
      <Controller
        name={name}
        control={control}
        rules={{
          validate: (value) =>
            validationSchema.safeParse(value).success ||
            validationSchema.parse(value),
        }}
        render={({ field }) => (
          <>
            <input
              {...field}
              ref={mask ? inputRef : field.ref}
              id={name}
              type={type}
              placeholder=""
              className={` ${errors[name] ? "!border-[#fd5959]" : ""}`}
              onChange={(e) => {
                field.onChange(e);
                handleInputChange(e.target.value);
              }}
            />
            <label
              className={`label ${errors[name] ? "!text-[#fd5959]" : ""}`}
              htmlFor={name}
              ref={labelRef}
            >
              {label}
            </label>
          </>
        )}
      />
      {errors[name] && (
        <p className="text-[#fd5959] text-sm">
          {errors[name].message as string}
        </p>
      )}
    </div>
  );
};

export default InputField;
