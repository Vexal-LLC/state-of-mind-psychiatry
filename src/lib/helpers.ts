// Just a wrapper around Response
export function ErrorResponse(message: string, status: number) {
  return new Response(
    JSON.stringify({
      error: message,
      success: false,
    }),
    {
      status,
    }
  );
}
