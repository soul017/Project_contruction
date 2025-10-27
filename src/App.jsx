import { Routes, Route, Navigate, Outlet } from "react-router-dom";

// Admin Imports
import ContractManagementPage from './Pages/Admin/ContractManagementPage';
import AdminLayout from "./pages/Admin/AdminLayout";
import ClientsPage from "./pages/Admin/Client";
import SuppliersPage from "./pages/Admin/Supplier";
import SubcontractorsPage from "./pages/Admin/Subcontractor";
import InvoicesPage from "./pages/Admin/Invoice";
import ReportsPage from "./pages/Admin/Report";
import ReportsAnalyticsPage from "./pages/Admin/ReportsAnalyticsPage";
import EquipmentManagement from "./pages/Admin/EquipmentManagement";
import DocumentManagement from "./pages/Admin/DocumentManagement";
import Dashboard from "./pages/Admin/Dashboard";
import SalesAndBilling from "./pages/Admin/SalesBilling";
import Alert from "./pages/Admin/sales and billing/Alerts";
import CreateInvoice from "./pages/Admin/sales and billing/CreateInvoice";

// Super Admin Imports
import SuperAdminLayout from "./pages/Superadmin/components/SuperAdminLayout";
import SuperDashboard from "./pages/Superadmin/SuperDashboard";
import SuperUsers from "./pages/Superadmin/SuperUsers";
import ModulesPage from "./pages/Superadmin/components/Module";
import SuperNotifications from "./pages/Superadmin/SuperNotifications";
import Plan from "./pages/Superadmin/Plan";
import TransactionsPage from "./pages/Superadmin/Transaction";
import UserBackupPage from "./pages/Superadmin/Backup";
import TrainingSupportPage from "./pages/Superadmin/TrainingSupport";

// Subcontractor Imports
import MainLayout from "./layout/MainLayout";
import SubDashboard from "./pages/SubcontractorDashboard";
import Projects from "./pages/Projects";
import Material from "./pages/Material";
import Payments from "./pages/Payments";
import Work from "./pages/Work";
import SubReports from "./pages/SubReports";
import Recent from "./pages/Recent";
import SubProfile from "./pages/SubProfile";
import Help from "./pages/Help&Support";

// Supplier Imports
import Purchase from "./pages/supplierdashboard/purchase&procurement";
import Deliveries from "./pages/supplierdashboard/Deliveries";
import Invoices from "./pages/supplierdashboard/Invoices";
import Document from "./pages/supplierdashboard/Documents";
import Notification from "./pages/supplierdashboard/Notification";
import Supreports from "./pages/supplierdashboard/supreports";
import Profile from "./pages/supplierdashboard/Profile";
import Supdashboard from "./pages/supplierdashboard/supdashboard";
// import SalesAndBilling from "./pages/Admin/SalesAndBilling";

// PMC Imports
import PMCLayout from "./pages/PMC/components/PMCLayout";
import PMCDashboard from "./pages/PMC/PMCDashboard";
import PMCProject from "./pages/PMC/PMCProject";

//login
import LoginPage from "./pages/Login";
import SignupPage from "./pages/SignUp";
import ForgotPasswordPage from "./pages/ForgotPass";
import TdsManagement from "./pages/Admin/sales and billing/TdsManagement";
import RABilling from "./pages/Admin/sales and billing/RABilling";
import DebitCreditNote from "./pages/Admin/sales and billing/DebitCreditNote";
import GstCalculator from "./pages/Admin/sales and billing/GstCalculator";
import UserAssignment from "./pages/Admin/UserAssignment";
import ProjectManager from "./pages/Admin/ProjectManager";
import RetentionManagement from "./pages/Admin/sales and billing/RetentionManagement";
import PurchaseManagement from "./pages/Admin/PurchaseManagement";

// --- Protected Route Component ---
// This component checks if a user is logged in (by checking sessionStorage).
// If they are, it shows the component (via <Outlet />).
// If not, it redirects them to the login page.
const ProtectedRoute = () => {
  const auth = sessionStorage.getItem("auth");
  return auth ? <Outlet /> : <Navigate to="/" replace />;
};
// --- End Protected Route Component ---


function App() {
  return (
    <Routes>
      {/* Public Routes (No login required) */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* --- Protected Routes --- */}
      {/* All routes inside here will require a user to be logged in */}
      <Route element={<ProtectedRoute />}>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="SalesAndBilling" element={<SalesAndBilling />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="suppliers" element={<SuppliersPage />} />
          <Route path="subcontractors" element={<SubcontractorsPage />} />
          <Route path="invoices" element={<InvoicesPage />} />
          <Route path="Report&Analytics" element={<ReportsAnalyticsPage />} />
          <Route path="EquipmentManagement" element={<EquipmentManagement />} />
          <Route path="DocumentManagement" element={<DocumentManagement />} />
          <Route path="alerts" element={<Alert />} />
          <Route path="reports" element={<ReportsPage />} />
          {/* <Route path="settings" element={<SettingsPage />} />  */}
          {/* <Route path="settings" element={<SettingsPage />} /> */}
          <Route path="alerts" element={<Alert />} />
          <Route path="Newinvoice" element={<CreateInvoice />} />
          <Route path="Rabilling" element={<RABilling />} />
          <Route path="tdsmanagement" element={<TdsManagement />} />
          <Route path="debitandcreditnote" element={<DebitCreditNote />} />
          <Route path="gstcalculator" element={<GstCalculator />} />
          <Route path="userassignment" element={<UserAssignment />} />
          <Route path="projectmanagement" element={<ProjectManager />} />
          <Route path="retentionmanagement" element={<RetentionManagement />} />
          {/* Purchase management */}
          <Route path="purchasemanagement" element={<PurchaseManagement />} />
          <Route
            path="contract-management"
            element={<ContractManagementPage />}
          
          />
        </Route>

        {/* Superadmin Routes */}
        <Route path="/superadmin" element={<SuperAdminLayout />}>
          <Route index element={<SuperDashboard />} />
          <Route path="users" element={<SuperUsers />} />
          <Route path="plan" element={<Plan />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="modules" element={<ModulesPage />} />
          <Route path="backup" element={<UserBackupPage />} />
          <Route path="notifications" element={<SuperNotifications />} />
          <Route path="training-support" element={<TrainingSupportPage />} />
        </Route>

        {/* Subcontractor Dashboard */}
        <Route
          path="/subcontractor"
          element={<MainLayout role="subcontractor" />}
        >
          <Route index element={<SubDashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="material" element={<Material />} />
          <Route path="payments" element={<Payments />} />
          <Route path="work" element={<Work />} />
          <Route path="subreports" element={<SubReports />} />
          <Route path="recent" element={<Recent />} />
          <Route path="help" element={<Help />} />
          <Route path="subprofile" element={<SubProfile />} />
        </Route>

        {/* Supplier Dashboard */}
        <Route path="/supplierdashboard" element={<MainLayout role="supplier" />}>
          <Route index element={<Supdashboard />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="deliveries" element={<Deliveries />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="documents" element={<Document />} />
          <Route path="notification" element={<Notification />} />
          <Route path="supreports" element={<Supreports />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* PMC Routes */}
        <Route path="/PMC" element={<PMCLayout />}>
          <Route index element={<PMCDashboard />} />
          <Route path="Project" element={<PMCProject />} />
        </Route>
        
      </Route>
      {/* --- End Protected Routes --- */}

    </Routes>
  );
}

export default App;