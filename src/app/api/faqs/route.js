import { NextResponse } from "next/server";
import prisma from '../../lib/prisma';

export async function GET() {
  try {
    const companies = await prisma.Faqs.findMany();
    return NextResponse.json(companies);
  } catch (error) {
    console.log("Error getting Data :", error);
    return NextResponse.error("Internal Server Error", 500);
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newFaq = await prisma.Faqs.create({
      data: {
        comp_id: parseInt(data.comp_id),
        question: data.question,
        answer: data.answer,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
    return NextResponse.json(newFaq);
  } catch (error) {
    console.error("Error creating FAQ:", error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

