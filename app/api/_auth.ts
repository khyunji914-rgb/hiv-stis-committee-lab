const VISITOR_COOKIE="committee_visitor_id";
const COOKIE_MAX_AGE=60*60*24*365;

export type PublicVisitor={key:string;token:string;isNew:boolean};

export function getPublicVisitor(request:Request):PublicVisitor{
 const header=request.headers.get("cookie")??"";
 const token=header.split(";").map(part=>part.trim()).find(part=>part.startsWith(`${VISITOR_COOKIE}=`))?.slice(VISITOR_COOKIE.length+1);
 if(token&&/^[A-Za-z0-9-]{16,100}$/.test(token))return {key:`visitor:${token}`,token,isNew:false};
 const fresh=crypto.randomUUID();
 return {key:`visitor:${fresh}`,token:fresh,isNew:true};
}

export function withVisitorCookie(response:Response,visitor:PublicVisitor){
 if(visitor.isNew)response.headers.append("Set-Cookie",`${VISITOR_COOKIE}=${visitor.token}; Path=/; Max-Age=${COOKIE_MAX_AGE}; HttpOnly; SameSite=Lax; Secure`);
 return response;
}
