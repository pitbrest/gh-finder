import { GitHubUser, LocalGithubUser } from "../types/";

function TransformUser(user: GitHubUser): LocalGithubUser {
  return {
    login: user.login,
    id: user.id,
    avatar: user.avatar_url,
    name: user.name,
    company: user.company,
    blog: user.blog,
    location: user.location,
    bio: user.bio,
    twitter: user.twitter_username,
    repos: user.public_repos,
    followers: user.followers,
    following: user.following,
    created: user.created_at,
  };
}

export default TransformUser;
