"use client";
import React, { useState } from "react";
import { Button, Separator, TextArea } from "@radix-ui/themes";
export default function PostComment() {
  const [comment, setComment] = useState("");

  const handleComment = (event) => {
    setComment(event.target.value);
  };
  return (
    <>
      <div className="py-10 max-w-screen-2xl mx-auto px-4">
        <TextArea
          placeholder="Write a comment…"
          className="my-3"
          onChange={handleComment}
          value={comment}
        />
        <Button variant="solid" disabled={!comment.length}>
          Post
        </Button>
      </div>
    </>
  );
}
