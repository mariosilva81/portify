import { TProfileForm } from "../../pages/DashboardPage/ProfilePage/components/ProfileForm/schema";

export interface IPortfolioProviderProps {
  children: React.ReactNode;
}

export interface IPortfolio {
  id: number;
  color: string;
  position: string;
  description: string;
}

export interface IPortfolioContext {
  portfolio: IPortfolio | null;
  setPortfolio: React.Dispatch<React.SetStateAction<IPortfolio | null>>;
  createPortfolio: (formData: TProfileForm, userId: number) => Promise<void>;
  editPortfolio: (formData: TProfileForm) => Promise<void>;
}
