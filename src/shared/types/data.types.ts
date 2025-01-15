import React from 'react';
export interface Info {
  imageUrl: string;
  name: string;
  profession: string;
  education: string;
  themeGraduationPaper: string;
  teacher: string;
}

export interface AboutMeItem {
  label: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >; // assuming icon is a React component
  text: string;
}

export interface AboutMeSection {
  title: string;
  items: AboutMeItem[];
}

export interface Data {
  info: Info;
  aboutMe: AboutMeSection[];
}

export type UsernameType = 'vanya';
