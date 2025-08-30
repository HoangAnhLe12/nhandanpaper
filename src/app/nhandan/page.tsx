"use client";
import dynamic from "next/dynamic";

const LayoutPaper = dynamic(() => import("@/components/layout-paper"), {
  ssr: false,
});

export default function Home() {
  return <LayoutPaper />;
}
