import { UserCardProps } from "types";
import UserStat from "./UserStat";
import UserTitle from "./UserTitle";
import UserInfo from "./UserInfo";

function UserCard(props: UserCardProps) {
  return (
    <div className="user-card p-4 rounded-lg md:p-10 sm:flex-row sm:items-start flex gap-10 flex-col items-center">
      <img
        className="w-32 h-32 rounded-full"
        src={props.avatar}
        alt="me"
      />
      <div className="w-full">
        <UserTitle
          name={props.name}
          login={props.login}
          created={props.created}
        />
        <UserStat
          repos={props.repos}
          followers={props.followers}
          following={props.following}
        />
        <UserInfo
          blog={props.blog}
          company={props.company}
          location={props.location}
          twitter={props.twitter}
        />
      </div>
    </div>
  );
}

export default UserCard;
