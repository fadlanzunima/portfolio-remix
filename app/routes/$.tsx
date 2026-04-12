import type { LoaderFunction } from "@remix-run/node";

// Catch-all route for /.well-known/* requests (e.g. Chrome DevTools probe)
// Returns 204 No Content to silence 404 noise in dev logs.
export const loader: LoaderFunction = async () => {
  return new Response(null, { status: 204 });
};

export default function WellKnown() {
  return null;
}
