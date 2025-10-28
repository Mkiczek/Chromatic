import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  import { Button, buttonVariants } from "@/components/ui/button";
  import { ExternalLink, OctagonAlert, Trash, X } from "lucide-react";
  
  export default function AlertDialogWithCustomizedFooter() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="overflow-hidden">
          <AlertDialogHeader className="pb-4">
            <AlertDialogTitle>
              <div className="mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                <OctagonAlert className="h-5 w-5 text-primary" />
              </div>
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[15px]">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="border-t -mx-6 -mb-6 px-6 py-5">
            <Button
              variant="link"
              className="-ml-3 mr-auto text-muted-foreground"
            >
              Learn more <ExternalLink />
            </Button>
            <AlertDialogCancel>
              <X /> Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className={buttonVariants({ variant: "default" })}
            >
              <Trash />
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  