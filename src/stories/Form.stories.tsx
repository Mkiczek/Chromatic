import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { useForm, Controller } from "react-hook-form"

// ⬇️ Adjust paths to your project
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription,
} from "@/components/ui/form"
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

const meta = {
  title: "Components/Form",
  id: "components-form",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const Preview: React.FC<{ data: unknown }> = ({ data }) => (
  <pre className="whitespace-pre-wrap rounded-md border p-3 text-sm mt-4">
    {JSON.stringify(data, null, 2)}
  </pre>
)

/* 1) One field (Name) */
export const OneInput: Story = {
  name: "One field (Name)",
  render: () => {
    const form = useForm<{ name: string }>({ defaultValues: { name: "Ada Lovelace" } })
    const [out, setOut] = React.useState<Record<string, unknown> | null>(null)
    return (
      <div className="w-full max-w-xl m-auto">
        <Card className="p-6">
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit((v) => setOut(v))}>
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Please enter your name." }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl><Input placeholder="Ada Lovelace" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          {out ? <Preview data={out} /> : null}
        </Card>
      </div>
    )
  },
}

/* 2) Two fields (Name + Email) */
export const TwoInputs: Story = {
  name: "Two fields (Name + Email)",
  render: () => {
    const form = useForm<{ name: string; email: string }>({
      defaultValues: { name: "Ada Lovelace", email: "ada@example.com" },
    })
    const [out, setOut] = React.useState<Record<string, unknown> | null>(null)
    return (
      <div className="w-full max-w-xl">
        <Card className="p-6">
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit((v) => setOut(v))}>
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Please enter your name." }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl><Input placeholder="Ada Lovelace" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Please enter an email.",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email." },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl><Input type="email" placeholder="ada@example.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          {out ? <Preview data={out} /> : null}
        </Card>
      </div>
    )
  },
}

/* 3) Select only (Role) */
export const SelectOnly: Story = {
  name: "Select only (Role)",
  render: () => {
    const form = useForm<{ role?: string }>({ defaultValues: { role: "designer" } })
    const [out, setOut] = React.useState<Record<string, unknown> | null>(null)
    return (
      <div className="w-full max-w-xl">
        <Card className="p-6">
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit((v) => setOut(v))}>
              <FormField
                control={form.control}
                name="role"
                rules={{ required: "Select a role." }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Select value={field.value ?? undefined} onValueChange={field.onChange}>
                        <SelectTrigger><SelectValue placeholder="Select a role" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="designer">Designer</SelectItem>
                          <SelectItem value="engineer">Engineer</SelectItem>
                          <SelectItem value="pm">Product Manager</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          {out ? <Preview data={out} /> : null}
        </Card>
      </div>
    )
  },
}

