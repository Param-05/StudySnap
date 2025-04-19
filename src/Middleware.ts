import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  console.log("Middleware running");

//   const supabase = createServerClient(
//     process.env.SUPABASE_URL!,
//     process.env.SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll();
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value }) =>
//             request.cookies.set(name, value)
//           );
//           supabaseResponse = NextResponse.next({
//             request,
//           });
//           cookiesToSet.forEach(({ name, value, options }) =>
//             supabaseResponse.cookies.set(name, value, options)
//           );
//         },
//       },
//     }
//   );

//   const isAuthRoute =
//     request.nextUrl.pathname === "/login" ||
//     request.nextUrl.pathname === "/sign-up";

//   if (isAuthRoute) {
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();

//     if (user) {
//       return NextResponse.redirect(
//         new URL("/", process.env.NEXT_PUBLIC_BASE_URL)
//       );
//     }
//   }

//   // If URL has no noteId, it will go to the latest note, if they don't have any notes it will create a note
//   const { searchParams, pathname } = new URL(request.url);

//   if (!searchParams.get("noteId") && pathname === "/") {
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();
//     if (user) {
//       const { newestNoteId } = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetch-newest-note?userId=${user.id}`
//       ).then((res) => res.json()); // prisma doesn't work directly in middleware so we create and call an API endpoint
//       if (newestNoteId) {
//         const url = request.nextUrl.clone();
//         url.searchParams.set("noteId", newestNoteId);
//         return NextResponse.redirect(url);
//       } else {
//         const { noteId } = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/create-new-note?userId=${user.id}`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         ).then((res) => res.json());
//         const url = request.nextUrl.clone();
//         url.searchParams.set("noteId", noteId);
//         return NextResponse.redirect(url);
//       }
//     }
//   }

//   return supabaseResponse;
}
