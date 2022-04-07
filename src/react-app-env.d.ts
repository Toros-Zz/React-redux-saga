/// <reference types="react-scripts" />

type User = {
  id: number;
  name: string;
  userName: string;
  email: string;
};

type Post = {
  userId: number;
  id?: number;
  title: string;
  body: string;
};
