import { NextResponse } from "next/server";
import { Octokit } from "octokit";

if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_USERNAME) {
  throw new Error("Missing GitHub configuration");
}

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const username = process.env.GITHUB_USERNAME as string;

export async function GET() {
  try {
    const { data } = await octokit.request("GET /users/{username}/repos", {
      username,
      sort: "updated",
      per_page: 6,
      visibility: "public",
    });

    const projects = data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      homepage: repo.homepage,
    }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error("GitHub API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
