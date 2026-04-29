export function getLeadsBasicAuthConfig() {
  const username = process.env.LEADS_BASIC_AUTH_USERNAME;
  const password = process.env.LEADS_BASIC_AUTH_PASSWORD;

  if (!username || !password) {
    return null;
  }

  return { username, password };
}

export function isAuthorizedBasicAuthHeader(headerValue: string | null) {
  const config = getLeadsBasicAuthConfig();

  if (!config) {
    return true;
  }

  if (!headerValue?.startsWith("Basic ")) {
    return false;
  }

  const encoded = headerValue.slice(6);
  const decoded = Buffer.from(encoded, "base64").toString("utf8");
  const [username, password] = decoded.split(":");

  return username === config.username && password === config.password;
}
