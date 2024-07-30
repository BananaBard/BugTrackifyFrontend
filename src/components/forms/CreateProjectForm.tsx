import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { useAuth } from "@/context/AuthContext";
import createProjectService from "@/services/projects/createProject.service";
import { useNavigate } from "react-router-dom";

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
  description: z.string().max(140, 'Can not be longer than 140 characters'),
});

const CreateProjectForm = () => {
  const {user} = useAuth();
  const navigate = useNavigate();

  const onSubmit = async(values: z.infer<typeof formSchema>) => {
    const body = {
      title: values.title,
      description: values.description,
      leader: user?.id!,
    }
    const project = await createProjectService(body);
    navigate(`/dashboard/projects/${project.id}`)
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
        <FormDescription>After your project is created, you will be able to edit other values, such as the end date, status, and more!</FormDescription>
        <Button type="submit" className="w-full mt-4">Create Project</Button>
      </form>
    </Form>
  )
}

export default CreateProjectForm;