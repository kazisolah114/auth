export const serverURI =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_SERVER_URI_PROD
    : process.env.NEXT_PUBLIC_SERVER_URI;
