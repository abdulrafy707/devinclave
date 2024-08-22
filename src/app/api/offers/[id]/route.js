import { NextResponse } from "next/server";
import prisma from '../../../lib/prisma';

export async function PUT(request) {
  try {
    const { id, ...updateData } = await request.json();
    
    if (!id) {
      return NextResponse.json(
        {
          message: 'Offer ID is required',
          status: false,
        },
        { status: 400 }
      );
    }

    // Ensure comp_id is a string
    if (updateData.comp_id) {
      updateData.comp_id = String(updateData.comp_id);
    }

    const updatedOffer = await prisma.Offers.update({
      where: { id: parseInt(id) },
      data: {
        ...updateData,
        updated_at: new Date(),
      },
    });

    return NextResponse.json({
      message: 'Offer updated successfully',
      status: true,
      data: updatedOffer,
    });
  } catch (error) {
    console.error('Error updating offer:', error);
    return NextResponse.json(
      {
        message: 'Failed to update offer',
        status: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}



export async function DELETE(request) {
  try {
    // Extracting the id from the request URL instead of request body
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); // Extract the id from the URL path

    if (!id) {
      return NextResponse.json(
        {
          message: 'Offer ID is required',
          status: false,
        },
        { status: 400 }
      );
    }

    await prisma.Offers.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({
      message: 'Offer deleted successfully',
      status: true,
    });
  } catch (error) {
    console.error('Error deleting offer:', error);
    return NextResponse.json(
      {
        message: 'Failed to delete offer',
        status: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}