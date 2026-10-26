import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import artmsLogo from "./assets/ARTMS_LOGO.png";

const API_BASE = (import.meta.env.VITE_ARTMS_API_BASE_URL || "https://artms-backend.onrender.com/api").replace(/\/+$/, "");

// Every method/path below is taken from the ARTMS Laravel route:list --path=api catalog.
// The paths are relative to API_BASE, which already ends in /api.
const routeRows = [
"GET /ai/applicants","GET /ai/evaluations","GET /ai/rankings","PATCH /ai/review/{applicant}","POST /ai/screen-batch","POST /ai/screen/{applicant}",
"GET /applicants","POST /applicants/bulk-delete","GET /applicants/rankings","GET /applicants/{applicant}","PUT /applicants/{applicant}","PATCH /applicants/{applicant}","DELETE /applicants/{applicant}","PATCH /applicants/{applicant}/hire","POST /applicants/{applicant}/hire","PATCH /applicants/{applicant}/hold","POST /applicants/{applicant}/match-position","POST /applicants/{applicant}/notes","PATCH /applicants/{applicant}/pool","PATCH /applicants/{applicant}/ready-for-interview","PATCH /applicants/{applicant}/reject","POST /applicants/{applicant}/resend-interview-invite","GET /applicants/{applicant}/resume",
"GET /approvals/pending","GET /archives/{type}","POST /archives/{type}/{id}/restore",
"GET /attendance","POST /attendance","GET /attendance-summary","POST /attendance/bulk-tag","POST /attendance/clock-in","POST /attendance/clock-out","POST /attendance/import-csv","GET /attendance/metrics/{employee}","GET /attendance/my-summary","GET /attendance/officers","POST /attendance/officers","DELETE /attendance/officers/{id}","GET /attendance/sample-template","GET /attendance/today","DELETE /attendance/{attendance}","GET /attendance/{attendance}","PUT /attendance/{attendance}","PATCH /attendance/{attendance}",
"GET /audit-logs","GET /audit-logs/{auditLog}",
"POST /auth/change-password","POST /auth/forgot-password","POST /auth/login","POST /auth/logout","POST /auth/resend-login-otp","POST /auth/reset-password","GET /auth/session-check","POST /auth/session-check","POST /auth/setup-account","POST /auth/verify-login-otp","POST /auth/verify-otp",
"GET /boot","GET /broadcasting/auth","POST /broadcasting/auth",
"GET /dashboard/admin","GET /dashboard/coo","GET /dashboard/department-head","GET /dashboard/employee","GET /dashboard/super-admin",
"GET /departments","POST /departments","POST /departments/bulk-delete","GET /departments/{department}","PUT /departments/{department}","PATCH /departments/{department}","DELETE /departments/{department}","GET /departments/{department}/workflow","PUT /departments/{department}/workflow",
"GET /developer/ai-keys","POST /developer/ai-keys","POST /developer/ai-keys/test-all","PUT /developer/ai-keys/{id}","DELETE /developer/ai-keys/{id}","POST /developer/ai-keys/{id}/reveal","POST /developer/ai-keys/{id}/test","PATCH /developer/ai-keys/{id}/toggle-active","POST /developer/database/bulk-truncate","POST /developer/database/purge-clean-slate","POST /developer/database/purge-except","POST /developer/database/purge-preset","POST /developer/database/reseed","GET /developer/database/table-data","GET /developer/database/tables","POST /developer/database/truncate","POST /developer/seed",
"GET /document-requirements","POST /document-requirements","GET /document-requirements/checklist/{employee}","GET /document-requirements/download/{document}","POST /document-requirements/review/{document}","PATCH /document-requirements/review/{document}","POST /document-requirements/upload","GET /document-requirements/{document_requirement}","PUT /document-requirements/{document_requirement}","PATCH /document-requirements/{document_requirement}","DELETE /document-requirements/{document_requirement}","PATCH /employee-documents/{document}/review",
"GET /employees","POST /employees","POST /employees/bulk-delete","GET /employees/{employee}","PUT /employees/{employee}","PATCH /employees/{employee}","DELETE /employees/{employee}","GET /employees/{employee}/attendance-stats","PATCH /employees/{employee}/clearance","POST /employees/{employee}/documents","GET /employees/{employee}/documents/{document}/download","PATCH /employees/{employee}/documents/{document}/status","GET /employees/{employee}/evaluations","POST /employees/{employee}/evaluations","GET /employees/{employee}/history","GET /employees/{employee}/requirements-checklist","POST /employees/{employee}/requirements/upload","PATCH /employees/{employee}/terminate",
"GET /hr/availabilities","POST /hr/availabilities","POST /hr/availabilities/block","GET /hr/availabilities/{availability}","PUT /hr/availabilities/{availability}","PATCH /hr/availabilities/{availability}","DELETE /hr/availabilities/{availability}","GET /hr/calendar-feed",
"GET /interview-panelists/eligible","GET /interview-panelists/search","GET /interviews","POST /interviews","GET /interviews/{interview}","PUT /interviews/{interview}","PATCH /interviews/{interview}","DELETE /interviews/{interview}","POST /interviews/{interview}/analyze-live","POST /interviews/{interview}/behavioral-metrics","GET /interviews/{interview}/confirm","POST /interviews/{interview}/confirm","PATCH /interviews/{interview}/confirm","POST /interviews/{interview}/confirm-awol","GET /interviews/{interview}/document","POST /interviews/{interview}/end-session","POST /interviews/{interview}/livekit-token","POST /interviews/{interview}/mark-awol","POST /interviews/{interview}/notes","POST /interviews/{interview}/persist-artifacts","GET /interviews/{interview}/processing-status","GET /interviews/{interview}/recordings/{recording}/stream","GET /interviews/{interview}/report","POST /interviews/{interview}/resend-invitation","POST /interviews/{interview}/send-reminder","POST /interviews/{interview}/transcribe-audio","POST /interviews/{interview}/transcript","POST /interviews/{interview}/transcript-attachments","DELETE /interviews/{interview}/transcript-attachments/{attachment}","GET /interviews/{interview}/transcript-attachments/{attachment}/download","GET /interviews/{interview}/transcripts","PUT /interviews/{interview}/transcripts/{transcript}","DELETE /interviews/{interview}/transcripts/{transcript}",
"GET /job-categories","POST /job-categories","PUT /job-categories/{id}","DELETE /job-categories/{id}","POST /job-categories/{id}/archive",
"GET /job-library","POST /job-library","GET /job-library/approvals","GET /job-library/approved","GET /job-library/approvers","POST /job-library/bulk-delete","POST /job-library/parse-document","GET /job-library/{jobLibrary}","PATCH /job-library/{jobLibrary}/approve","PUT /job-library/{job_library}","PATCH /job-library/{job_library}","DELETE /job-library/{job_library}",
"GET /job-postings","POST /job-postings","POST /job-postings/bulk-delete","GET /job-postings/{jobPosting}","PUT /job-postings/{jobPosting}","PATCH /job-postings/{jobPosting}","DELETE /job-postings/{jobPosting}","PATCH /job-postings/{jobPosting}/approve","PATCH /job-postings/{jobPosting}/toggle-publish",
"GET /leaves","POST /leaves","GET /leaves/{leaf}","PUT /leaves/{leaf}","PATCH /leaves/{leaf}","DELETE /leaves/{leaf}","PATCH /leaves/{leaveRequest}/approve","POST /livekit/webhook","GET /login","POST /login","POST /logout",
"GET /manpower-requests","POST /manpower-requests","GET /manpower-requests-approved-for-posting","POST /manpower-requests/bulk-delete","DELETE /manpower-requests/clean-rejected","GET /manpower-requests/stats","GET /manpower-requests/{manpowerRequest}/approvals","POST /manpower-requests/{manpowerRequest}/approvals/action","PATCH /manpower-requests/{manpowerRequest}/approve","GET /manpower-requests/{manpower_request}","PUT /manpower-requests/{manpower_request}","PATCH /manpower-requests/{manpower_request}","DELETE /manpower-requests/{manpower_request}",
"GET /me","POST /me/avatar","PUT /me/profile","POST /me/update-profile","POST /messages","GET /messages/conversations","GET /messages/sync","GET /messages/users","PUT /messages/{id}/read","GET /messages/{userId}","GET /my-requirements","POST /my-requirements/upload","DELETE /my-requirements/{document}","GET /my-requirements/{document}/download","GET /notifications","POST /notifications/read-all","POST /notifications/{id}/read",
"GET /performance-evaluations/metrics","GET /permissions","GET /permissions/all-roles","GET /permissions/my-permissions","GET /permissions/role/{role}","POST /permissions/role/{role}","POST /permissions/sync-defaults",
"POST /public/applicants","POST /public/applicants/track","GET /public/boot","POST /public/contact","GET /public/health","GET /public/interview-awol/details","POST /public/interview-awol/respond","POST /public/interview-schedule/confirm","GET /public/interview-schedule/hr-availability","POST /public/interview-schedule/match","POST /public/interview-schedule/respond","GET /public/interview-schedule/session-info","POST /public/interview-schedule/verify-email","POST /public/interviews/{interview}/behavioral-metrics","GET /public/interviews/{interview}/confirm","POST /public/interviews/{interview}/confirm","PATCH /public/interviews/{interview}/confirm","POST /public/interviews/{interview}/consent","POST /public/interviews/{interview}/end-session","GET /public/interviews/{interview}/livekit-token","POST /public/interviews/{interview}/livekit-token","GET /public/interviews/{interview}/processing-status","POST /public/interviews/{interview}/transcribe-audio","POST /public/interviews/{interview}/transcript","POST /public/interviews/{interview}/verify-applicant","GET /public/job-postings","GET /public/job-postings/{jobPosting}","GET /public/match-position/{token}","POST /public/match-position/{token}/respond","POST /public/parse-resume",
"GET /reports/analytics","GET /reports/coo-overview","GET /roles","POST /roles","PUT /roles/{id}","DELETE /roles/{id}","GET /sidebar-counts","GET /system-settings","PUT /system-settings","POST /system-settings/reset",
"POST /users","GET /users","GET /users/archived","POST /users/bulk-archive","POST /users/bulk-force-delete","POST /users/bulk-restore","DELETE /users/{id}/force","POST /users/{id}/restore","PUT /users/{user}","PATCH /users/{user}","DELETE /users/{user}","GET /users/{user}","POST /users/{user}/resend-activation","PATCH /users/{user}/toggle-status","POST /users/{user}/unlock"
];

