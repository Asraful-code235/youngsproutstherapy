import {
  Badge,
  Box,
  Card,
  Flex,
  Inset,
  Separator,
  Strong,
  Text,
} from "@radix-ui/themes";
import { FaRegHeart } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ data }) {
  return (
    <Box className="max-w-sm">
      <Card size="2" className="bg-[#f0e4e4]">
        <Inset clip="padding-box" side="top" pb="current">
          <Image
            src={data?.image}
            alt="Bold typography"
            width={400}
            height={300}
            className="block object-cover w-full h-44"
          />
        </Inset>
        <Box className="pb-3">
          <Badge color="blue" radius="full">
            Anxiety
          </Badge>
        </Box>
        <Text as="h1" size="4" className="w-full">
          <Strong>{data?.title.slice(0, 40)}..</Strong>
        </Text>
        <br />
        <span className="text-xs dark:text-gray-600">January 21, 2021</span>
        <Text as="p" size="2" className="pt-3">
          {data?.description.slice(0, 80)}..
        </Text>

        <Flex justify="between" width="100%" pt="3">
          <Link href={`/blog/${data.id}`} className="text-blue-500">
            Read More {`>>`}
          </Link>
          <FaRegHeart className="text-xl text-red-500" />
        </Flex>
      </Card>
    </Box>
  );
}
