import octokit from "../octokit";

describe("octokit rest", () => {
  test("Searching for my username gives 200 status code", async () => {
    const response = await octokit.users.getByUsername({
      username: "guttermana"
    });

    expect(response.status).toBe(200);
  });

  test("Searching for an empty string throws a 404 not found error", async () => {
    expect(
      Promise.reject(
        octokit.users.getByUsername({
          username: ""
        })
      )
    ).rejects.toThrow(/404/);
  });
});
