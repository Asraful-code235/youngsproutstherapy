import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { previewClient } from "../../../lib/sanity/client";

export async function POST(req: Request) {
  const { _id, name, email = "Not provided", comment, slug } = await req.json();

  try {
    await previewClient.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Couldn't submit comment", err },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Comment submitted" });
}