/* 4) Date picker only */
export const DatePickerOnly: Story = {
  name: "Date picker only",
  render: () => {
    const form = useForm<{ startDate?: Date | null }>({
      defaultValues: { startDate: new Date("2025-09-01") },
    })
    const [out, setOut] = React.useState<Record<string, unknown> | null>(null)
    return (
      <div className="w-full max-w-xl">
        <Card className="p-6">
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit((v) => setOut(v))}>
              <Controller
                control={form.control}
                name="startDate"
                rules={{ required: "Pick a start date." }}
                render={({ field, fieldState }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button type="button" variant="outline" className="justify-start">
                          {field.value ? new Date(field.value).toLocaleDateString() : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent align="start" className="p-0">
                        <Calendar
                          mode="single"
                          selected={field.value ?? undefined}
                          onSelect={(d) => field.onChange(d ?? null)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>Choose your preferred date.</FormDescription>
                    {fieldState.error ? (
                      <p className="text-sm text-destructive">{fieldState.error.message}</p>
                    ) : null}
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          {out ? (
            <Preview
              data={{
                ...(out as any),
                startDate: (out as any).startDate?.toISOString?.() ?? null,
              }}
            />
          ) : null}
        </Card>
      </div>
    )
  },
}

/* 5) Checkbox + Radio */
export const CheckboxAndRadio: Story = {
  name: "Checkbox + Radio",
  render: () => {
    const form = useForm<{ newsletter: boolean; contact: "email" | "phone" }>({
      defaultValues: { newsletter: true, contact: "email" },
    })
    const [out, setOut] = React.useState<Record<string, unknown> | null>(null)
    return (
      <div className="w-full max-w-xl">
        <Card className="p-6">
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit((v) => setOut(v))}>
              <FormField
                control={form.control}
                name="newsletter"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-md border p-3">
                    <div className="space-y-0.5">
                      <FormLabel>Subscribe to updates</FormLabel>
                      <FormDescription>Get occasional product news and tips.</FormDescription>
                    </div>
                    <FormControl>
                      <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact"
                rules={{ required: "Choose one." }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred contact</FormLabel>
                    <FormControl>
                      <RadioGroup value={field.value} onValueChange={field.onChange} className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem id="contact-email" value="email" />
                          <label htmlFor="contact-email" className="text-sm">Email</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem id="contact-phone" value="phone" />
                          <label htmlFor="contact-phone" className="text-sm">Phone</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          {out ? <Preview data={out} /> : null}
        </Card>
      </div>
    )
  },
}

/* 6) Mixed (inputs + select + date + checkbox + radio + notes) */
export const Mixed: Story = {
  name: "Mixed (inputs, select, date, checkbox, radio, notes)",
  render: () => {
    const form = useForm<{
      name: string
      email: string
      role?: string
      startDate?: Date | null
      contact: "email" | "phone"
      newsletter: boolean
      notes?: string
    }>({
      defaultValues: {
        name: "Ada Lovelace",
        email: "ada@example.com",
        role: "designer",
        startDate: new Date("2025-09-15"),
        contact: "email",
        newsletter: true,
        notes: "Looking forward to collaborating.",
      },
    })
    const [out, setOut] = React.useState<Record<string, unknown> | null>(null)

    return (
      <div className="w-full max-w-xl m-auto">
        <Card className="p-6">
          <Form {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit((v) => setOut(v))}>
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Please enter your name." }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl><Input placeholder="Ada Lovelace" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Please enter an email.",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email." },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl><Input type="email" placeholder="ada@example.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                rules={{ required: "Select a role." }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Select value={field.value ?? undefined} onValueChange={field.onChange}>
                        <SelectTrigger><SelectValue placeholder="Select a role" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="designer">Designer</SelectItem>
                          <SelectItem value="engineer">Engineer</SelectItem>
                          <SelectItem value="pm">Product Manager</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Controller
                control={form.control}
                name="startDate"
                rules={{ required: "Pick a start date." }}
                render={({ field, fieldState }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button type="button" variant="outline" className="justify-start">
                          {field.value ? new Date(field.value).toLocaleDateString() : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent align="start" className="p-0">
                        <Calendar
                          mode="single"
                          selected={field.value ?? undefined}
                          onSelect={(d) => field.onChange(d ?? null)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>Choose your preferred date.</FormDescription>
                    {fieldState.error ? (
                      <p className="text-sm text-destructive">{fieldState.error.message}</p>
                    ) : null}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contact"
                rules={{ required: "Choose one." }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred contact</FormLabel>
                    <FormControl>
                      <RadioGroup value={field.value} onValueChange={field.onChange} className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem id="contact-email" value="email" />
                          <label htmlFor="contact-email" className="text-sm">Email</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem id="contact-phone" value="phone" />
                          <label htmlFor="contact-phone" className="text-sm">Phone</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="newsletter"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-md border p-3">
                    <div className="space-y-0.5">
                      <FormLabel>Subscribe to updates</FormLabel>
                      <FormDescription>Get occasional product news and tips.</FormDescription>
                    </div>
                    <FormControl>
                      <Checkbox checked={!!field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                rules={{ maxLength: { value: 500, message: "Max 500 characters." } }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes (optional)</FormLabel>
                    <FormControl><Textarea placeholder="Anything else we should know?" rows={4} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center gap-2 pt-2">
                <Button type="submit">Submit</Button>
                <Button type="button" variant="secondary" onClick={() => form.reset()}>
                  Reset
                </Button>
              </div>
            </form>
          </Form>
          {out ? (
            <Preview
              data={{
                ...(out as any),
                startDate: (out as any)?.startDate?.toISOString?.() ?? null,
              }}
            />
          ) : null}
        </Card>
      </div>
    )
  },
}
