import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import InputPassword from "../PasswordInput";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";

const SignUpCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Join Us Today!</CardTitle>
        <CardDescription>Create an account to start booking</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Input type="email" id="email" placeholder="Your email" />
        <InputPassword id="password" placeholder="Your password" />
        <InputPassword id="confirmPassword" placeholder="Confirm your password" />
      </CardContent>
      <CardFooter className="flex items-center justify-between">
      <p>Already have an account?</p> <Link to="/login">Log In</Link>
      </CardFooter>
    </Card>
  );
};

export default SignUpCard