import { NextResponse } from "next/server";

type Context = {
    params: {
        blogId: string;
    };
};

export async function GET(req: Request, context: Context) {
    return NextResponse.json({
        route: `/api/blog/${context.params.blogId}`,
        params: new URL(req.url).searchParams.toString(),
        method: "GET",
        request: req,
        context: context,
    });
}

export async function PUT(req: Request, context: Context) {
    let body: Object | undefined;

    try {
        body = await req.json();
    } catch (e: unknown) {
        body = undefined;
    }

    return NextResponse.json({
        route: `/api/blog/${context.params.blogId}`,
        method: "PUT",
        request: req,
        context: context,
    });
}
