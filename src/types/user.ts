type GitHubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

type GithubError = {
  message: string;
  documentation_url: string;
};

type LocalGithubUser = {
  login: string;
  id: number;
  avatar: string;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  bio: string;
  twitter: string | null;
  repos: number;
  followers: number;
  following: number;
  created: string;
};

type UserStatProps = Pick<LocalGithubUser, "repos" | "followers" | "following">;
type UserCardProps = LocalGithubUser;
type UserTitleProps = Pick<LocalGithubUser, "name" | "login" | "created">;

export type {
  GitHubUser,
  GithubError,
  LocalGithubUser,
  UserStatProps,
  UserCardProps,
  UserTitleProps,
};
