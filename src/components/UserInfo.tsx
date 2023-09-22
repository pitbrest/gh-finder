import { InfoItemProps, UserInfoProps } from "types";
import { ReactComponent as BlogIcon } from "../assets/blog.svg";
import { ReactComponent as CompanyIcon } from "../assets/company.svg";
import { ReactComponent as LocationIcon } from "../assets/location.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter.svg";
import InfoItem from "./InfoItem";

function UserInfo({ blog, company, location, twitter }: UserInfoProps) {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
  ];
  return (
    <div className="user-info flex flex-col gap-6 p-2 sm:flex sm:flex-row sm:flex-wrap ">
      {items.map((item, id) => (
        <InfoItem
          {...item}
          key={id}
        />
      ))}
    </div>
  );
}

export default UserInfo;
