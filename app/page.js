// import { Button } from "@/components/ui/button";

// import {
//   CircleUserRound,
//   LayoutGrid,
//   Search,
//   ShoppingBag,
//   ShoppingBasket,
// } from "lucide-react";
// import Image from "next/image";
// import React, { useContext, useEffect, useState } from "react";
// import Link from "next/link";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { useRouter } from "next/navigation";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { toast } from "sonner";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
export default async function Home() {
  // const [categoryList, setCategoryList] = useState([]);
  // const onSignOut = () => {
  //   console.log("signout");
  // };

  const sliderList = await GlobalApi.getSliders();

  return (
    // sliders
    <Slider sliderList={sliderList} />
  );
}
