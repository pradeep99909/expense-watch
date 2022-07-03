import React, { createContext, useState} from 'react';
import { Expense } from '../Pages/Expense/interface'

export const AppContext: any = createContext({
    expenseDialog:"",
    expenseList: []
});

export const AppProvider = (props: any) => {
    const [displayExpenseDialog, setdisplayExpenseDialog] = useState<string>("hidden ");
    const [expenses, setExpenses] = useState([])
    return(
        <AppContext.Provider value={{ expenseDialog: [displayExpenseDialog, setdisplayExpenseDialog], expenseList: [expenses, setExpenses] }}>
            {props.children}
        </AppContext.Provider>
    )
}