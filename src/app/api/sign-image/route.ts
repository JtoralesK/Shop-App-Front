import { v2 as cloudinary } from "cloudinary";
import { NextApiRequest, NextApiResponse } from "next";
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export async function POST(request: Request) {
  const {
    CLOUDINARY_API_SECRET,
    CLOUDINARY_API_KEY,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  } = process.env;
  const body = (await request.json()) as {
    paramsToSign: Record<string, string>;
  };
  const { paramsToSign } = body;
  const signature = cloudinary.utils.sign_request(paramsToSign, {
    cloud_name: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });
  return Response.json({ signature });
}
