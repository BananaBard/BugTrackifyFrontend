import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useAuth } from "@/context/AuthContext";


const formSchema = z.object({
  email: z.string().email('Invalidad email address'),
  password: z.string().min(6, 'Password must be 6 characters long').max(32, 'Can not be longer than 32 characters'),
 
});

const LoginForm = () => {
  const { logInWithEmail } = useAuth();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const body = {
      email: values.email,
      password: values.password,
    }
    logInWithEmail(body);
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  })

  return (

    <Form {...form}>
      <form onSubmit={(form.handleSubmit(onSubmit))} className="space-y-4 px-20">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        >
        </FormField>
        <FormField control={form.control} name='password' render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="Password" type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}>
        </FormField>
        <Button type="submit" className="w-full mt-4">Login</Button>
      </form>
    </Form>
  )
}

export default LoginForm;