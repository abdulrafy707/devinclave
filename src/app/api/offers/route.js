import { NextResponse } from "next/server";
import prisma from '../../lib/prisma';

export async function POST(request) {
  try {
    const data = await request.json();
    const {
      comp_id,
      offer_type,
      offer_title,
      offer_code,
      offer_description,
      offer_link1,
      offer_link2,
      offer_users,
      offer_expiry,
      offer_isverify,
      offer_details,
    } = data;

    // Convert comp_id to string if it is not already
    const compIdString = String(comp_id);

    const newOffer = await prisma.Offers.create({
      data: {
        comp_id: compIdString,  // Use the string version of comp_id
        offer_type,
        offer_title,
        offer_code,
        offer_description,
        offer_link1,
        offer_link2,
        offer_users,
        offer_expiry,
        offer_isverify,
        offer_details,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return NextResponse.json(newOffer);
  } catch (error) {
    console.error("Error Creating Offer Record:", error);
    return NextResponse.error(new Error("Internal Server Error"), { status: 500 });
  }
}


export async function GET() {
  try {
    const offers = await prisma.Offers.findMany();
    return NextResponse.json(offers);
  } catch (error) {
    console.error("Error Fetching Offers:", error);
    return NextResponse.error(new Error("Internal Server Error"), { status: 500 });
  }
}
