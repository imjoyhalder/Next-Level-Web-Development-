import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constant/role";

export const proxy = async (request: NextRequest) => {

    let isAuthenticated = false
    let isAdmin = false
    const pathname = request.nextUrl.pathname

    const { data } = await userService.getSession()
    // console.log(data);
    if (data) {
        isAuthenticated = true
        isAdmin = data.user.role === Roles.admin
    }

    // check session get or not
    if(!isAuthenticated){
        return NextResponse.redirect(new URL("/login", request.url))
    }

    // only admin can access admin routes
    if(isAdmin && pathname.startsWith("/dashboard")){
        return NextResponse.redirect(new URL('/admin-dashboard', request.url))
    }

    
    if(!isAdmin && pathname.startsWith('/admin-dashboard')){
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/dashboard", 
        "/dashboard/:path*", 
        "/admin-dashboard/:path*"
    ]
}


