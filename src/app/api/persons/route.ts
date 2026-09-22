import { NextResponse } from "next/server";

export const GET = () => {
    const students = [
    {
        id: 1,
        name: "Rakib",
        department: "CSE",
        semester: 5,
    },
    {
        id: 2,
        name: "Hasan",
        department: "EEE",
        semester: 4,
    },
    {
        id: 3,
        name: "Rahim",
        department: "BBA",
        semester: 6,
    }
]

    return NextResponse.json(students);
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    if (!body.name || !body.department) {
      return NextResponse.json(
        {
          message: "Name and department are required",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        message: "Student created successfully",
        student: body,
      },
      {
        status: 201,
      }
    );
  } catch {
    return NextResponse.json(
      {
        message: "Invalid request data",
      },
      {
        status: 400,
      }
    );
  }
};