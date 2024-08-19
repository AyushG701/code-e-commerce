import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryList({ categoryList }) {
  console.log(categoryList[0]?.attributes?.icon?.data?.[0]?.attributes?.url);
  return (
    <div className="mt-10   p-4">
      <h2 className="text-[#039BE5] font-bold text-2xl mb-5  ">
        Shop by Category
      </h2>
      <div
        className="grid grid-cols-3 sm:grid-cols-4
         md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2"
      >
        {/* {categoryList.map((category, index) => {
          // Log the entire category object to inspect its structure
          console.log("Category:", category);

          // Extract the image URL safely and log it
          const imageUrl =
            category?.attributes?.icon?.data?.[0]?.attributes?.url;
          console.log("Image URL:", imageUrl);

          // Construct the full image URL and log it
          const fullImageUrl = imageUrl
            ? `${process.env.NEXT_PUBLIC_BACKEND_IMAGE_URL}${imageUrl}`
            : "/placeholder-image.png";
          console.log("Full Image URL:", fullImageUrl);

          // Log the category name
          console.log("Category Name:", category.attributes.name);

          return (
            <Link
              href={`/products-category/${category.attributes.name}`}
              className="flex flex-col 
                items-center bg-green-50 
                gap-2 p-3 rounded-lg group cursor-pointer
                hover:bg-green-600"
              key={index}
            >
              <Image
                src={fullImageUrl}
                width={50}
                height={50}
                alt="icon"
                className="group-hover:scale-125 transition-all ease-in-out"
              />
              <h2 className="text-green-800 group-hover:text-white">
                {category.attributes.name}
              </h2>
            </Link>
          );
        })} */}

        {categoryList.map((category, index) => {
          // Extract the image URL safely
          const imageUrl =
            category?.attributes?.icon?.data?.[0]?.attributes?.url;

          // Fallback URL or Placeholder for undefined images
          const fullImageUrl = imageUrl
            ? `${process.env.NEXT_PUBLIC_BACKEND_IMAGE_URL}${imageUrl}`
            : "/placeholder-image.png"; // You can replace this with your placeholder image path

          return (
            <Link
              href={`/products-category/${category.attributes.name}`}
              className="flex flex-col 
                items-center bg-[#039ae513] 
                gap-2 p-3 rounded-lg group cursor-pointer
                hover:bg-[#039BE5]"
              key={index}
            >
              <Image
                src={fullImageUrl}
                width={50}
                height={50}
                alt="icon"
                className="group-hover:scale-125 transition-all ease-in-out"
              />
              <h2 className="text-green-800 group-hover:text-white">
                {category.attributes.name}
              </h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryList;
