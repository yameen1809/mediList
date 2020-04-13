const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://medilist-live.herokuapp.com"
    : "http://localhost:3000";

export default baseUrl;
