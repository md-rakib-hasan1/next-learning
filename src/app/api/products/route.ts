import { NextResponse } from "next/server";

export const GET = () => {
    const products =[
        {
            id:1,
            name:"laptop",
            price:50000,
        },
        {
            id:2,
            name:"Phone",
            price:25000,
        }
    ];

  return NextResponse.json(products);
};
