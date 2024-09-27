import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | undefined | string[];
  touched: boolean | undefined;
  children?: React.ReactNode;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  className,
  label,
  error,
  touched,
  children,
  ...props
}) => {
  return (
    <div className={cn("grid w-full  items-center gap-1.5", className)}>
      <Label htmlFor="login">
        {label}
        {error && touched ? (
          <span className="text-red-500 text-sm">{error}</span>
        ) : null}
      </Label>
      {children ? children : <Input {...props} />}
    </div>
  );
};

export default CustomInput;
