import octokit from "./octokit";

const parseResponse = async response => {
  try {
    const contentType = readContentType(response.headers);
    if (contentType.includes("text")) {
      return await response.text();
    }
    if (contentType.includes("json")) {
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};