const tableTags = {
  Public: "Public careers, application, applicant tracking, and interview access. Tables: job_postings, job_library, applicants, interviews, interview_verification_sessions.",
  Authentication: "Login, OTP, password recovery, account setup, and session operations. Tables: users, authentication_otps, account_setup_tokens, user_active_sessions, personal_access_tokens, password_reset_tokens.",
  "Account & Profile": "Current user profile and avatar. Tables: users, employees, departments.",
  "Dashboard & Reports": "Role dashboards, recruitment analytics, and executive reporting. Tables: applicants, job_postings, interviews, attendance_logs, employees, manpower_requests.",
  "Users & Roles": "User accounts, roles, and permission assignment. Tables: users, custom_roles, permissions, departments.",
  Departments: "Organization units and approval workflows. Tables: departments, department_approval_workflows, department_approval_workflow_steps.",
  Employees: "Employee profiles, employment records, history, and evaluations. Tables: employees, users, departments, employee_documents.",
  "Employee Requirements": "Document definitions, employee uploads, checklists, and reviews. Tables: document_requirements, employee_documents.",
  "Job Library": "Reusable job templates, optional salary ranges, and approvals. Tables: job_library, job_categories.",
  "Job Categories": "Job category directory. Tables: job_categories, job_library.",
  "Job Postings": "Vacancies, posting approvals, and publication. Tables: job_postings, job_library, departments, manpower_requests.",
  Applicants: "Candidate records, resumes, notes, ranking, and AI screening. Tables: applicants, applicant_documents, applicant_notes, ai_evaluations, applicant_position_matches.",
  "AI Screening": "Applicant evaluation, ranking, and HR review. Tables: applicants, ai_evaluations.",
  "Interviews & Scheduling": "HR availability, interviews, panelists, transcripts, recordings, and interview reports. Tables: interviews, interview_slots, hr_interview_availabilities, interview_panelists, interview_interviewers, interview_transcripts, interview_transcript_attachments, interview_recordings, interview_behavioral_metrics, ai_interview_reports.",
  Attendance: "Attendance logs, summary, clock events, and attendance officers. Tables: attendance_logs, attendance_officers, employees.",
  "Notifications & Messages": "System notifications and internal messages. Tables: notifications, messages, users.",
  "Manpower Requests": "Department headcount requests and multi-stage approvals. Tables: manpower_requests, manpower_request_approvals, manpower_request_approval_actions, departments.",
  "System Settings": "Application configuration. Tables: system_settings, system_api_configs. Private integration values are excluded from examples.",
  Archives: "Archived records and restoration of soft-deleted resources.",
  "Developer Tools": "Restricted diagnostics and database maintenance. Destructive operations require elevated access.",
  "Leave Requests": "Employee leave submission and approval. Tables: leave_requests, employees.",
  "Audit Logs": "Administrative activity history. Tables: audit_logs, users.",
  Performance: "Performance metrics. Tables: performance_evaluations, employees.",
  "Application Bootstrap": "Startup configuration and public platform health.",
  "Interview Integrations": "LiveKit session callbacks. Tables: interviews, interview_recordings."
};

function getTag(path) {
  if (path.startsWith("/public/") || path.startsWith("/storage/")) return "Public";
  const root = path.split("/")[1];
  const map = {
    ai: "AI Screening", applicants: "Applicants", approvals: "Manpower Requests", archives: "Archives",
    attendance: "Attendance", "attendance-summary": "Attendance", "audit-logs": "Audit Logs", auth: "Authentication",
    boot: "Application Bootstrap", broadcasting: "Interview Integrations", dashboard: "Dashboard & Reports",
    departments: "Departments", developer: "Developer Tools", "document-requirements": "Employee Requirements",
    "employee-documents": "Employee Requirements", employees: "Employees", hr: "Interviews & Scheduling",
    "interview-panelists": "Interviews & Scheduling", interviews: "Interviews & Scheduling",
    "job-categories": "Job Categories", "job-library": "Job Library", "job-postings": "Job Postings",
    leaves: "Leave Requests", livekit: "Interview Integrations", login: "Authentication", logout: "Authentication",
    "manpower-requests": "Manpower Requests", me: "Account & Profile", messages: "Notifications & Messages",
    "my-requirements": "Employee Requirements", notifications: "Notifications & Messages",
    "performance-evaluations": "Performance", permissions: "Users & Roles", reports: "Dashboard & Reports",
    roles: "Users & Roles", "sidebar-counts": "Dashboard & Reports", "system-settings": "System Settings",
    users: "Users & Roles", sanctum: "Authentication", up: "Application Bootstrap"
  };
  return map[root] || "Application Bootstrap";
}

