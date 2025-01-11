import { NextResponse } from "next/server";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function GET() {
  try {
    const { data } = await octokit.request("GET /users/{username}/repos", {
      username: process.env.GITHUB_USERNAME,
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
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
