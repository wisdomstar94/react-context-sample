"use client"
import { Context1 } from "@/contexts/context1";
import { ReactNode, useState } from "react";

export default function LayoutClient(props: { children: ReactNode }) {
  const [value, setValue] = useState({ value: 'zz2' });

  return (
    <>
      <Context1.Provider value={value}>
        { props.children }
      </Context1.Provider>
    </>
  );
}