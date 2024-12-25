export interface UserData {
  // Define the properties of the user data object
  // based on your specific requirements
  email: string;
  password: string;
  name?: string;
}
export interface RegisterResponse {
  // Define the properties of the register response object
  // based on your API response structure

  data: {
    user: {
      id: number;
      uuid: string;
      name: string;
      email: string;
      occupation: string;
      occupation_id: number;
      interests: string[];
      profile_pic: string;
      created_at: string;
      language: string;
      platform: string;
      subscription_status: boolean;
      has_used_trial: boolean;
      on_trial: boolean;
      roles: string[];
    };
    token: {
      access_token: string;
      token_type: string;
      expires_in: number;
    };
  };
  message: string;
  status: number;
}
export interface LoginResponse {
  data: {
    user: {
      id: number;
      uuid: string;
      name: string;
      email: string;
      occupation: string;
      occupation_id: number;
      interests: string[];
      profile_pic: string;
      created_at: string;
      language: string;
      platform: string;
      subscription_status: boolean;
      has_used_trial: boolean;
      on_trial: boolean;
      roles: string[];
    };
    token: {
      access_token: string;
      token_type: string;
      expires_in: number;
    };
  };
  message: string;
  status: number;
  // Define the properties of the login response object
  // based on your API response structure
}
