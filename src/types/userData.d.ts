export type SocialLink = {
    id: number;
    path: string;
};

export interface UserProps {
    age: number;
    auth: string;
    birth: string;
    email: string;
    id: number;
    intro: string | null;
    link_list: SocialLink[];
    name: string;
    nation: string | null;
    nickname: string;
    profile_list: string[];
    sex: string | null;
};
