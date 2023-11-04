import { NextResponse } from "next/server";

export const middleware = (request) => {
	// const nextUrlPath = request.nextUrl.pathname;
	// const params = request.nextUrl.searchParams;
	// if (nextUrlPath.startsWith("/ticket/detail-event")) {
	// 	const id = params.get("id");
	// 	if (id && id.length > 0) {
	// 		const isFindingevent =
	// 			UPCOMING_EVENT_CONTENT.findIndex((e) => e.id === Number(id)) !=
	// 			undefined;
	// 		if (!isFindingevent) {
	// 			return NextResponse.redirect(new URL("/ticket", request.url));
	// 		}
	// 	} else {
	// 		return NextResponse.redirect(new URL("/ticket", request.url));
	// 	}
	// }
};
