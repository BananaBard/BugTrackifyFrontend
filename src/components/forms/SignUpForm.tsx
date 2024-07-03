import InputPassword from "../ui/PasswordInput";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const SignUpForm = () => {
  return (
    <form className="flex flex-col items-center gap-2">
      <h1 className="text-center text-3xl font-bold tracking-wide">Start tracking with us today!</h1>
      <p className="text-center text-sm text-muted-foreground">Already have an account? <Link to='/login' className="text-foreground font-medium underline">Log in</Link></p>
      <Input className="mt-2" type="email" id="email" placeholder="Your email" />
      <InputPassword className="mt-2" id="password" placeholder="Your password" />
      <InputPassword className="mt-2" id="repeatpassword" placeholder="Repeat your password" />
      <Button className="w-full mt-4">Create account</Button>
    </form>
  );
};

export default SignUpForm