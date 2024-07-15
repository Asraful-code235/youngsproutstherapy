import BlogCard from "@/components/ui/BlogCard";
import { TextField } from "@radix-ui/themes";
import { FaMagnifyingGlass } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

export default function page() {
  const data = [
    {
      title: "Top Family Activities in Thornhill, Vaughan This Summer",
      image:
        "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "This is the first sample description.This is the first sample description.",
      data: "Sample data content 1.",
      id: "001",
    },
    {
      title: "Top Family Activities in Thornhill, Vaughan This Summer",
      image:
        "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "This is the second sample description.This is the first sample description.",
      data: "Sample data content 2.",
      id: "002",
    },
    {
      title: "Top Family Activities in Thornhill, Vaughan This Summer",
      image:
        "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "This is the third sample description.This is the first sample description.",
      data: "Sample data content 3.",
      id: "003",
    },
    {
      title: "Sample Title 4",
      image:
        "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "This is the fourth sample description.This is the first sample description.",
      data: "Sample data content 4.",
      id: "004",
    },
    {
      title: "Sample Title 5",
      image:
        "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "This is the fifth sample description.This is the first sample description.",
      data: "Sample data content 5.",
      id: "005",
    },
    {
      title: "Sample Title 6",
      image:
        "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "This is the sixth sample description.This is the first sample description.",
      data: "Sample data content 6.",
      id: "006",
    },
  ];

  return (
    <div>
      <div className="md:h-56 h-48 bg-[#ebb1b1] flex items-center text-white font-serif">
        <div className="mx-auto">
          <h3 className="text-xl">Young Sprouts Therapy</h3>
          <h1 className="mt-3 font-medium text-7xl">Blog</h1>
        </div>
      </div>
      <div className="px-3 py-10 mx-auto max-w-7xl md:px-0">
        <div className="block max-w-sm gap-3 mx-auto sm:max-w-full lg:grid lg:grid-cols-12 dark:bg-gray-50 bg-slate-50">
          <Image
            src="https://images.unsplash.com/photo-1720790985510-bcab909c7b9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={600}
            height={500}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div
            className="flex flex-col justify-center gap-3 p-6 space-y-2 text-center lg:col-span-5"
            bis_skin_checked="1"
          >
            <h3 className="text-2xl font-semibold cursor-pointer sm:text-4xl">
              Noster tincidunt reprimique ad pro
            </h3>
            <span className="text-xs dark:text-gray-600">
              February 19, 2021
            </span>
            <p>
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
            <Link href="#" className="text-blue-400">
              Read More {`>>`}
            </Link>
          </div>
        </div>

        <div className="py-10">
          <div className="flex justify-between px-3">
            <div>
              <h1 className="text-2xl font-medium">All Post</h1>
            </div>
            <div>
              <TextField.Root placeholder="Search the blogs…" type="text">
                <TextField.Slot>
                  <FaMagnifyingGlass />
                </TextField.Slot>
              </TextField.Root>
            </div>
          </div>
          <div className="grid justify-center grid-cols-1 gap-6 py-5 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {data.map((item) => (
              <BlogCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
