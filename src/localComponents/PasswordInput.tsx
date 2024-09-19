import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | undefined;
  touched: boolean | undefined;
}

const PasswordInput: React.FC<Props> = ({
  label,
  error,
  touched,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <Label htmlFor="login">
        {label}
        {error && touched ? (
          <span className="text-red-500 text-sm">{error}</span>
        ) : null}
      </Label>
      <div className="flex relative">
        <Input
          className="pe-10"
          type={`${showPassword ? "text" : "password"}`}
          {...props}
        />
        <button
          className="absolute right-3 top-[50%] translate-y-[-50%]"
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible size={20} />
          ) : (
            <AiOutlineEye size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
