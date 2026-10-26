export const apiBaseUrl = import.meta.env.VITE_ARTMS_API_BASE_URL || "https://artms-backend.onrender.com/api";

export const endpointGroups = [
  { name: "Public", count: 20, description: "Careers, applications, scheduling, and interview access without account credentials.", color: "blue" },
  { name: "Authentication", count: 10, description: "Login, email OTP, password recovery, and authenticated profile access.", color: "green" },
  { name: "Recruitment", count: 39, description: "Job library, postings, applicants, AI screening, and manpower workflows.", color: "orange" },
  { name: "Workforce", count: 34, description: "Employees, attendance, compliance documents, and leave records.", color: "indigo" },
  { name: "Administration", count: 28, description: "Roles, permissions, archives, settings, audits, messages, and reports.", color: "slate" },
  { name: "Interviews", count: 31, description: "Scheduling, LiveKit sessions, transcripts, panelists, recordings, and reports.", color: "violet" },
];

export const databaseDomains = [
  { name: "Identity & access", tables: ["users", "personal_access_tokens", "authentication_otps", "user_active_sessions", "permissions", "custom_roles", "audit_logs"] },
  { name: "Organization & workforce", tables: ["departments", "employees", "attendance_logs", "attendance_officers", "leave_requests", "employee_documents", "document_requirements"] },
  { name: "Recruitment", tables: ["job_library", "job_categories", "job_postings", "manpower_requests", "applicants", "applicant_documents", "applicant_notes", "ai_evaluations"] },
  { name: "Interviews", tables: ["interviews", "interview_panelists", "interview_transcripts", "interview_recordings", "ai_interview_reports", "interview_behavioral_metrics"] },
];

export const databaseNodes = [
  { id: "departments", position: { x: 15, y: 140 }, data: { label: "departments\nOrganization units" } },
  { id: "users", position: { x: 260, y: 30 }, data: { label: "users\nIdentity & access" } },
  { id: "employees", position: { x: 260, y: 245 }, data: { label: "employees\nEmployee profiles" } },
  { id: "job_library", position: { x: 540, y: 25 }, data: { label: "job_library\nReusable role templates" } },
  { id: "job_postings", position: { x: 820, y: 25 }, data: { label: "job_postings\nPublished vacancies" } },
  { id: "applicants", position: { x: 820, y: 230 }, data: { label: "applicants\nCandidate pipeline" } },
  { id: "interviews", position: { x: 1085, y: 230 }, data: { label: "interviews\nInterview sessions" } },
  { id: "attendance", position: { x: 545, y: 290 }, data: { label: "attendance_logs\nDaily workforce records" } },
];

export const databaseEdges = [
  { id: "d-u", source: "departments", target: "users", label: "1 : many", animated: true },
  { id: "d-e", source: "departments", target: "employees", label: "1 : many" },
  { id: "u-e", source: "users", target: "employees", label: "1 : 1" },
  { id: "u-j", source: "users", target: "job_library", label: "created_by" },
  { id: "j-p", source: "job_library", target: "job_postings", label: "1 : many" },
  { id: "d-p", source: "departments", target: "job_postings", label: "department" },
  { id: "p-a", source: "job_postings", target: "applicants", label: "1 : many", animated: true },
  { id: "a-i", source: "applicants", target: "interviews", label: "1 : many" },
  { id: "e-at", source: "employees", target: "attendance", label: "1 : many" },
];

export const roleRows = [
  ["Super Admin", "Full platform administration", "All permissions"],
  ["Developer", "Technical administration and diagnostics", "System and developer tools"],
  ["HR Admin", "Recruitment and employee management", "Role-controlled HR actions"],
  ["HR Staff", "Recruitment processing", "Role-controlled recruitment actions"],
  ["COO", "Executive approvals and reporting", "Approval and report permissions"],
  ["Department Head", "Department staffing requests", "Department-scoped workflows"],
  ["Interviewer", "Candidate interviews and panel work", "Interview permissions"],
  ["Employee", "Personal self-service", "Own account and documents"],
];
