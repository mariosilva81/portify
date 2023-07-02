import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyles } from "./styles/globalStyles";
import { ResetStyles } from "./styles/resetStyles";
import { UserProvider } from "./providers/UserContext/UserContext";

export const App = () => {
  return (
    <>
      <ResetStyles />
      <GlobalStyles />
			<UserProvider>
      	<RoutesMain />
			</UserProvider>
      <ToastContainer 
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
    </>
  )
}
