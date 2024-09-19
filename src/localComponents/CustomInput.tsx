import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | undefined;
  touched: boolean | undefined;
  children?: React.ReactNode;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  touched,
  children,
  ...props
}) => {
  return (
    <div className="grid w-full  items-center gap-1.5">
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
