import { ReactNode } from "react";
import LayoutClient from "./layout.client";

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <LayoutClient>
        { props.children }
      </LayoutClient>
    </>
  );
}