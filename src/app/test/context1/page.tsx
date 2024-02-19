"use client"
import { Context1 } from "@/contexts/context1";
import Link from "next/link";
import { useContext } from "react";

export default function Page() {
  const context1 = useContext(Context1);

  return (
    <>
      <div>
        <h2>context1 page</h2>
      </div>
      <div>
        <Link href="/test/context1/sub">
          sub 페이지로 이동
        </Link>
      </div>
      <div>
        context1.value: { context1.value }
      </div>
    </>
  );
}