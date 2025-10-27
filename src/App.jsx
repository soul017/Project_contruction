import { Routes, Route, Navigate, Outlet } from "react-router-dom";

// Admin Imports
import ContractManagementPage from './Pages/Admin/ContractManagementPage';
import AdminLayout from "./Pages/Admin/AdminLayout";
import ClientsPage from "./Pages/Admin/Client";
import SuppliersPage from "./Pages/Admin/Supplier";
import SubcontractorsPage from "./Pages/Admin/Subcontractor";
import InvoicesPage from "./Pages/Admin/Invoice";
import ReportsPage from "./Pages/Admin/Report";
import ReportsAnalyticsPage from "./Pages/Admin/ReportsAnalyticsPage";
import EquipmentManagement from "./Pages/Admin/EquipmentManagement";
import DocumentManagement from "./Pages/Admin/DocumentManagement";
import Dashboard from "./Pages/Admin/Dashboard";
import SalesAndBilling from "./Pages/Admin/SalesBilling";
import Alert from "./Pages/Admin/sales and billing/Alerts";
import CreateInvoice from "./Pages/Admin/sales and billing/CreateInvoice";

// Super Admin Imports
import SuperAdminLayout from "./Pages/Superadmin/components/SuperAdminLayout";
import SuperDashboard from "./Pages/Superadmin/SuperDashboard";
import SuperUsers from "./Pages/Superadmin/SuperUsers";
import ModulesPage from "./Pages/Superadmin/components/Module";
import SuperNotifications from "./Pages/Superadmin/SuperNotifications";
import Plan from "./Pages/Superadmin/Plan";
import TransactionsPage from "./Pages/Superadmin/Transaction";
import UserBackupPage from "./Pages/Superadmin/Backup";
import TrainingSupportPage from "./Pages/Superadmin/TrainingSupport";

// Subcontractor Imports
import MainLayout from "./layout/MainLayout"; // Assuming 'layout' folder is correct
import SubDashboard from "./Pages/SubcontractorDashboard";
import Projects from "./Pages/Projects";
import Material from "./Pages/Material";
import Payments from "./Pages/Payments";
import Work from "./Pages/Work";
import SubReports from "./Pages/SubReports";
import Recent from "./Pages/Recent";
import SubProfile from "./Pages/SubProfile";
import Help from "./Pages/Help&Support";

// Supplier Imports
import Purchase from "./Pages/supplierdashboard/purchase&procurement";
import Deliveries from "./Pages/supplierdashboard/Deliveries";
import Invoices from "./Pages/supplierdashboard/Invoices";
import Document from "./Pages/supplierdashboard/Documents";
import Notification from "./Pages/supplierdashboard/Notification";
import Supreports from "./Pages/supplierdashboard/supreports";
import Profile from "./Pages/supplierdashboard/Profile";
import Supdashboard from "./Pages/supplierdashboard/supdashboard";

// PMC Imports
import PMCLayout from "./Pages/PMC/components/PMCLayout";
import PMCDashboard from "./Pages/PMC/PMCDashboard";
import PMCProject from "./Pages/PMC/PMCProject"; // Corrected this line as well

//login
import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/SignUp";
import ForgotPasswordPage from "./Pages/ForgotPass";
import TdsManagement from "./Pages/Admin/sales and billing/TdsManagement";
import RABilling from "./Pages/Admin/sales and billing/RABilling";
import DebitCreditNote from "./Pages/Admin/sales and billing/DebitCreditNote";
import GstCalculator from "./Pages/Admin/sales and billing/GstCalculator";
import UserAssignment from "./Pages/Admin/UserAssignment";
import ProjectManager from "./Pages/Admin/ProjectManager";
import RetentionManagement from "./Pages/Admin/sales and billing/RetentionManagement";
import PurchaseManagement from "./Pages/Admin/PurchaseManagement";

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