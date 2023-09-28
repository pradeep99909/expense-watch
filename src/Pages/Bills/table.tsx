"use client"

import * as React from "react"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import BillModel from "./interface";
import { Button } from "../../@/components/ui/button"
import { Checkbox } from "../../@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../@/components/ui/dropdown-menu"
import { Input } from "../../@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../@/components/ui/table"
import { Receipt } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../@/components/ui/dialog"
import { Label } from "../../@/components/ui/label"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
]

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-auto">
            Add{"  "}<Receipt className="mr-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="dark bg-background text-primary">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<any>([])
  const [columnFilters, setColumnFilters] = React.useState<any>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
  React.useState<any>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [display, setDisplay] = React.useState(false);
  const [bills, setBills] = React.useState<BillModel[]>([]);
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [amount, setAmount] = React.useState(0);

  return (
    <div className="w-full text-primary">
      <div className="flex items-center space-between py-4">
        {/* <Input
          placeholder="Filter emails..."
          //value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          //onChange={(event) =>
          //  table.getColumn("email")?.setFilterValue(event.target.value)
          //}
          className="max-w-sm text-primary"
        /> */}
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem>Title</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Type</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Amount</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Status</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
        <DialogDemo />
      </div>
      <div className="rounded-md border dark">
        <Table>
          <TableHeader>
            <TableRow>
                <TableHead>
                  Title
                </TableHead>
                <TableHead>
                  Type
                </TableHead>
                <TableHead>
                  Amount
                </TableHead>
                <TableHead>
                  Status
                </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-white">
              <TableRow>
                <TableCell>
                  Electricty Bill
                </TableCell>
                <TableCell>
                  Bill
                </TableCell>
                <TableCell>
                  720
                </TableCell>
                <TableCell>
                  Active
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Electricty Bill
                </TableCell>
                <TableCell>
                  Bill
                </TableCell>
                <TableCell>
                  720
                </TableCell>
                <TableCell>
                  Active
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Electricty Bill
                </TableCell>
                <TableCell>
                  Bill
                </TableCell>
                <TableCell>
                  720
                </TableCell>
                <TableCell>
                  Active
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Electricty Bill
                </TableCell>
                <TableCell>
                  Bill
                </TableCell>
                <TableCell>
                  720
                </TableCell>
                <TableCell>
                  Active
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Electricty Bill
                </TableCell>
                <TableCell>
                  Bill
                </TableCell>
                <TableCell>
                  720
                </TableCell>
                <TableCell>
                  Active
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 dark">
        <div className="flex-1 text-sm text-muted-foreground">
          {/*this.getFilteredSelectedRowModel().rows.length*/} 1 of{" "}
          {/*this.getFilteredRowModel().rows.length*/} 10 row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            //onClick={//() => previousPage()}
            //disabled={//!getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            //onClick={//() => nextPage()}
            //disabled={//!getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
