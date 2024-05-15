import React, { createContext, useState } from "react";

export const SettingsContext = createContext({});


interface childrenType {
    children: React.ReactElement;
}

export default function TodoProvider({ children }: childrenType) {

    const [pageItems, setPageItems] = useState(3);
    const [sort, setSort] = useState('difficulty');
    const [hideCompleted, setCompleted] = useState(true);

    const changePageItemLength = (length: number) => {
        setPageItems(length);
    }

    const changeSort = (sortWord: string) => {
        setSort(sortWord);
    }

    const changeHideCompleted = (boolean: boolean) => {
        setCompleted(!boolean);
    }

    return (
        <SettingsContext.Provider value={{ pageItems, changePageItemLength, sort, changeSort, hideCompleted, changeHideCompleted }}>
            {children}
        </SettingsContext.Provider>
    )
}