const publicPaths = new Set([
  "/", "/auth/forgot-password", "/auth/login", "/auth/resend-login-otp", "/auth/reset-password",
  "/auth/session-check", "/auth/setup-account", "/auth/verify-login-otp", "/auth/verify-otp",
  "/interviews/{interview}/confirm", "/login", "/public/contact", "/public/health",
  "/public/boot", "/livekit/webhook"
]);
const slug = (value) => value.replace(/[-_]/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
const idNames = new Set(["id", "applicant", "interview"]);
const componentId = { id: "RecordId", applicant: "ApplicantId", interview: "InterviewId" };
const pathType = (name) => ["token", "type", "role", "path"].includes(name) ? { type: "string" } : { type: "integer", format: "int64" };
const param = (name, description, type = "string", extra = {}) => ({ name, in: "query", required: false, description, schema: { type, ...(type === "integer" ? { minimum: 1 } : {}), ...extra } });

const queryParameters = {
  "/applicants": [
    param("page", "Page number.", "integer"), param("per_page", "Results per page; default 15.", "integer"),
    param("search", "Search name, email, phone, application ID, job title, or department."),
    param("status", "Filter by recruitment pipeline status."),
    param("is_on_hold", "Filter applicants on hold.", "boolean"), param("is_pooled", "Filter talent-pool applicants.", "boolean"),
    param("job_posting_id", "Filter by job posting.", "integer"), param("is_shortlisted", "Filter shortlisted applicants.", "boolean"),
    param("exclude_hired", "Exclude hired applicants.", "boolean"),
    param("sort_by", "Supported: newest, oldest, score_desc, score_asc.", "string", { enum: ["newest", "oldest", "score_desc", "score_asc"] })
  ],
  "/attendance": [
    param("page", "Page number.", "integer"), param("per_page", "Results per page; maximum 250.", "integer", { maximum: 250 }),
    param("employee_id", "Filter by employees.id.", "integer"), param("date", "One attendance date.", "string", { format: "date" }),
    param("date_from", "Start date inclusive.", "string", { format: "date" }), param("date_to", "End date inclusive.", "string", { format: "date" }),
    param("department_id", "Filter by department.", "integer"), param("status", "Filter attendance status."),
    param("source", "Filter by record source."), param("search", "Search employee, department, device, or remarks.")
  ],
  "/audit-logs": [
    param("page", "Page number.", "integer"), param("per_page", "Results per page; default 20.", "integer"),
    param("search", "Search action, module, description, IP, or actor."), param("user_id", "Filter by actor.", "integer"),
    param("module", "Filter by module."), param("action", "Filter by action."),
    param("date_from", "Start date or timestamp.", "string", { format: "date-time" }), param("date_to", "End date or timestamp.", "string", { format: "date-time" })
  ],
  "/employees": [
    param("page", "Page number.", "integer"), param("per_page", "Results per page; default 15.", "integer"),
    param("department_id", "Filter by department ID.", "integer"), param("search", "Search employee name, email, ID, position, phone, or department."),
    param("status", "Filter by employment status.")
  ],
  "/interviews": [
    param("page", "Page number.", "integer"), param("per_page", "Results per page; default 15.", "integer"),
    param("status", "Filter by interview status."), param("stage", "Filter by interview stage."),
    param("applicant_id", "Filter by applicant.", "integer")
  ],
  "/job-library": [
    param("page", "Page number.", "integer"), param("per_page", "Results per page; default 100.", "integer"),
    param("search", "Search job title or category."), param("approval_status", "Filter by approval state."),
    param("include_inactive", "Include inactive job templates.", "boolean")
  ],
  "/job-library/approvals": [
    param("page", "Page number.", "integer"), param("per_page", "Results per page; maximum 100.", "integer", { maximum: 100 }),
    param("approval_status", "Filter by pending, resubmitted, new_pending, revised, needs_revision, approved, or rejected.")
  ],
  "/job-library/approved": [param("department_id", "Limit results to a department.", "integer")],
  "/job-postings": [
    param("page", "Page number.", "integer"), param("per_page", "Results per page; default 15.", "integer"),
    param("search", "Search job title."), param("status", "Posting status."), param("approval_status", "Approval status."),
    param("department_id", "Filter by department.", "integer")
  ],
  "/public/job-postings": [
    param("page", "Page number.", "integer"), param("per_page", "Results per page; default 12.", "integer"),
    param("search", "Search title, category, description, or department."), param("department_id", "Filter by department.", "integer")
  ],
  "/manpower-requests": [
    param("page", "Page number.", "integer"), param("per_page", "Results per page; default 15.", "integer"),
    param("search", "Search position, department, or requester."), param("status", "Filter request status."),
    param("department_id", "Filter by department.", "integer")
  ],
  "/users": [
    param("page", "Page number.", "integer"), param("per_page", "Results per page; -1 with all=true returns all matches.", "integer"),
    param("role", "Filter by role key."), param("department_id", "Filter by department.", "integer"),
    param("all", "Return all matches.", "boolean")
  ],
  "/departments": [
    param("search", "Search department name.")
  ],
};

const objSchema = (description, properties, required = []) => ({ type: "object", description, properties, required, additionalProperties: false });
const stringProp = (description, extra = {}) => ({ type: "string", description, ...extra });
const numberProp = (description, extra = {}) => ({ type: "number", description, ...extra });
const intProp = (description, extra = {}) => ({ type: "integer", format: "int64", description, ...extra });
const requestSchemas = {
  "POST /auth/login": objSchema("Email and password begin the OTP login flow. Do not put real credentials in examples.", {
    email: stringProp("Account email.", { format: "email", example: "hr.admin@example.com" }),
    password: stringProp("Account password.", { format: "password", example: "REPLACE_WITH_PASSWORD" }),
    session_id: stringProp("Optional client session identifier."), force_login: { type: "boolean", description: "Replace an existing session.", default: false }
  }, ["email", "password"]),
  "POST /auth/verify-login-otp": objSchema("Completes the login OTP challenge.", {
    verification_id: stringProp("Challenge ID returned by login."), otp: stringProp("Six-character one-time code.", { minLength: 6, maxLength: 6, example: "123456" })
  }, ["verification_id", "otp"]),
  "POST /public/applicants": objSchema("Public application; submit multipart/form-data. Resume is required, maximum 10 MB, allowed extensions pdf/doc/docx/txt/rtf/odt.", {
    job_posting_id: intProp("Open job_postings.id.", { example: 12 }),
    first_name: stringProp("Applicant first name; max 100.", { maxLength: 100 }),
    middle_name: stringProp("Optional middle name; max 100.", { maxLength: 100 }),
    last_name: stringProp("Applicant last name; max 100.", { maxLength: 100 }),
    email: stringProp("Applicant email.", { format: "email", maxLength: 255 }),
    phone: stringProp("Optional phone; max 20.", { maxLength: 20 }),
    date_of_birth: stringProp("Optional birth date; applicant must be at least 18.", { format: "date" }),
    address: stringProp("Optional address; max 500.", { maxLength: 500 }),
    gender: stringProp("Optional gender."), civil_status: stringProp("Optional civil status."),
    nationality: stringProp("Optional nationality."),
    resume: stringProp("Required resume file; max 10 MB.", { format: "binary" }),
    informed_consent: { type: "boolean", description: "Required data-processing consent." }
  }, ["job_posting_id", "first_name", "last_name", "email", "resume", "informed_consent"]),
  "POST /attendance": objSchema("Attendance record values; validated by AttendanceController.", {
    employee_id: intProp("Existing employees.id."), date: stringProp("Attendance date.", { format: "date" }),
    time_in: stringProp("Local time HH:mm.", { pattern: "^([01]\\d|2[0-3]):[0-5]\\d$" }),
    time_out: stringProp("Local time HH:mm.", { pattern: "^([01]\\d|2[0-3]):[0-5]\\d$" }),
    status: stringProp("Attendance state.", { enum: ["present", "absent", "late", "half_day", "on_leave", "holiday"] }),
    late_minutes: { type: "integer", minimum: 0 }, hours_worked: numberProp("Hours worked.", { minimum: 0 }),
    remarks: stringProp("Optional remarks; maximum 500 characters.", { maxLength: 500 }),
    source: stringProp("Optional source label.", { maxLength: 50 }),
    iot_device_id: stringProp("Optional device ID.", { maxLength: 100 }),
    clock_in_location: stringProp("Optional clock-in location.", { maxLength: 255 }),
    clock_out_location: stringProp("Optional clock-out location.", { maxLength: 255 })
  }, ["employee_id", "date", "status"]),
  "POST /job-library": objSchema("Creates a job template and initializes its approval workflow.", {
    job_title: stringProp("Job title; max 255.", { maxLength: 255 }),
    job_description: stringProp("Job description."),
    qualifications: { type: "array", items: { type: "string" } },
    responsibilities: { type: "array", items: { type: "string" } },
    job_category: stringProp("Category."), employment_type: stringProp("Employment type."),
    salary_type: stringProp("Optional salary format.", { enum: ["exact", "range"] }),
    salary_min: numberProp("Optional lower salary; greater than zero.", { exclusiveMinimum: 0 }),
    salary_max: numberProp("Optional upper salary; greater than zero.", { exclusiveMinimum: 0 }),
    approver_type: stringProp("Approval assignment type.", { enum: ["role", "department_head", "specific_user"] }),
    designated_approver_role: stringProp("Initial approver role.", { enum: ["coo", "super_admin", "department_head", "hr_admin"] }),
    designated_department_id: intProp("Optional departments.id."), designated_approver_id: intProp("Optional users.id."),
    approval_steps: { type: "array", minItems: 1, maxItems: 20, items: { $ref: "#/components/schemas/ApprovalStep" } }
  }, ["job_title", "job_description", "qualifications", "responsibilities"]),
  "POST /manpower-requests": objSchema("Submits a manpower request and initializes configured approval stages.", {
    department_id: intProp("Optional department; defaults to the requester's department."),
    job_library_id: intProp("Optional approved job template."),
    position_needed: stringProp("Requested position."), headcount: { type: "integer", minimum: 1 },
    justification: stringProp("Business justification."),
    qualifications: { type: "array", items: { type: "string" } },
    responsibilities: { type: "array", items: { type: "string" } },
    needed_by: stringProp("Target date.", { format: "date" }),
    urgency: stringProp("Hiring priority.", { enum: ["low", "medium", "high", "critical"] }),
    fit_threshold_high: { type: "integer", minimum: 0, maximum: 100 },
    fit_threshold_medium: { type: "integer", minimum: 0, maximum: 100 },
    approval_steps: { type: "array", minItems: 1, maxItems: 20, items: { $ref: "#/components/schemas/ApprovalStep" } }
  }, ["position_needed", "headcount", "urgency"]),
  "POST /users": objSchema("Creates a user account and sends setup instructions. Password is optional; if supplied, the server requires confirmation and enforces complexity.", {
    first_name: stringProp("First name.", { maxLength: 255 }), middle_name: stringProp("Optional middle name.", { maxLength: 255 }),
    last_name: stringProp("Last name.", { maxLength: 255 }), email: stringProp("Unique email.", { format: "email" }),
    password: stringProp("Optional password.", { format: "password", example: "REPLACE_WITH_PASSWORD" }),
    password_confirmation: stringProp("Password confirmation.", { format: "password", example: "REPLACE_WITH_PASSWORD" }),
    role: stringProp("Standard role or configured custom role.", { enum: ["super_admin", "developer", "hr_admin", "hr_staff", "coo", "department_head", "interviewer", "employee"] }),
    department_id: intProp("Optional departments.id.")
  }, ["first_name", "last_name", "email", "role"]),
  "POST /departments": objSchema("Creates an organization department.", {
    department_name: stringProp("Required, unique name; max 255 characters.", { maxLength: 255 }),
    department_code: stringProp("Optional unique code; max 10 characters.", { maxLength: 10 }),
    description: stringProp("Optional department description."),
    is_active: { type: "boolean", description: "Whether the department is active." }
  }, ["department_name"]),
  "POST /employees": objSchema("Creates an employee profile. Without user_id, name and email are required and a new employee account is created.", {
    user_id: intProp("Optional existing users.id; unique in employees."),
    name: stringProp("Required when user_id is omitted.", { maxLength: 255 }),
    email: stringProp("Required when user_id is omitted.", { format: "email" }),
    company_email: stringProp("Optional unique company email.", { format: "email" }),
    department_id: intProp("Required department ID."),
    position: stringProp("Required position.", { maxLength: 255 }),
    date_hired: stringProp("Required hire date.", { format: "date" }),
    start_date: stringProp("Optional; must be on or after date_hired.", { format: "date" }),
    salary: numberProp("Required salary; zero or greater.", { minimum: 0 }),
    employment_type: stringProp("Employment type."),
    employment_status: stringProp("Employment status.", { enum: ["pending_start", "active", "on_leave", "resigned", "terminated"] }),
    address: stringProp("Address."), contact_number: stringProp("Contact phone."),
    emergency_contact_name: stringProp("Emergency contact name."),
    emergency_contact_number: stringProp("Emergency contact phone.")
  }, ["department_id", "position", "date_hired", "salary"]),
  "POST /job-postings": objSchema("Creates a job posting. A valid job_library_id is required directly or through an eligible manpower request.", {
    job_library_id: intProp("Optional job_library.id; required if not derived from manpower_request_id."),
    department_id: intProp("Required departments.id."),
    manpower_request_id: intProp("Optional fully approved manpower request ID."),
    vacancies_count: { type: "integer", minimum: 1, description: "Required number of vacancies." },
    location: stringProp("Optional work location."),
    description: stringProp("Optional posting description."),
    posting_date: stringProp("Optional posting date.", { format: "date" }),
    closing_date: stringProp("Optional closing date; must be after posting_date.", { format: "date" }),
    qualifications: { type: "array", items: { type: "string" } },
    responsibilities: { type: "array", items: { type: "string" } },
    is_salary_visible: { type: "boolean", description: "Whether public posting shows the salary." },
    is_modified_from_prf: { type: "boolean", description: "Whether posting details differ from the approved requisition." }
  }, ["department_id", "vacancies_count"]),
  "POST /interviews": objSchema("Schedules an interview and can assign multiple interview panelists.", {
    applicant_id: intProp("Required existing applicants.id."),
    job_posting_id: intProp("Required existing job_postings.id."),
    interview_slot_id: intProp("Optional existing interview slot ID."),
    interview_stage: stringProp("Required recruitment stage."),
    scheduled_at: stringProp("Required scheduled date and time.", { format: "date-time" }),
    location: stringProp("Optional location."),
    meeting_link: stringProp("Optional online meeting URL.", { format: "uri" }),
    interview_type: stringProp("Required interview type.", { enum: ["in_person", "online", "onsite", "other", "phone"] }),
    interviewer_id: intProp("Optional lead interviewer users.id."),
    interviewer_email: stringProp("Optional interviewer email.", { format: "email" }),
    interviewer_emails: { type: "array", items: { type: "string", format: "email" } },
    notes: stringProp("Optional interview notes."),
    contact_email: stringProp("Optional contact email.", { format: "email" }),
    contact_number: stringProp("Optional contact number."),
    notify_applicant: { type: "boolean" },
    notify_interviewer: { type: "boolean" },
    panelist_ids: { type: "array", items: { type: "integer", format: "int64", description: "Distinct users.id." } }
  }, ["applicant_id", "job_posting_id", "interview_stage", "scheduled_at", "interview_type"]),
  "POST /auth/forgot-password": objSchema("Send a password reset link.", { email: stringProp("Account email.", { format: "email" }) }, ["email"]),
  "POST /auth/reset-password": objSchema("Reset a password using the emailed reset token.", {
    email: stringProp("Account email.", { format: "email" }), token: stringProp("Password reset token."),
    password: stringProp("New password.", { format: "password", example: "REPLACE_WITH_PASSWORD" }),
    password_confirmation: stringProp("Confirmation.", { format: "password", example: "REPLACE_WITH_PASSWORD" })
  }, ["email", "token", "password", "password_confirmation"])
};

const accessFor = (path, method) => {
  const m = method.toUpperCase();
  const rate = path === "/auth/login" || path === "/login" ? ["auth-login"]
    : ["/auth/forgot-password", "/auth/resend-login-otp", "/auth/reset-password", "/auth/verify-login-otp", "/auth/verify-otp"].includes(path) ? ["6 requests per minute"]
    : path === "/public/contact" ? ["5 requests per minute"]
    : path.includes("transcribe-audio") ? ["ai-transcription"]
    : path === "/public/parse-resume" ? ["ai-public-parser"]
    : path === "/job-library/parse-document" ? ["ai-document-parser"]
    : path.endsWith("/screen") || path.endsWith("/screen-batch") ? ["ai-screening"]
    : path.endsWith("/analyze-live") ? ["ai-live-analysis"]
    : path.endsWith("/report") && path.startsWith("/interviews/") ? ["ai-report"] : [];
  const isOpen = path.startsWith("/public/") || path.startsWith("/storage/") || publicPaths.has(path);
  if (isOpen) return { public: true, roles: [], permissions: [], rate };

  let roles = [];
  let permissions = [];
  if (path.startsWith("/ai/")) {
    roles = ["hr_admin","hr_staff","super_admin"];
    permissions = [m === "GET" ? "view_ai_screening" : path.includes("/review/") ? "review_ai_screening" : "perform_ai_screening"];
  } else if (path.startsWith("/applicants")) {
    roles = m === "GET" ? ["hr_admin","hr_staff","super_admin","coo","interviewer","department_head"] : ["hr_admin","hr_staff","super_admin","coo"];
    permissions = path.includes("/bulk-delete") || (m === "DELETE") ? ["delete_applicants","manage_applicants"]
      : path.endsWith("/hire") ? ["hire_applicants","manage_applicants"]
      : path.endsWith("/reject") ? ["reject_applicants","manage_applicants"]
      : ["edit_applicants","manage_applicants"];
    if (m === "GET") permissions = [];
  } else if (path === "/approvals/pending" || path.startsWith("/manpower-requests/") && (path.includes("/approvals") || path.endsWith("/approve"))) {
    roles = ["department_head","coo","super_admin","hr_admin","hr_staff"];
  } else if (path.startsWith("/archives/")) {
    roles = ["super_admin","hr_admin","hr_staff"];
    permissions = [m === "GET" ? "view_archived_records" : "restore_archived_records"];
  } else if (path.startsWith("/attendance/officers")) {
    if (path !== "/attendance/officers") permissions = ["manage_attendance_officers"];
  } else if (path.startsWith("/audit-logs")) {
    roles = ["super_admin","developer"];
  } else if (path === "/attendance/{attendance}" && m === "DELETE") {
    permissions = ["delete_attendance"];
  } else if (path === "/dashboard/coo") {
    roles = ["coo","super_admin","developer"];
  } else if (path === "/dashboard/department-head") {
    roles = ["department_head","super_admin","developer"];
  } else if (path === "/dashboard/admin") {
    roles = ["hr_admin","hr_staff","interviewer","super_admin","developer"];
  } else if (path === "/dashboard/super-admin") {
    roles = ["super_admin","developer"];
  } else if (path.startsWith("/departments/") && path.endsWith("/workflow")) {
    roles = ["super_admin","hr_admin","hr_staff","developer"];
  } else if (path.startsWith("/departments") && ["POST","PUT","PATCH","DELETE"].includes(m)) {
    roles = ["super_admin","hr_admin","hr_staff","developer"];
  } else if (path.startsWith("/developer/")) {
    roles = path.startsWith("/developer/database/") || path === "/developer/seed" ? ["developer","super_admin"] : ["developer"];
  } else if (path === "/document-requirements/checklist/{employee}" || path === "/document-requirements/download/{document}" || path === "/document-requirements/upload" || path === "/employees/{employee}/requirements-checklist" || path === "/employees/{employee}/requirements/upload") {
    roles = ["super_admin","hr_admin","hr_staff","coo","employee"];
  } else if (path === "/document-requirements" || path === "/document-requirements/{document_requirement}") {
    roles = [];
  } else if (path.startsWith("/document-requirements/")) {
    roles = ["super_admin","hr_admin","hr_staff"];
    permissions = path.includes("/review/") ? ["approve_employee_documents"] : m === "DELETE" ? ["delete_document_requirements"] : m === "POST" ? ["create_document_requirements"] : ["edit_document_requirements"];
  } else if (path.startsWith("/employee-documents/")) {
    roles = ["super_admin","hr_admin","hr_staff"];
    permissions = ["approve_employee_documents"];
  } else if (path.startsWith("/employees")) {
    if (m === "GET") roles = ["hr_admin","hr_staff","super_admin","department_head","coo","developer"];
    else roles = ["hr_admin","hr_staff","super_admin"];
    if (path.includes("/requirements-") || path.includes("/requirements/")) roles = ["super_admin","hr_admin","hr_staff","coo","employee"];
    permissions = path.includes("/requirements-") || path.includes("/requirements/") ? [] : path.endsWith("/bulk-delete") || m === "DELETE" ? ["delete_employees","manage_employees"] : m === "GET" ? ["view_employees","manage_employees"] : [m === "POST" && path === "/employees" ? "create_employees" : "edit_employees","manage_employees"];
    if (path.includes("/evaluations")) { roles = []; permissions = []; }
  } else if (path.startsWith("/hr/")) {
    roles = ["hr_admin","hr_staff","super_admin","coo"];
  } else if (path.startsWith("/interview-panelists") || path.startsWith("/interviews/") || path === "/interviews") {
    roles = ["hr_admin","hr_staff","super_admin","coo","department_head","interviewer","developer"];
    permissions = [m === "GET" ? "view_interviews" : m === "DELETE" ? "delete_interviews" : m === "POST" && path === "/interviews" ? "create_interviews" : "edit_interviews","manage_interviews"];
  } else if (path.startsWith("/job-categories")) {
    roles = ["hr_admin","hr_staff","super_admin","coo"];
    permissions = [m === "GET" ? "view_job_categories" : path.endsWith("/archive") || m === "DELETE" ? "delete_job_categories" : m === "POST" ? "create_job_categories" : "edit_job_categories"];
  } else if (path.startsWith("/job-library") && path !== "/job-library/approvals") {
    if (path === "/job-library/approved" || path === "/job-library/approvers") roles = ["hr_admin","hr_staff","super_admin","coo","department_head"];
    else if (path.includes("/approve")) permissions = ["approve_job_library"];
    else roles = ["hr_admin","hr_staff","super_admin","coo"];
  } else if (path.startsWith("/job-postings")) {
    if (path.endsWith("/approve")) { roles = ["coo","super_admin"]; permissions = ["approve_job_postings"]; }
    else if (path.endsWith("/toggle-publish")) { roles = ["hr_admin","hr_staff","super_admin"]; permissions = ["publish_job_postings","manage_job_postings"]; }
    else if (path.endsWith("/bulk-delete")) { roles = ["hr_admin","super_admin"]; permissions = ["delete_job_postings","manage_job_postings"]; }
    else if (m === "DELETE") { roles = ["hr_admin","super_admin"]; permissions = ["delete_job_postings","manage_job_postings"]; }
    else if (m === "POST") { roles = ["hr_admin","hr_staff","super_admin","department_head"]; permissions = ["create_job_postings","manage_job_postings"]; }
    else if (m === "PUT" || m === "PATCH") { roles = ["hr_admin","hr_staff","super_admin"]; permissions = ["edit_job_postings","manage_job_postings"]; }
    else roles = ["hr_admin","hr_staff","super_admin","coo","department_head"];
  } else if (path.endsWith("/approve") && path.startsWith("/leaves/")) {
    roles = ["hr_admin","hr_staff","super_admin"];
  } else if (path.startsWith("/manpower-requests-approved-for-posting") || path === "/manpower-requests/bulk-delete" || path === "/manpower-requests/clean-rejected") {
    roles = ["hr_admin","hr_staff","super_admin","coo"];
  } else if (path.startsWith("/permissions") && path !== "/permissions/my-permissions") {
    roles = ["super_admin","developer"];
  } else if (path === "/reports/coo-overview") {
    roles = ["coo","super_admin","developer"]; permissions = ["view_reports"];
  } else if (path === "/reports/analytics") {
    roles = ["hr_admin","hr_staff","interviewer","super_admin","developer","coo","department_head"]; permissions = ["view_reports"];
  } else if (path.startsWith("/roles")) {
    roles = ["super_admin","developer"];
  } else if (path === "/system-settings" && (m === "PUT" || m === "POST")) {
    roles = ["super_admin","developer"];
  } else if ((path === "/users" || path === "/users/{user}") && m === "GET") {
    roles = ["super_admin","developer","hr_admin","hr_staff","coo","department_head"];
  } else if (path.startsWith("/users")) {
    roles = ["super_admin","developer"];
  }
  return { public: false, roles, permissions, rate };
};

const dangerous = (path, method) => method === "delete" || path.startsWith("/system-settings") || /\/(archive|restore|approve|reject|hire|bulk-delete|bulk-archive|bulk-force-delete|bulk-restore|truncate|purge|reseed|reset|terminate|release|clean-rejected)(\/|$)/i.test(path);
const uploadPath = (path) => /\/(upload|documents|parse-document|parse-resume|import-csv|avatar|transcribe-audio|transcript-attachments)$/.test(path);
const filePath = (path) => /\/(resume|download|document|stream|sample-template)$/.test(path);
const resourceCreatePaths = new Set([
  "/applicants/{applicant}/match-position", "/applicants/{applicant}/notes", "/attendance", "/attendance/officers",
  "/departments", "/developer/ai-keys", "/document-requirements", "/document-requirements/upload", "/employees",
  "/employees/{employee}/evaluations", "/employees/{employee}/requirements/upload", "/hr/availabilities", "/interviews",
  "/interviews/{interview}/transcript", "/interviews/{interview}/transcript-attachments", "/job-categories", "/job-library",
  "/job-postings", "/leaves", "/manpower-requests", "/messages", "/my-requirements/upload",
  "/public/applicants", "/public/interviews/{interview}/transcript", "/roles", "/users"
]);
const errorSchema = { $ref: "#/components/schemas/ErrorResponse" };
const err = (description) => ({ description, content: { "application/json": { schema: errorSchema, example: { message: description } } } });

function makeOperation(method, path) {
  const access = accessFor(path, method);
  const tag = getTag(path);
  const tail = path.split("/").filter(Boolean).at(-1) || "API";
  const parameterList = [];
  for (const [, name] of path.matchAll(/\{([^}]+)\}/g)) {
    if (idNames.has(name) && componentId[name]) {
      parameterList.push({ $ref: "#/components/parameters/" + componentId[name] });
    } else {
      parameterList.push({ name, in: "path", required: true, description: slug(name) + " path identifier.", schema: pathType(name), example: ["token","type","role","path"].includes(name) ? "example-value" : 42 });
    }
  }
  parameterList.push(...(queryParameters[path] || []));
  if (path === "/auth/login" || path === "/login") parameterList.push({ name: "X-Session-ID", in: "header", required: false, description: "Optional client session identifier.", schema: { type: "string" }, example: "browser-session-id" });

  const key = method.toUpperCase() + " " + path;
  const exactBody = requestSchemas[key];
  const hasBody = ["post","put","patch"].includes(method);
  const multipart = uploadPath(path);
  const requestBody = hasBody ? {
    required: Boolean(exactBody && exactBody.required.length),
    description: multipart ? "Upload request; use multipart/form-data. Exact field names and validation are shown where verified." : "Request payload. Validation rules confirmed from the Laravel action or Form Request are shown for selected high-use operations; other actions accept controller-specific fields and return field-level details with 422.",
    content: {
      [multipart ? "multipart/form-data" : "application/json"]: {
        schema: exactBody || (multipart ? { type: "object", properties: { file: { type: "string", format: "binary" } }, additionalProperties: true } : { type: "object", description: "Controller-specific JSON object.", additionalProperties: true }),
        ...(!exactBody ? { example: multipart ? undefined : {} } : {})
      }
    }
  } : undefined;

  const name = tail.replace(/[{}]/g, "");
  const methodNames = { get: /\{[^}]+}/.test(path) ? "Get " : "List ", post: "Create or run ", put: "Replace ", patch: "Update ", delete: "Delete " };
  const summary = methodNames[method] + slug(name);
  const descriptions = [
    tableTags[tag],
    access.public ? "Access: public route." : "Access: Bearer Sanctum token required.",
    access.roles.length ? "Route roles: " + access.roles.join(", ") + "." : (!access.public ? "Route middleware does not declare a role list; controller policy and record-level authorization may also apply." : ""),
    access.permissions.length ? "Route permission: " + access.permissions.join(", ") + "." : "",
    access.rate.length ? "Rate limit middleware: " + access.rate.join(", ") + "." : "",
    dangerous(path, method) ? "WARNING: this operation can delete or change persistent records. Check the target and request before using Try it out." : "",
    "Server-side validation is authoritative. Invalid fields are returned in the 422 response."
  ].filter(Boolean).join("\n\n");
  const successContent = path === "/attendance/sample-template"
    ? { "text/csv": { schema: { type: "string", format: "binary" } } }
    : filePath(path)
      ? { "application/octet-stream": { schema: { type: "string", format: "binary" } } }
      : { "application/json": { schema: { $ref: "#/components/schemas/ApiResponse" }, example: { message: "Request completed successfully.", data: {} } } };
  const responses = {
    "200": { description: "Successful response.", content: successContent },
    "422": err("Validation error. The response contains field-level validation messages."),
    "500": err("Unexpected server error.")
  };
  if (method === "post" && resourceCreatePaths.has(path)) responses["201"] = { description: "Resource created.", content: { "application/json": { schema: { $ref: "#/components/schemas/ApiResponse" }, example: { message: "Created successfully.", data: {} } } } };
  if (!access.public) {
    responses["401"] = err("Authentication is required or the bearer token is invalid.");
    responses["403"] = err("The account lacks the required role, permission, or record-level access.");
  }
  if (/\{[^}]+\}/.test(path)) responses["404"] = err("The referenced resource was not found.");
  if (access.rate.length) responses["429"] = err("The endpoint rate limit was reached. Wait before retrying.");
  if (path === "/public/health") responses["503"] = err("The API is temporarily unavailable while a required service is unhealthy.");
  if ((path === "/auth/login" || path === "/login") && method === "post") responses["423"] = err("The account is locked.");
  const operation = {
    tags: [tag], summary, description: descriptions,
    operationId: (method + "_" + path).replace(/[{}]/g, "").replace(/[^A-Za-z0-9_]+/g, "_"),
    parameters: parameterList, responses,
    "x-artms-authentication": access.public ? "public" : "sanctum_bearer",
    ...(access.roles.length ? { "x-artms-roles": access.roles } : {}),
    ...(access.permissions.length ? { "x-artms-permissions": access.permissions } : {}),
    ...(access.rate.length ? { "x-artms-rate-limit": access.rate } : {}),
    ...(dangerous(path, method) ? { "x-artms-destructive-action": true } : {})
  };
  if (!access.public) operation.security = [{ bearerAuth: [] }];
  if (requestBody) operation.requestBody = requestBody;
  return operation;
}

