import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function PUT(request, { params }) {
  const { id } = params;
  try {
    const data = await request.json();
    const {
      com_title,
      comp_logo,
      comp_description,
      comp_phone,
      comp_email,
      comp_website,
      comp_rating,
      com_details,
    } = data;

    let uploadedImageUrl = comp_logo;

    if (comp_logo.startsWith("data:image")) {
      const uploadImageToExternalAPI = async (imageBase64) => {
        try {
          const response = await fetch('https://divenclave.com/uploadImage.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image: imageBase64 }),
          });

          const result = await response.json();

          if (!response.ok) {
            throw new Error(result.error || 'Failed to upload image');
          }

          return result.image_url;
        } catch (error) {
          console.error("Error uploading image:", error);
          throw new Error("Image upload failed");
        }
      };

      const imageBase64 = comp_logo.replace(/^data:image\/\w+;base64,/, "");
      uploadedImageUrl = await uploadImageToExternalAPI(imageBase64);
    }

    const updatedCompany = await prisma.company.update({
      where: { id: parseInt(id, 10) },
      data: {
        com_title,
        comp_logo: uploadedImageUrl,
        comp_description,
        comp_phone,
        comp_email,
        comp_website,
        comp_rating,
        com_details,
        updated_at: new Date(),
      },
    });

    return NextResponse.json(updatedCompany);
  } catch (error) {
    console.error("Error Updating Company Record:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    const deletedCompany = await prisma.company.delete({
      where: { id: parseInt(id, 10) },
    });

    return NextResponse.json(deletedCompany);
  } catch (error) {
    console.error("Error Deleting Company Record:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const company = await prisma.company.findUnique({
      where: { id: parseInt(id) },
    });

    if (!company) {
      return NextResponse.json({ message: "No company found" }, { status: 404 });
    }

    return NextResponse.json(company);
  } catch (error) {
    console.error("Error Fetching Company:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
