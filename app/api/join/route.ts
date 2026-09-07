import { env } from "cloudflare:workers";
import { getDb } from "../../../db";
import { members } from "../../../db/schema";
import { getChatGPTUser } from "../../chatgpt-auth";
export async function POST(request:Request){const user=await getChatGPTUser();if(!user)return new Response("Sign-in required",{status:401});const data=await request.formData();const code=String(data.get("code")??"");if(!env.COMMITTEE_ACCESS_CODE||code!==env.COMMITTEE_ACCESS_CODE)return new Response("Invalid invitation code",{status:403});await getDb().insert(members).values({email:user.email,name:user.displayName}).onConflictDoNothing();return Response.redirect(new URL("/workspace",request.url),303)}
