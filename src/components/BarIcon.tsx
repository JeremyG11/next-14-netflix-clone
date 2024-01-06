import React, { Dispatch, SetStateAction } from "react";
interface BarIconProps {
  icon: React.ReactNode;
  title: string;
  onClick?: Dispatch<SetStateAction<string>>;
}
export const BarIcon = ({ icon, title, onClick }: BarIconProps) => (
  <li className="text-lg flex items-center">
    {icon}
    <p className="px-2 text-sm font-medium">{title}</p>
  </li>
);
