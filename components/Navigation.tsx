"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () =>
{
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() =>
  {
    if (prevPath !== path)
    {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() =>
  {
    if (isRouting)
    {
      setPrevPath(path);
      const timeout = setTimeout(() =>
      {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);
  return (
    <div
      style={{ left: "10%" }}
      className="absolute z-[50] -bottom-20 w-[50%] md:w-[21%] max-h-[124px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7"
    >

      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.link}
          className="mb-16 pl-4 min-w-[10%]"
          target={nav.name === "/my-github" || nav.name === "/my-cv" ? "_blank" : "_self"}>
          <nav.icon
            className={`w-[21px] h-[21px] ${path === nav.name ? "text-purple-800" : "text-white"}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
