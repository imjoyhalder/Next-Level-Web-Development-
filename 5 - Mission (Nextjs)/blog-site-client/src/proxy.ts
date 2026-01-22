import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";

export const proxy = async (request: NextRequest) => {
    console.log("hello from proxy", request.url);

    const { data } = await userService.getSession()
    console.log(data);

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard"]
}


