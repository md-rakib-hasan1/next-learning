// import { NextResponse } from "next/server";




// export const GET = () => {
//     const students = [
//     {
//         id: 1,
//         name: "Rakib",
//         department: "CSE",
//         semester: 5,
//     },
//     {
//         id: 2,
//         name: "Hasan",
//         department: "EEE",
//         semester: 4,
//     },
//     {
//         id: 3,
//         name: "Rahim",
//         department: "BBA",
//         semester: 6,
//     }
// ]

//     return NextResponse.json(students);
// };



// export const POST=async(request:Request)=>{
//     const body= await request.json();

//     return NextResponse.json({
//         message:"student added successfully",
//         students:body,
//     });
// };


// export const PATCH=async(request:Request)=>{
//     const body= await request.json();

//     return NextResponse.json({
//         message:"Student updated successfully",
//         updatedData:body,
//     });
// };


// export const DELETE= async(request: Request)=>{
//     const body = await request.json();

//     return NextResponse.json({
//         message: "Student deleted successfully",
//         deletedStudentId: body.id,
//     })
// };

import { NextResponse } from "next/server";


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
];
export const GET=()=>{
    return NextResponse.json(students);
}