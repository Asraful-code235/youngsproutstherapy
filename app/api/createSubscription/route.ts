import { NextResponse } from "next/server";
import { previewClient } from "../../../lib/sanity/client";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { message: "Email are required" },
      { status: 400 }
    );
  }

  try {
    const existingSubscription = await previewClient.fetch(
      `*[_type == "subscription" && email == $email][0]`,
      { email }
    );

    if (existingSubscription) {
      return NextResponse.json(
        { message: "User already subscribed" },
        { status: 409 } // Conflict status code
      );
    }

    // Create the new subscription
    await previewClient.create({
      _type: "subscription",
      email,
      date: new Date().toISOString(),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Couldn't create subscription", err },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Subscription created" });
}
