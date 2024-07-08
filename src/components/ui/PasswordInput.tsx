import { InputHTMLAttributes, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { EyeIcon } from "lucide-react";

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement>{
  id: string;
  placeholder: string;
  className?: string;
}

const InputPassword = ({ id, placeholder,className }: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-row gap-2 justify-between items-center w-full ${className && className}`}>
      <Input
        type={showPassword ? "text" : "password"}
        id={id}
        placeholder={placeholder}
      />
      <Button onClick={() => setShowPassword(!showPassword)} variant="outline" className="w-fit" type="button">
        <EyeIcon />
      </Button>
    </div>
  );
};

export default InputPassword;
