import octokit from "../index";

describe("octokit rest", () => {
  describe("Pinging the root of the API gives a 200 status code", () => {
    const response = octokit.request("GET /");
  });
});
