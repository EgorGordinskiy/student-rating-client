export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string | null;
  remember_token: string | null;
  created_at: string;
  rating_users: IRatingUser[];
  achivements_users: IAchievementUser[];
}

export interface IRatingUser {
  id: number;
  score: number;
  discipline_id: number;
  user_id: number;
  created_at: string;
}

export interface IAchievementUser {
  id: number;
  achievements_id: number;
  title: string;
  score: number;
  image: string | null;
  user_id: number;
}

export interface IAchievement {
  id: number;
  achievements_id: number;
  title: string;
  discipline_id: number;
  created_at: string;
  score: number;
  image: string | null;
}

export interface IFetchUsers {
  data: IUser[];
}

export interface IFetchAchievements {
  data: IAchievement[];
}
