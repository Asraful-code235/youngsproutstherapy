import { getCommentsByPost } from "@/lib/sanity/client";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import React from "react";

export default async function Comments({ post }) {
  const comments = await getCommentsByPost(post?._id);

  if (!comments || comments.length === 0) {
    return (
      <p className="max-w-screen-2xl mx-auto px-4 ">
        <h1 className="text-xl">Comments ({comments?.length})</h1>
      </p>
    );
  }

  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4">
        <h1 className="text-xl">Comments ({comments?.length})</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3 ">
          {comments.map((comment) => {
            return (
              <div
                key={comment._id}
                className="flex hover:scale-[1.02] hover:bg-gray-50 transition-all duration-300 ease-in-out flex-col gap-4 border border-gray-300 rounded-md p-4 dark:text-gray-800"
              >
                <div className="flex items-start space-x-4">
                  <div>
                    <UserCircleIcon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-4">
                    <h4 className="font-bold">{comment.name}</h4>
                    <time
                      className="truncate text-xs text-gray-500"
                      dateTime={comment?._createdAt}
                    >
                      {format(parseISO(comment?._createdAt), "MMMM dd, yyyy")}
                    </time>
                  </div>
                </div>
                <div className="text-sm space-y-2 text-gray-600 pb-4 line-clamp-5 whitespace-pre-wrap">
                  <p>{comment.comment}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
