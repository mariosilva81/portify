import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { UnpublishedHomePage } from "../pages/DashboardPage/UnpublishedHomePage";
import { PublishedHomePage } from "../pages/DashboardPage/PublishedHomePage";
import { ProfilePage } from "../pages/DashboardPage/ProfilePage";
import { ProjectsPage } from "../pages/DashboardPage/ProjectsPage";
import { PortfolioPage } from "../pages/PortfolioPage";
import { PublicsRoutes } from "./PublicsRoutes";
import { PrivatesRoutes } from "./PrivatesRoutes";

export const RoutesMain = () => {
	return (
		<Routes>
			<Route element={<PublicsRoutes />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Route>
			<Route element={<PrivatesRoutes />}>
				<Route path="/dashboard/unpublished" element={<UnpublishedHomePage />} />
				<Route path="/dashboard/published" element={<PublishedHomePage />} />
				<Route path="/dashboard/profile" element={<ProfilePage />} />
				<Route path="/dashboard/projects" element={<ProjectsPage />} />
			</Route>
				<Route path="/portfolio" element={<PortfolioPage />} />
		</Routes>
	);
};
