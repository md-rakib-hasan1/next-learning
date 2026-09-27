"use server";

export const sendMessage = async (previousState:{success:boolean; message:string;},formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
//   const message = formData.get("message");

//   console.log("Name:", name);
//   console.log("Email:", email);
//   console.log("Message:", message);
if(!name){
    return{
        success:false,
        message:"Name is required",
    }
};
if(!email){
    return{
        success:false,
        message:"Email is required",
    }
};
return {
    success:  true,
    message:"Message sent successfully",
}
};