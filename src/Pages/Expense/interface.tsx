
export interface Expense {
    title: string,
    category: string,
    amount: number,
    date: Date
}


export interface Expenses {
    [month:string]: Expense
}



