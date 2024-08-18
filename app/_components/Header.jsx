"use client";

import { Button } from "@/components/ui/button";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalApi from "../_utils/GlobalApi";
import Link from "next/link";

const Header = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    console.log(getCategoryList());

    getCategoryList();
  }, []);
  // get category list
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log("CategoryList Resp:", resp.data.data);
      setCategoryList(resp.data.data);
    });
  };

  return (
    <div className="p-5 shadow-md flex justify-between">
      <div className="flex items-center gap-8 ">
        <div className="flex items-center justify-center">
          <Image
            src="/logo1.png"
            alt="logo"
            width={150}
            height={100}
            className="w-24  h-20 object-contain"
          />
          <span className="  text-green-400  text-lg font-bold ">Grocery</span>
        </div>
        <div className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <h2 className=" hidden md:flex gap-2 items-center  border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
                <LayoutGrid />
                Category
              </h2>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categoryList.map((category, index) => (
                <Link href={"/products-category/" + category.attributes.name}>
                  <DropdownMenuItem
                    key={index}
                    className="flex gap-2 items-center cursor-pointer"
                  >
                    <Image
                      src={
                        category?.attributes?.icon?.data?.[0]?.attributes?.url
                          ? `${process.env.NEXT_PUBLIC_BACKEND_IMAGE_URL}${category?.attributes?.icon?.data?.[0]?.attributes?.url}`
                          : "/logo.png"
                      }
                      unoptimized={true}
                      alt="icon"
                      width={30}
                      height={30}
                    />
                    {console.log(
                      category?.attributes?.icon?.data?.[0]?.attributes?.url,
                    )}
                    <h2>{category?.attributes?.name}</h2>
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="md:flex gap-3 items-center border rounded-full p-2  px-5  hidden">
            <Search />
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <ShoppingBag /> <h2 className="flex gap-2 items-center">0</h2>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
