import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../@/components/ui/tabs"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "../../@/lib/utils"
import { Button } from "../../@/components/ui/button"
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
import { Input } from "../../@/components/ui/input"

import { Label } from "../../@/components/ui/label"

const currencies = ["USD",
    "INR",
    "EUR",
    "IDR",
    "JPY",
    "KES",
    "LBP",
    "LYD",
    "MGA",
    "MUR",
    "MXN",
    "MNT",
    "PLN",
    "QAR"];

export function ComboboxDemo() {
        const [open, setOpen] = React.useState(false)
        const [value, setValue] = React.useState("")
       
        return (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between text-white"
              >
                {value
                  ? currencies.find((currency) => currency === value)
                  : "Select Currency..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Currency..." />
                <CommandEmpty>No currency found.</CommandEmpty>
                <CommandGroup>
                  {currencies.map((currency) => (
                    <CommandItem
                      key={currency}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === currency ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {currency}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        )
}

function GeneralSettings() {
    return (
        <section>
            <div className="max-w-2xl">
                <form action="#">
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <ComboboxDemo />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button type="submit" className="bg-blue-600 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </section>
        );
}

function ProfileSettings() {
    return (
        <section>
            <div className="max-w-2xl">
                <form action="#">
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <Input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <Input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <Input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email" className="text-white">Email</Label>
                            <Input type="email" id="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button type="submit" className="bg-blue-600 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

function NoftificationSettings() {
    return (
        <>
            <div className="mt-10 sm:mt-0 dark">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white dark:bg-black py-5">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="push-notification-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="push-notification-toggle" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push Notification</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="mail-notification-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="mail-notification-toggle" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Notification on Mail</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="offers-notification-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="offers-notification-toggle" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Notify Offers</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="auto-notification-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="auto-notification-toggle" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show Auto Bill Notification</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="tips-notification-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="tips-notification-toggle" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Get Tips and Tricks while using the App</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

function DashboardSettings() {
    return (
        <>
            <div className="mt-10 sm:mt-0 dark">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white dark:bg-black py-5">
                                    <div className="flex flex-col">
                                        <div className="col-span-6 sm:col-span-3 pl-2">
                                            <label htmlFor="small-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="small-toggle" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 pl-2">
                                            <label htmlFor="small-toggle1" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="small-toggle1" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 pl-2">
                                            <label htmlFor="small-toggle2" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="small-toggle2" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 pl-2">
                                            <label htmlFor="small-toggle3" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="small-toggle3" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 pl-2">
                                            <label htmlFor="small-toggle4" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="small-toggle4" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center pl-2">
                                            <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

class SettingsTab extends React.Component {
    render() {
        return (
            <Tabs defaultValue="general" className="w-[400px] mt-5 h-5">
                <TabsList>
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                    <TabsTrigger value="notification">Notification</TabsTrigger>
                </TabsList>
                <TabsContent value="general"><GeneralSettings /></TabsContent>
                <TabsContent value="profile"><ProfileSettings /></TabsContent>
                <TabsContent value="dashboard"><DashboardSettings /></TabsContent>
                <TabsContent value="notification"><NoftificationSettings /></TabsContent>
            </Tabs>
        )
    }
}

class Settings extends React.Component {
    render() {
        return (
            <main className="w-5/6 h-full bg-black p-10 overflow-y-auto">
                <h1 className="text-white text-xl font-bold">
                    Settings
                </h1>
                <SettingsTab />
                <Outlet />
            </main >
        )
    }
}

export {
    GeneralSettings, DashboardSettings, NoftificationSettings, ProfileSettings, Settings
}