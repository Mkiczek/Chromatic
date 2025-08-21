import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus, Minus } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("rounded-xl border bg-white shadow-sm", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex w-full">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-center justify-between gap-4 rounded-xl p-5 text-left font-semibold text-neutral-900 transition-all outline-none hover:no-underline focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        <span className="pr-2 text-base leading-6 sm:text-lg">{children}</span>
        <span
          className={cn(
            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary text-primary transition-colors duration-200 ease-in-out",
            // hover state → fill orange (#E03100) with white icon
            "group-hover:bg-[#E03100] group-hover:text-white",
            // active (click/press) state → darker orange (#861D00) with white icon
            "group-active:bg-[#861D00] group-active:text-white",
            // focus state → same as hover (#E03100 fill, white icon)
            "group-focus-visible:bg-[#E03100] group-focus-visible:text-white"
          )}
        >
          <Plus className="h-5 w-5 group-data-[state=open]:hidden" aria-hidden />
          <Minus className="hidden h-5 w-5 group-data-[state=open]:block" aria-hidden />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden px-5 pb-5 text-[15px] leading-7 text-neutral-700"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
