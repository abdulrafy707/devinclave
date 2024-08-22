import { NextResponse } from "next/server";
import prisma from '../../../lib/prisma';


export async function GET(request, { params }) {
  const id = parseInt(params.id);
  try {
    const companies = await prisma.Faqs.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json(companies);
  } catch (error) {
    console.log("Error Getting FAQ :", error);
    return NextResponse.error("Internal Server Error", 500);
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);

    // Ensure the ID is valid before proceeding
    if (isNaN(id)) {
      return NextResponse.json(
        { message: 'Invalid ID provided' },
        { status: 400 }
      );
    }

    const deletedFaq = await prisma.Faqs.delete({
      where: {
        id: id,
      },
    });

    // Respond with a success message
    return NextResponse.json({
      message: 'FAQ deleted successfully',
      deletedFaq,  // Optionally return the deleted FAQ details
    }, { status: 200 });
    
  } catch (error) {
    console.error('Error Deleting FAQ:', error);

    return NextResponse.json(
      { message: 'Failed to delete FAQ', error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
   
    const { question,answer  } = data;
    const id = parseInt(params.id);
    const updatecompany = await prisma.Faqs.update({
      where: {
        id: id,
      },
      data: {
        question: question,
        answer: answer,
        updated_at: new Date()
      },
    });
    return NextResponse.json(updatecompany);
  } catch (error) {
    console.log("Error Updating FAQ :", error);
    return NextResponse.error("Internal Server Error", 500);
  }
}
