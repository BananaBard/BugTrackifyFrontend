import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useAuth } from "@/context/AuthContext";


const formSchema = z.object({
  email: z.string().email('Invalidad email address'),
  password: z.string().min(6, 'Password must be 6 characters long').max(32, 'Can not be longer than 32 characters'),
  password2: z.string()
}).refine((data) => data.password === data.password2, {
  message: "Passwords must match",
  path: ["password2"]
})

const SignUpForm = () => {
  const {signUpWithEmail} = useAuth();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
    const body = {email: values.email, password: values.password}
    signUpWithEmail(body);
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      password2: ''
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
                <Input placeholder="Your email..." {...field}/>
              </FormControl>
              {/* <FormDescription>The email you will use to log in</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        >
        </FormField>
        <FormField control={form.control} name='password' render={({field}) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="Password" type="password" {...field}/>
            </FormControl>
            <FormDescription>Between 6/32 characters</FormDescription>
            <FormMessage/>
          </FormItem>
        )}>        
        </FormField>
        <FormField control={form.control} name='password2' render={({field}) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input placeholder="Confirm your password" type="password" {...field}/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}></FormField>
        <FormMessage/>
        <Button type="submit" className="w-full mt-4">Create account</Button>
      </form>
    </Form>
  )
}

  export default SignUpForm;