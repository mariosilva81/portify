import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/DashboardPage/ProfilePage";
import { ProjectsPage } from "../pages/DashboardPage/ProjectsPage";
import { PortfolioPage } from "../pages/PortfolioPage";
import { PublicsRoutes } from "./PublicsRoutes";
import { PrivatesRoutes } from "./PrivatesRoutes";
import { DashboardPage } from '../pages/DashboardPage';
import { useContext } from 'react';
import { UserContext } from '../providers/UserContext/UserContext';

export const RoutesMain = () => {
	const { user } = useContext(UserContext);

	return (
		<Routes>
			<Route element={<PublicsRoutes />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Route>
			<Route element={<PrivatesRoutes />}>
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/dashboard/profile" element={<ProfilePage />} />
				<Route path="/dashboard/projects" element={<ProjectsPage />} />
			</Route>
			<Route path="/portfolio/:userId" element={<PortfolioPage />} />
		</Routes>
	);
};