const paths = {};
for (const row of routeRows) {
  const split = row.indexOf(" ");
  const method = row.slice(0, split).toLowerCase();
  const path = row.slice(split + 1).replace(/\/+$/, "") || "/";
  paths[path] ||= {};
  paths[path][method] = makeOperation(method, path);
}

const tables = [
"departments","users","password_reset_tokens","sessions","cache","cache_locks","jobs","job_batches","failed_jobs",
"employees","job_library","job_postings","job_categories","applicants","applicant_documents","applicant_notes","applicant_position_matches","ai_evaluations",
"interviews","interview_slots","hr_interview_availabilities","applicant_interview_availabilities","interview_verification_sessions","interview_recordings",
"interview_behavioral_metrics","interview_transcripts","interview_transcript_attachments","interview_panelists","interview_interviewers","interview_dpa_consents",
"interview_awol_confirmations","ai_interview_reports","attendance_logs","attendance_officers","leave_requests","employee_documents","document_requirements",
"audit_logs","notifications","messages","performance_evaluations","manpower_requests","manpower_request_approvals","manpower_request_approval_actions",
"department_approval_workflows","department_approval_workflow_steps","custom_roles","permissions","personal_access_tokens","authentication_otps",
"account_setup_tokens","user_active_sessions","system_api_configs","system_settings","migrations"
];

