import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import InputPassword from "../ui/PasswordInput";
import { Button } from "../ui/button";


const LoginForm = () => {
  return (
    <form className="flex flex-col items-center gap-2">
      <h1 className="text-center text-3xl font-bold tracking-wide">Login to Bugtrackify</h1>
      <p className="text-center text-sm text-muted-foreground">Don't have an account? <Link to='/signup' className="text-foreground font-medium underline">Sign up</Link></p>
      <Input className="mt-2" type="email" id="email" placeholder="Your email" />
      <InputPassword className="mt-2" id="password" placeholder="Your password" />
      <Button className="w-full mt-4">Login</Button>
    </form>
  );
};

export default LoginForm;
