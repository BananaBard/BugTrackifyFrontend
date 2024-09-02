import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/utils";
import { toast } from "sonner";
import { Select } from "@radix-ui/react-select";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import updateIncidentservice from "@/services/incidents/updateIncident.service";


const incidentStatus = ["open", "inprogress" , "resolved" , "closed" , "deffered" , "duplicated" , "reopen" ] as const;
const incidentPriority = ["low" , "medium" , "high" , "urgent"] as const;
const incidentSeverity = ["minor" , "major" , "critical" , "blocker"] as const;

const formSchema = z.object({
  title: z.optional(z.string().min(6, 'Incident title should be longer than 6 characters.').max(64, 'Maximum of 64 characters')).optional(),
  description: z.string().max(140, 'Can not be longer than 140 characters'),
  status: z.enum(incidentStatus),
  priority: z.enum(incidentPriority),
  severity: z.enum(incidentSeverity),
  steps_to_reproduce: z.string(),
  actual_result: z.string().min(1, {message: 'Actual result is required'}).max(500, {message: 'Actual result must be 500 or fewer characters'}),
  expected_result: z.string().min(1, {message: 'Expected result is required'}).max(500, {message: 'Expected result must be 500 or fewer characters'})
});

const optionalSchema = formSchema.partial()


const UpdateIncidentForm = () => {
  const {projectId,incidentId} = useParams();
  const queryClient = useQueryClient();
  
  const updateIncidentMutation = useMutation({
    mutationFn: updateIncidentservice,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: queryKeys.projects.incidentsById(projectId!)})

    },
    onError: () => {
      toast.error('Something went wrong', {
        description: 'Could not update incident ticket'
      })
    }
  })
  
  const onSubmit = async(values: z.infer<typeof optionalSchema>) => {
    const body = {
      title: values.title,
      description: values.description,
      status: values.status,
      priority: values.priority,
      severity: values.severity,
      steps_to_reproduce: values.steps_to_reproduce,
      actual_result: values.actual_result,
      expected_result: values.expected_result
    }
    updateIncidentMutation.mutate({incident_id: incidentId!, fieldsToUpdate: body})
  }

  const form = useForm<z.infer<typeof optionalSchema>>({
    resolver: zodResolver(optionalSchema),
    defaultValues: {
      title: undefined,
      description: undefined,
      status: undefined,
      priority: undefined,
      severity: undefined,
      steps_to_reproduce: undefined,
      actual_result: undefined,
      expected_result: undefined,
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
                <Input placeholder="Incident title" {...field} />
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
                <Textarea maxLength={140} placeholder="Your incident description" {...field}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}>
        </FormField>
        <FormField control={form.control} name='priority' render={({ field }) => (
          <FormItem>
            <FormLabel>Priority</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}>
        </FormField>
        <FormField control={form.control} name='severity' render={({ field }) => (
          <FormItem>
            <FormLabel>Severity</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="minor">Minor</SelectItem>
                  <SelectItem value="major">Major</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="blocker">Blocker</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}>
        </FormField>
        <FormField
          control={form.control}
          name="steps_to_reproduce"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Steps to Reproduce</FormLabel>
              <FormControl>
                <Input placeholder="Write your steps!" {...field} />
              </FormControl>
              <FormDescription>This can not be changed later</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        >
        </FormField>
        <FormField control={form.control} name='actual_result' render={({ field }) => (
          <FormItem>
            <FormLabel>Actual Result</FormLabel>
            <FormControl>
                <Textarea maxLength={500} placeholder="What is actually happening?" {...field}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}>
        </FormField>
        <FormField control={form.control} name='expected_result' render={({ field }) => (
          <FormItem>
            <FormLabel>Expected Result</FormLabel>
            <FormControl>
                <Textarea maxLength={500} placeholder="What you expect to happen?" {...field}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}>
        </FormField>
        <FormDescription>After your incident is created, you will be able to edit it's values!</FormDescription>
        <Button type="submit" className="w-full mt-4" disabled={false}>Create Incident</Button>
      </form>
    </Form>
  )
}

export default UpdateIncidentForm;