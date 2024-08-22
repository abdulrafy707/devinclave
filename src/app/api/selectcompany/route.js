// /pages/api/company.js
import { NextResponse } from "next/server";
import prisma from '../../lib/prisma';

export async function GET() {
  try {
    const companies = await prisma.company.findMany({
      select: {
        id: true,
        com_title: true
      }
    });
    return NextResponse.json(companies);
  } catch (error) {
    console.error("Error fetching companies:", error);
    return NextResponse.error(new Error("Internal Server Error"), 500);
  }
}
