import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";

/* id: string;
title: string;
description: string;
leader: string;
team: Pick<User, 'fullname' | 'role'>[];
startDate: string;
status: string;
totalIncidents: number; */

const formSchema = z.object({
  title: z.string().min(6, 'Project title should be longer than 6 characters.').max(32, 'Maximum of 32 characters'),
  description: z.string().min(6, 'Password must be 6 characters long').max(140, 'Can not be longer than 140 characters'),
});

const CreateProjectForm = () => {
  //const { logInWithEmail } = useAuth();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const body = {
      title: values.title,
      description: values.description,
    }
    console.log(body)
   // logInWithEmail(body);
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    }
  })

  return (

    <Form {...form}>
      <form onSubmit={(form.handleSubmit(onSubmit))} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Project title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        >
        </FormField>
        <FormField control={form.control} name='description' render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
                <Textarea placeholder="Your project description" {...field}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}>
        </FormField>
        <Button type="submit" className="w-full mt-4">Create Project</Button>
      </form>
    </Form>
  )
}

export default CreateProjectForm;