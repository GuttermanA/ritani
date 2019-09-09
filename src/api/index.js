import Octokit from "@octokit/rest";

const octokit = Octokit({
  auth: "",
  userAgent: "",
  baseUrl: "https://api.github.com",
  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error
  },
  request: {
    agent: undefined,
    fetch: undefined,
    timeout: 0
  }
});

export default octokit;
