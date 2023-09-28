import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../@/components/ui/avatar"
import { Button } from "../../@/components/ui/button"
import { Banknote, Settings, Receipt, User } from "lucide-react"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "../../@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../@/components/ui/popover"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]
 
export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
 
  return (
    <div className="px-3 py-2">
      <Avatar className="h-6 w-6">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}

class Head extends React.Component {
  render() {
    return (
      <Link to="/expense" className="flex items-center pl-2.5 mb-5">
        <h3>Expense Watch</h3>
      </Link>
    )
  }
}

class ProfileViewer extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardTitle>
          <CardDescription>
            Card Description
          </CardDescription>
        </CardHeader>
      </Card>
      
    );
  }
}

class Options extends React.Component {
  render() {
    return (
          <div>
            <div className="space-y-4 py-4 text-primary">
              <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  Discover
                </h2>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <Link to="/expense" className="flex items-center">
                      <Banknote className="mr-2 h-4 w-4" />
                      Expense
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Link to="/accounts" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Accounts
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Link to="/bills" className="flex items-center">
                      <Receipt className="mr-2 h-4 w-4" />
                      Bills
                    </Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-white">
                    <Link to="/settings" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

export default class Profile extends React.Component {
  render() {
    return (
      <aside className="w-1/6 h-full bg-background" aria-label="Sidebar">
        <div className="h-full flex flex-col">
          <Head />
          <ComboboxDemo />
          <Options />
        </div>
      </aside>
    );
  }
}
