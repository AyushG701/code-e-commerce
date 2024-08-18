// import { Button } from "@/components/ui/button";

// import {
//   CircleUserRound,
//   LayoutGrid,
//   Search,
//   ShoppingBag,
//   ShoppingBasket,
// } from "lucide-react";
import Image from "next/image";
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
import CategoryList from "./_components/CategoryList";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import ProductList from "./_components/ProductList.jsx";
import Footer from "./_components/Footer";
export default async function Home() {
  // const [categoryList, setCategoryList] = useState([]);
  // const onSignOut = () => {
  //   console.log("signout");
  // };

  const sliderList = await GlobalApi.getSliders();

  const categoryList = await GlobalApi.getCategoryList();
  const productList = await GlobalApi.getAllProducts();

  console.log(sliderList[1].attributes?.image?.data?.[0]?.attributes?.url);
  return (
    <>
      <div className="p-10 px-5 md:px-16">
        {/* sliders */}
        <Slider sliderList={sliderList} />
        {/* category list */}
        <CategoryList categoryList={categoryList} />

        {/* Product List */}
        <ProductList productList={productList} />

        {/* Banner  */}
        <Image
          src="/banner.png"
          width={1000}
          height={300}
          alt="banner"
          className="w-full h-[400px] object-contain"
        />

        {/* Footer  */}
        <Footer />
      </div>
    </>
  );
}
