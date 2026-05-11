import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/user/LandingPage";
import LoginPage from "./pages/user/LoginPage";
import RegistrationPage from "./pages/user/RegistrationPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminPanel from "./pages/admin/AdminPanel";
import AdminLandingPage from "./pages/admin/AdminLandingPage";
import AnnouncementDashboard from "./pages/admin/AnnouncementDashboard";
import CreateAnnouncement from "./components/admin/announcements/CreateAnnouncement";
import EditAnnouncement from "./components/admin/announcements/EditAnnouncement";
import DeleteAnnouncement from "./components/admin/announcements/DeleteAnnouncement";
import MemberDashboard from "./pages/admin/MemberDashboard";
import AddMember from "./components/admin/members/AddMember";
import UpdateMember from "./components/admin/members/UpdateMember";
import DeleteMember from "./components/admin/members/DeleteMember";
import PendingRequests from "./components/admin/members/PendingRequests";
import AttendanceDashboard from "./pages/admin/AttendanceDashboard";
import EditAttendance from "./components/admin/attendance/EditAttendance";
import DeleteAttendance from "./components/admin/attendance/DeleteAttendance";
import AttendanceHistory from "./components/admin/attendance/AttendanceHistory";
import CreateAttendance from "./components/admin/attendance/CreateAttendance";
import ContributionAnalysisPage from "./pages/admin/ContributionAnalysisPage";
import AnalysisSummary from "./components/admin/contributionAI/AnalysisSummary";
import ContributionLeaderboard from "./components/admin/contributionAI/ContributionLeaderboard";
import AILogicReference from "./components/admin/contributionAI/AILogicReference";

// User Pages
import ProfilePage from "./pages/user/ProfilePage";
import UpdateProfilePage from "./pages/user/UpdateProfilePage";
import UserFeedPage from "./pages/user/UserFeedPage";
import UserAttendancePage from "./pages/user/UserAttendancePage";
import UserScorePage from "./pages/user/UserScorePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/userlogin",
    element: <LoginPage />,
  },
  {
    path: "/adminlogin",
    element: <AdminLoginPage />,
  },
  {
    path: "/register",
    element: <RegistrationPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/profile/update",
    element: <UpdateProfilePage />,
  },
  {
    path: "/user/announcements",
    element: <UserFeedPage />,
  },
  {
    path: "/user/attendance",
    element: <UserAttendancePage />,
  },
  {
    path: "/user/score",
    element: <UserScorePage />,
  },
  {
    path: "/admin",
    element: <AdminPanel />,
    children: [
      { index: true, element: <AdminLandingPage /> },
      {
        path: "announcements",
        element: <AnnouncementDashboard />,
      },
      {
        path: "announcements/create",
        element: <CreateAnnouncement />,
      },
      {
        path: "announcements/edit",
        element: <EditAnnouncement />,
      },
      {
        path: "announcements/delete",
        element: <DeleteAnnouncement />,
      },
      {
        path: "members",
        element: <MemberDashboard />,
      },
      {
        path: "members/add",
        element: <AddMember />,
      },
      {
        path: "members/edit",
        element: <UpdateMember />,
      },
      {
        path: "members/delete",
        element: <DeleteMember />,
      },
      {
        path: "members/pending",
        element: <PendingRequests />,
      },
      {
        path: "attendance",
        element: <AttendanceDashboard />,
      },
      {
        path: "attendance/edit",
        element: <EditAttendance />,
      },
      {
        path: "attendance/delete",
        element: <DeleteAttendance />,
      },
      {
        path: "attendance/history",
        element: <AttendanceHistory />,
      },
      {
        path: "attendance/create",
        element: <CreateAttendance />,
      },
      {
        path: "contributions",
        element: <ContributionAnalysisPage />,
      },
      {
        path: "contributions/summary",
        element: <AnalysisSummary />,
      },
      {
        path: "contributions/leaderboard",
        element: <ContributionLeaderboard />,
      },
      {
        path: "contributions/logic",
        element: <AILogicReference />,
      },
    ],
  },
]);

export default router;
