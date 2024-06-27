import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface InputPasswordProps {
  id: string;
  placeholder: string;
}

const InputPassword = ({ id, placeholder }: InputPasswordProps) => {
    const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-row gap-2 justify-between items-center">
      <Input type={showPassword ? 'text' : 'password'} id={id} placeholder={placeholder} />
      <Button onClick={() => setShowPassword(!showPassword)} variant="outline">
        Show
      </Button>
    </div>
  );
};

export default InputPassword;
