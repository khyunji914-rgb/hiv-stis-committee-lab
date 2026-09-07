import { and, eq } from "drizzle-orm";
import { getDb } from "../../../../../db";
import { votes } from "../../../../../db/schema";
import { getPublicVisitor, withVisitorCookie } from "../../../_auth";
export async function POST(request:Request,{params}:{params:Promise<{id:string}>}){const visitor=getPublicVisitor(request);const id=Number((await params).id);if(!Number.isInteger(id))return Response.json({error:"Invalid item"},{status:400});const db=getDb();const [existing]=await db.select().from(votes).where(and(eq(votes.contributionId,id),eq(votes.voterEmail,visitor.key))).limit(1);if(existing)await db.delete(votes).where(eq(votes.id,existing.id));else await db.insert(votes).values({contributionId:id,voterEmail:visitor.key});return withVisitorCookie(Response.json({voted:!existing}),visitor)}
