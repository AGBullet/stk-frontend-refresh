// Global types
export type Dictionary<T = any> = {
  [key: string]: T;
};

export type Nullable<T = string> = T | null;

export interface ListItem {
  id: string;
  [key: string]: any;
}

export interface FavoriteItem extends ListItem {
  isFavorite: boolean;
}

export interface XPagination {
  totalCount: number;
  limit: number;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

// Auth types
export type AuthForm = {
  email: string;
  password: string;
};

export type SubscriptionType = null | string;
export type CustomerType = "individual" | "legal";

export interface RegisterForm extends AuthForm {
  confirmPassword: string;
  customerType: CustomerType;
  subscriptionPriceId: SubscriptionType;
  organizationName: string;
  inn: string;
  kpp: string;
  ogrn: string;
  address: string;
  phone: string;
  paymentUrl?: string;
  step: number;
}

export type AuthResponse = {
  accessToken: string;
  userInfo: UserInfo;
};

export type RegResponse = {
  paymentUrl?: string;
};

export interface UserInfo {
  email: string;
  userId: string;
  subscriptionPriceId: SubscriptionType;
  customerType: CustomerType;
  countRequest: number;
  isActive: boolean;
  subscriptionEndTime: string | null;
  paymentUrl?: string;
}
