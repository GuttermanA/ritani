import octokit from "./octokit";

const handleResponse = async response => {
  if (response.status !== 200) {
  }
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
