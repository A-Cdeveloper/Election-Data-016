export type LoginActionResponseType = {
  success: boolean;
  message?: string;
  error?: string[];
  email?: string;
};

export type LogoutActionResponseType = {
  success: boolean;
  message?: string;
  error?: string[];
};
