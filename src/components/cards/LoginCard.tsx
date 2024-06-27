import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import InputPassword from "../ui/PasswordInput";


const LoginCard = () => {
  return (
      <Card>
        <CardHeader>
          <CardTitle>Welcome Back!</CardTitle>
          <CardDescription>Log in to access your account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Input type="email" id="email" placeholder="Your email"/>
          <InputPassword id="password" placeholder="Your password"/>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
            <p>Don't have an account?</p> <Link to='/signup'>Sign Up</Link>
        </CardFooter>
      </Card>
  );
};

export default LoginCard;
