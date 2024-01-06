import React from "react";
interface BarIconProps {
  icon: React.ReactNode;
  title: string;
}
export const BarIcon = ({ icon, title }: BarIconProps) => (
  <li className="text-lg flex items-center">
    {icon}
    <p className="px-2 text-sm font-medium">{title}</p>
  </li>
);