const apiSpec = {
  openapi: "3.1.0",
  info: {
    title: "Accel4U ARTMS API", version: "1.0.0", summary: "REST API for Accel4U recruitment and talent workflows.",
    description: "ARTMS is Accel4U's AI Recruitment and Talent Management System. This REST API supports recruitment, staffing approvals, interviews, employee records, and attendance. Protected operations use Sanctum bearer authentication; account login includes OTP verification. Request and response details follow the ARTMS Laravel API, and server-side validation remains authoritative."
  },
  servers: [{ url: API_BASE, description: "Accel4U ARTMS REST API server. The URL includes the /api base path." }],
  tags: Object.entries(tableTags).map(([name, description]) => ({ name, description })),
  paths,
  components: {
    securitySchemes: { bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "Sanctum token", description: "Use the token returned after login and OTP verification. Enter it in the Authorize dialog for this page session." } },
    parameters: {
      RecordId: { name: "id", in: "path", required: true, description: "Numeric record ID.", schema: { type: "integer", format: "int64" }, example: 42 },
      ApplicantId: { name: "applicant", in: "path", required: true, description: "Numeric applicants.id.", schema: { type: "integer", format: "int64" }, example: 42 },
      InterviewId: { name: "interview", in: "path", required: true, description: "Numeric interviews.id.", schema: { type: "integer", format: "int64" }, example: 18 },
      PaginationPage: { name: "page", in: "query", required: false, description: "Page number, minimum 1.", schema: { type: "integer", minimum: 1, default: 1 } },
      PerPage: { name: "per_page", in: "query", required: false, description: "Page size; endpoint-specific limits apply.", schema: { type: "integer", minimum: 1 } },
      Search: { name: "search", in: "query", required: false, description: "Search term where supported.", schema: { type: "string", maxLength: 255 } }
    },
    schemas: {
      ApiResponse: { type: "object", description: "ARTMS response envelope; individual endpoints may return additional fields.", properties: { message: { type: "string" }, data: {}, meta: { type: "object", additionalProperties: true } }, additionalProperties: true },
      ErrorResponse: { type: "object", properties: { message: { type: "string" }, errors: { type: "object", additionalProperties: { type: "array", items: { type: "string" } } } }, additionalProperties: true, example: { message: "Validation failed.", errors: { field_name: ["A valid value is required."] } } },
      Department: objSchema("departments table.", { id: intProp("Primary key.", { readOnly: true }), department_name: stringProp("Department name."), department_code: stringProp("Unique code."), description: stringProp("Department description."), is_active: { type: "boolean" }, created_at: stringProp("Created time.", { format: "date-time" }) }),
      UserSummary: objSchema("Safe users table projection. Passwords, OTP values, reset tokens, and 2FA secrets are excluded.", { id: intProp("Primary key."), employee_id: stringProp("Employee ID."), name: stringProp("Display name."), email: stringProp("Account email.", { format: "email" }), role: stringProp("Role key."), department_id: intProp("Department ID."), is_active: { type: "boolean" } }),
      Employee: objSchema("employees table.", { id: intProp("Primary key."), employee_id: stringProp("Employee identifier."), user_id: intProp("Linked users.id."), first_name: stringProp("First name."), last_name: stringProp("Last name."), email: stringProp("Email.", { format: "email" }), department_id: intProp("Department ID."), job_title: stringProp("Job title."), position: stringProp("Position."), hire_date: stringProp("Hire date.", { format: "date" }), employment_status: stringProp("Employment status."), employment_type: stringProp("Employment type."), clearance_processed: { type: "boolean" } }),
      JobLibrary: objSchema("job_library table; reusable job role and approval definition.", { id: intProp("Primary key."), job_title: stringProp("Title."), job_description: stringProp("Description."), qualifications: { type: "array", items: {} }, responsibilities: { type: "array", items: {} }, job_category: stringProp("Category."), employment_type: stringProp("Employment type."), salary_type: stringProp("Salary mode: exact or range."), salary_min: numberProp("Optional lower bound."), salary_max: numberProp("Optional upper bound."), approval_status: stringProp("Approval state."), approval_steps: { type: "array", items: { $ref: "#/components/schemas/ApprovalStep" } }, created_by: intProp("Creator user ID.") }),
      JobPosting: objSchema("job_postings table; vacancy generated from approved job or manpower request.", { id: intProp("Primary key."), job_library_id: intProp("Template ID."), department_id: intProp("Department ID."), manpower_request_id: intProp("Source request ID."), vacancies_count: { type: "integer" }, posting_date: stringProp("Posting date.", { format: "date" }), closing_date: stringProp("Closing date.", { format: "date" }), status: stringProp("Posting status."), approval_status: stringProp("Approval status."), is_published: { type: "boolean" }, is_salary_visible: { type: "boolean" }, location: stringProp("Work location.") }),
      Applicant: objSchema("applicants table; candidate and recruitment pipeline record.", { id: intProp("Primary key."), uuid: stringProp("Applicant UUID.", { format: "uuid" }), application_id: stringProp("Application reference."), job_posting_id: intProp("Applied posting ID."), first_name: stringProp("First name."), last_name: stringProp("Last name."), email: stringProp("Email.", { format: "email" }), status: stringProp("Pipeline status."), is_on_hold: { type: "boolean" }, is_pooled: { type: "boolean" }, is_shortlisted: { type: "boolean" }, overall_score: numberProp("Aggregate score."), ranking: { type: "integer" } }),
      AiEvaluation: objSchema("ai_evaluations table; AI fit and HR review.", { id: intProp("Primary key."), applicant_id: intProp("Applicant ID."), ai_score: numberProp("Score."), confidence_level: numberProp("Confidence."), fit_label: stringProp("Fit tier."), qualification_match: numberProp("Qualification score."), skills_matched: { type: "array", items: { type: "string" } }, skills_missing: { type: "array", items: { type: "string" } }, ai_summary: stringProp("Summary."), hr_decision: stringProp("HR decision.") }),
      Interview: objSchema("interviews table; scheduled interview and evaluation.", { id: intProp("Primary key."), applicant_id: intProp("Applicant ID."), job_posting_id: intProp("Posting ID."), interview_stage: stringProp("Interview stage."), scheduled_at: stringProp("Scheduled time.", { format: "date-time" }), interview_type: stringProp("Interview type."), status: stringProp("Status."), interviewer_id: intProp("Interviewer ID."), rating_score: numberProp("Rating."), evaluation_notes: stringProp("Evaluation notes.") }),
      AttendanceLog: objSchema("attendance_logs table; one employee's daily attendance.", { id: intProp("Primary key."), employee_id: intProp("Employee ID."), date: stringProp("Date.", { format: "date" }), time_in: stringProp("Clock-in."), time_out: stringProp("Clock-out."), status: stringProp("Attendance state."), source: stringProp("Record source."), late_minutes: { type: "integer" }, hours_worked: numberProp("Hours worked."), remarks: stringProp("Remarks.") }),
      ManpowerRequest: objSchema("manpower_requests table; headcount request with approval state and score thresholds.", { id: intProp("Primary key."), department_id: intProp("Department ID."), requested_by: intProp("Requester ID."), job_library_id: intProp("Template ID."), position_needed: stringProp("Requested title."), headcount: { type: "integer" }, justification: stringProp("Business case."), needed_by: stringProp("Target date.", { format: "date" }), urgency: stringProp("Priority."), status: stringProp("Workflow state."), current_approval_step: { type: "integer" }, fit_threshold_high: { type: "integer" }, fit_threshold_medium: { type: "integer" } }),
      DocumentRequirement: objSchema("document_requirements table; employee compliance requirement.", { id: intProp("Primary key."), name: stringProp("Requirement name."), category: stringProp("Category."), description: stringProp("Description."), instructions: stringProp("Employee instructions."), allowed_file_types: { type: "array", items: { type: "string" } }, max_file_size_mb: { type: "integer" }, is_mandatory: { type: "boolean" }, status: stringProp("Requirement state.") }),
      ApprovalStep: objSchema("A configured stage in a multi-approver workflow.", { step_order: { type: "integer" }, step_name: stringProp("Stage label."), approver_type: stringProp("Assignment type."), approver_role: stringProp("Role key."), department_id: intProp("Department ID."), approver_user_id: intProp("Approver user ID.") }),
      LeaveRequest: objSchema("leave_requests table.", { id: intProp("Primary key."), employee_id: intProp("Employee ID."), leave_type: stringProp("Leave category."), start_date: stringProp("Start.", { format: "date" }), end_date: stringProp("End.", { format: "date" }), days_count: { type: "integer" }, status: stringProp("Approval state.") }),
      DatabaseTable: { type: "string", description: "ARTMS database table name.", enum: tables }
    }
  }
};

