import { ReactNode } from "react";
import { LocalGithubUser } from "./user";

type ContainerProps = {
  children: React.ReactNode;
};
type ButtonProps = {
  children: string;
  style?: React.CSSProperties;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
};
type SearchProps = {
  hasError: boolean;
  onSubmit: (text: string) => void;
};
// Тут мы указываем TS что у формы есть элемент с полем userName,
// и этот элемент это HTMLInputElement
type FormFields = {
  userName: HTMLInputElement;
};
type InfoItemProps = {
  icon: ReactNode;
  text?: string | null;
  isLink?: boolean;
};
type UserInfoProps = Pick<
  LocalGithubUser,
  "blog" | "company" | "location" | "twitter"
>;

export type {
  ContainerProps,
  ButtonProps,
  SearchProps,
  FormFields,
  InfoItemProps,
  UserInfoProps,
};
