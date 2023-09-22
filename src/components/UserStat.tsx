import React from "react";
import { UserStatProps } from "../types";

function UserStat({ repos, followers, following }: UserStatProps) {
  return (
    <div className="user-stat px-6 py-4 mb-5 sm:mb-10 flex justify-between flex-wrap gap-4 md:gap-16 rounded-lg">
      <div className="info flex flex-col md:gap-4 gap-1">
        <div className="info-title">Repos</div>
        <div className="info-data font-bold">{repos} </div>
      </div>
      <div className="info flex flex-col md:gap-4 gap-1">
        <div className="info-title">Following</div>
        <div className="info-data font-bold">{following} </div>
      </div>
      <div className="info flex flex-col md:gap-4 gap-1">
        <div className="info-title">Followers</div>
        <div className="info-data font-bold">{followers} </div>
      </div>
    </div>
  );
}

export default UserStat;
