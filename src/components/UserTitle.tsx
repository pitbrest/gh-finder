import { UserTitleProps } from "types";

const localDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function UserTitle({ name, login, created }: UserTitleProps) {
  const joinedDate = localDate.format(new Date(created));

  return (
    <div className="user-title flex justify-between">
      <div className="flex flex-col gap-2 mb-5 sm:mb-10">
        <h2 className="font-bold break-words">{name} </h2>
        <h2 className="text-sky-500 font-bold break-words">@{login} </h2>
      </div>
      <span>Joined {joinedDate}</span>
    </div>
  );
}

export default UserTitle;
