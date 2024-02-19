"use client"

import { Context1 } from "@/contexts/context1";
import { useContext } from "react";

export default function Page() {
  const context1 = useContext(Context1);

  return (
    <>
      <div>
        <h2>test/basic</h2>
      </div>
      <div>
        context1.value { context1.value }
      </div>
    </>
  );
}