export default function App() {
  return (
    <main className="artms-api-portal">
      <style>{".artms-api-portal{min-height:100vh;background:#f6f8fc;color:#172554}.portal-header{background:#0b155c;color:white;padding:22px clamp(20px,5vw,72px) 26px;border-bottom:4px solid #f97316}.portal-brand{display:flex;align-items:center;gap:13px;max-width:1450px;margin:0 auto 28px}.portal-mark{width:42px;height:42px;border-radius:11px;background:white;color:#101a62;display:grid;place-items:center;font-weight:950;font-size:23px;letter-spacing:-3px}.portal-mark i{color:#f97316;font-style:normal}.portal-brand strong{display:block;font-size:16px}.portal-brand small{display:block;color:#bdc9f4;font-size:11px;margin-top:3px}.portal-intro{max-width:1450px;margin:auto;display:flex;justify-content:space-between;align-items:end;gap:24px}.portal-intro h1{font-size:clamp(26px,3vw,38px);letter-spacing:-.04em;margin:5px 0 8px}.portal-intro p{margin:0;color:#d4dcfb;font-size:14px;line-height:1.6;max-width:800px}.portal-kicker{color:#ffad73;text-transform:uppercase;letter-spacing:.15em;font-size:10px;font-weight:850}.portal-badges{display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-end}.portal-badge{border:1px solid #5360a0;border-radius:999px;padding:7px 10px;color:#e8edff;font-size:11px;font-weight:750;white-space:nowrap}.portal-content{max-width:1450px;margin:auto;padding:20px clamp(20px,5vw,72px) 48px}.portal-tools{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px;padding:13px 15px;border:1px solid #dce4f0;border-radius:12px;background:white}.portal-server,.portal-auth{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.portal-server{color:#66758e;font-size:12px}.portal-server code{font:11px ui-monospace,monospace;color:#172554;background:#f3f6fb;padding:7px 9px;border:1px solid #e2e8f0;border-radius:7px;overflow-wrap:anywhere}.portal-auth label{font-size:11px;font-weight:800;color:#566781}.portal-auth input{width:min(310px,55vw);height:35px;padding:0 9px;border:1px solid #d7dfed;border-radius:7px;background:#fbfcfe;color:#172554;font:12px ui-monospace,monospace}.portal-button{border:1px solid #d7dfed;border-radius:8px;background:white;color:#1a2850;padding:8px 10px;font:700 12px Arial,sans-serif;cursor:pointer}.portal-button:hover{border-color:#f97316;color:#bc4c08}.portal-auth .authorize{background:#111a62;border-color:#111a62;color:white}.portal-note{margin:0 0 14px;padding:11px 14px;border:1px solid #fed7aa;border-radius:10px;background:#fff8ef;color:#8c4b12;font-size:12px;line-height:1.55}.database-note{border:1px solid #dce4f0;border-radius:12px;background:white;margin-bottom:15px}.database-note summary{cursor:pointer;padding:13px 15px;font-size:13px;font-weight:800}.database-note p{margin:0;padding:0 15px 12px;color:#64748b;font-size:12px;line-height:1.5}.database-list{display:flex;flex-wrap:wrap;gap:6px;padding:0 15px 15px}.database-list code{padding:5px 7px;border:1px solid #e2e8f0;border-radius:6px;background:#f8fafc;color:#3a4b67;font:11px ui-monospace,monospace}.swagger-frame{overflow:hidden;border:1px solid #dce4ef;border-radius:13px;background:white;box-shadow:0 3px 12px #1423500a}.swagger-frame .swagger-ui{font-family:Inter,ui-sans-serif,system-ui,sans-serif}.swagger-frame .swagger-ui .topbar{display:none}.swagger-frame .swagger-ui .info{margin:25px 22px 15px}.swagger-frame .swagger-ui .info .title{color:#111a62;font-weight:800}.swagger-frame .swagger-ui .scheme-container{padding:15px 22px;background:#f8fafc;box-shadow:none}.swagger-frame .swagger-ui .btn.authorize{display:none}.swagger-frame .swagger-ui .opblock.opblock-post{border-color:#38bd88;background:#10b98112}.swagger-frame .swagger-ui .opblock.opblock-get{border-color:#60a5fa;background:#60a5fa12}.swagger-frame .swagger-ui .opblock.opblock-put,.swagger-frame .swagger-ui .opblock.opblock-patch{border-color:#f59e0b;background:#f59e0b12}.swagger-frame .swagger-ui .opblock.opblock-delete{border-color:#fb7185;background:#fb718512}.swagger-frame .swagger-ui .opblock-tag{color:#172554;border-color:#dce4ef}.swagger-frame .swagger-ui .opblock-summary-path{color:#1d2b4c}.swagger-frame .swagger-ui .btn.execute{background:#111a62;border-color:#111a62}.portal-footer{max-width:1450px;margin:auto;padding:0 5vw 30px;color:#78869c;font-size:11px}@media(max-width:720px){.portal-intro{display:block}.portal-badges{justify-content:flex-start;margin-top:14px}.portal-auth{width:100%}.portal-auth input{flex:1;min-width:160px}.swagger-frame .swagger-ui .info{margin-inline:12px}}"}
      </style>
      <style>{`
        :root, html, body, #root { min-height: 100%; background: #fff !important; }
        body { margin: 0; }
        .artms-api-portal { min-height: 100vh; background: #fff !important; color: #172554; }
        .portal-header.api-header { padding: 12px clamp(18px, 5vw, 56px); background: #fff; color: #172554; border-bottom: 1px solid #e5e7eb; }
        .portal-brand.api-brand { display: flex; align-items: center; gap: 18px; max-width: 1450px; margin: 0 auto; }
        .api-logo { display: block; width: 220px; max-width: 54vw; height: auto; object-fit: contain; }
        .api-divider { width: 1px; height: 38px; background: #e2e8f0; }
        .api-label { max-width: 520px; color: #172554; font-size: 14px; font-weight: 750; line-height: 1.35; }
        .api-overview { max-width: 1450px; margin: 24px auto 0; padding: 0 clamp(16px, 4vw, 48px); }
        .overview-panel { display: grid; grid-template-columns: 1fr; align-items: stretch; gap: 24px; padding: clamp(22px, 3vw, 34px); border: 1px solid #dce4f0; border-radius: 18px; background: linear-gradient(115deg, #f7f9ff 0%, #fff 68%); box-shadow: 0 8px 24px rgba(17, 26, 98, .045); }
        .overview-eyebrow, .server-eyebrow, .methods-eyebrow { color: #e8650c; font-size: 10px; font-weight: 850; letter-spacing: .15em; text-transform: uppercase; }
        .overview-copy h1 { max-width: 710px; margin: 9px 0 12px; color: #111a62; font-size: clamp(27px, 3.4vw, 42px); line-height: 1.08; letter-spacing: -.045em; }
        .overview-copy p { max-width: 760px; margin: 0; color: #54627a; font-size: 14px; line-height: 1.75; }
        .overview-copy strong { color: #172554; }
        .server-card { display: flex; flex-direction: column; justify-content: center; min-width: 0; padding: 19px; border: 1px solid #d9e2f5; border-radius: 14px; background: #fff; }
        .server-card > code { display: block; margin: 10px 0 8px; padding: 10px 11px; overflow-wrap: anywhere; border: 1px solid #e3eaf5; border-radius: 8px; background: #f8faff; color: #172554; font: 12px ui-monospace, SFMono-Regular, Consolas, monospace; }
        .server-card p code { display: inline; margin: 0; padding: 0; border: 0; background: transparent; font: inherit; }
        .server-card p { margin: 0; color: #66758e; font-size: 12px; line-height: 1.6; }
        .auth-hint { display: inline-flex; align-items: center; gap: 7px; margin-top: 15px; color: #53627b; font-size: 11px; font-weight: 650; }
        .auth-hint::before { width: 7px; height: 7px; border-radius: 50%; background: #13b981; content: ""; }
        .methods-section { margin-top: 23px; padding: 21px; border: 1px solid #e1e7f1; border-radius: 16px; background: #fff; }
        .methods-heading { display: flex; align-items: end; justify-content: space-between; gap: 16px; margin-bottom: 14px; }
        .methods-heading h2, .endpoints-heading h2 { margin: 5px 0 0; color: #111a62; font-size: 19px; letter-spacing: -.025em; }
        .methods-heading p, .endpoints-heading p { margin: 4px 0 0; color: #6b7890; font-size: 12px; line-height: 1.5; }
        .method-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 10px; }
        .method-card { min-height: 126px; padding: 14px; border: 1px solid #e2e8f0; border-top: 3px solid var(--method-color); border-radius: 11px; background: #fff; }
        .method-card code { display: inline-flex; min-width: 48px; justify-content: center; padding: 5px 8px; border-radius: 6px; background: color-mix(in srgb, var(--method-color) 12%, white); color: var(--method-color); font: 800 11px ui-monospace, monospace; }
        .method-card strong { display: block; margin-top: 11px; color: #1c2a4b; font-size: 12px; }
        .method-card p { margin: 4px 0 0; color: #718096; font-size: 11px; line-height: 1.5; }
        .method-get { --method-color: #2563eb; }
        .method-post { --method-color: #059669; }
        .method-put { --method-color: #d97706; }
        .method-patch { --method-color: #7c3aed; }
        .method-delete { --method-color: #e11d48; }
        .endpoints-heading { display: flex; align-items: end; justify-content: space-between; gap: 18px; margin: 28px 0 3px; padding: 0 2px; }
        .endpoints-heading h2 { font-size: 22px; }
        .portal-content.api-content { max-width: 1450px; margin: 0 auto; padding: 12px clamp(16px, 4vw, 48px) 42px; }
        .swagger-frame.api-doc-frame { overflow: hidden; border: 0; border-radius: 0; background: #fff; box-shadow: none; }
        .api-doc-frame .swagger-ui { font-family: Inter, ui-sans-serif, system-ui, sans-serif; color: #172554; }
        .api-doc-frame .swagger-ui .topbar, .api-doc-frame .swagger-ui .info { display: none !important; }
        .api-doc-frame .swagger-ui .scheme-container { display: flex; justify-content: space-between; padding: 12px 18px; background: #fff; box-shadow: none; border-bottom: 1px solid #e5e7eb; }
        .api-doc-frame .swagger-ui .scheme-container .servers { display: block; }
        .api-doc-frame .swagger-ui .btn.authorize { display: inline-block !important; color: #111a62; border-color: #111a62; }
        .api-doc-frame .swagger-ui .opblock.opblock-post { border-color: #38bd88; background: #10b98112; }
        .api-doc-frame .swagger-ui .opblock.opblock-get { border-color: #60a5fa; background: #60a5fa12; }
        .api-doc-frame .swagger-ui .opblock.opblock-put, .api-doc-frame .swagger-ui .opblock.opblock-patch { border-color: #f59e0b; background: #f59e0b12; }
        .api-doc-frame .swagger-ui .opblock.opblock-delete { border-color: #fb7185; background: #fb718512; }
        .api-doc-frame .swagger-ui .opblock-tag { color: #172554; border-color: #e2e8f0; }
        .api-doc-frame .swagger-ui .opblock-summary-path { color: #1d2b4c; }
        .api-doc-frame .swagger-ui .btn.execute { background: #111a62; border-color: #111a62; }
        .portal-footer { display: none !important; }
        @media (max-width: 600px) {
          .portal-header.api-header { padding-inline: 16px; }
          .portal-brand.api-brand { gap: 12px; }
          .api-logo { width: 145px; }
          .api-label { font-size: 11px; }
          .overview-panel { grid-template-columns: 1fr; gap: 18px; padding: 20px; }
          .api-overview { padding-inline: 12px; }
          .methods-section { padding: 16px 12px; }
          .method-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .method-card:last-child { grid-column: span 2; }
          .methods-heading { align-items: flex-start; flex-direction: column; }
          .endpoints-heading { align-items: flex-start; flex-direction: column; }
          .portal-content.api-content { padding-inline: 10px; }
          .api-doc-frame .swagger-ui .scheme-container { padding-inline: 10px; }
        }
      `}</style>
      <header className="portal-header api-header">
        <div className="portal-brand api-brand"><img className="api-logo" src={artmsLogo} alt="Accel4U AI Recruitment and Talent Management System" /><span className="api-divider" aria-hidden="true" /><span className="api-label">AI Recruitment and Talent Management System (ARTMS) API</span></div>
      </header>
      <section className="api-overview" aria-labelledby="artms-overview-title">
        <div className="overview-panel">
          <div className="overview-copy">
            <span className="overview-eyebrow">About ARTMS</span>
            <h1 id="artms-overview-title">One connected platform for the hiring journey.</h1>
            <p><strong>ARTMS</strong> is Accel4U’s AI Recruitment and Talent Management System. It connects job postings, applicant screening, interview scheduling, staffing approvals, employee records, and attendance in one workflow. This API lets authorized applications exchange data with those ARTMS services through documented requests.</p>
            <span className="auth-hint">Protected endpoints use a Sanctum bearer token. Select Authorize to connect.</span>
          </div>
        </div>
        <section className="methods-section" aria-labelledby="methods-title">
          <div className="methods-heading">
            <div><span className="methods-eyebrow">HTTP METHODS</span><h2 id="methods-title">What does each method do?</h2><p>The method tells the server what action you want to take.</p></div>
          </div>
          <div className="method-grid">
            <article className="method-card method-get"><code>GET</code><strong>Read information</strong><p>Fetch a list or a single record. It does not change data.</p></article>
            <article className="method-card method-post"><code>POST</code><strong>Create or start</strong><p>Create a record or run an action, such as submitting an application.</p></article>
            <article className="method-card method-put"><code>PUT</code><strong>Replace a record</strong><p>Send a full replacement for an existing resource.</p></article>
            <article className="method-card method-patch"><code>PATCH</code><strong>Update selected fields</strong><p>Change only the fields included in your request.</p></article>
            <article className="method-card method-delete"><code>DELETE</code><strong>Remove a record</strong><p>Delete or archive a resource, depending on the endpoint.</p></article>
          </div>
        </section>
        <div className="endpoints-heading" id="api-endpoints">
          <div><span className="methods-eyebrow">ENDPOINT DIRECTORY</span><h2>Explore the ARTMS endpoints</h2><p>Expand a section to review its parameters, request fields, responses, and access rules.</p></div>
        </div>
      </section>
      <section className="portal-content api-content">
        <div className="swagger-frame api-doc-frame">
          <SwaggerUI
            spec={apiSpec}
            docExpansion="list"
            defaultModelsExpandDepth={1}
            displayRequestDuration
            filter
            tryItOutEnabled
            persistAuthorization={false}
          />
        </div>
      </section>
    </main>
  );
}
