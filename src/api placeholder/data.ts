import { Incident, Priority, Project, Severity, Status } from "@/types";


export const incidentsReports: Incident[] = [
  {
    id: "1",
    title: "Error when saving changes in user profile",
    project: "User Management System",
    creationDate: "2024-06-01",
    assignedTo: "Juan Pérez",
    createdBy: "Ana García",
    status: Status.Resolved,
    priority: Priority.High,
    severity: Severity.Critical,
    description: "When trying to save changes in the user profile, an error message is displayed and changes are not saved.",
    stepsToReproduce: [
      "Log in to the application.",
      "Go to the profile page.",
      "Modify any profile field.",
      "Click on 'Save changes'."
    ],
    actualResult: "An error message stating 'Changes could not be saved' appears.",
    expectedResult: "Profile changes should be saved successfully, and a confirmation message should appear.",
    comments: [
      {
        creator: "Ana García",
        content: "This error started appearing after the latest system update."
      }
    ]
  },
  {
    id: "2",
    title: "Login page not loading",
    project: "Authentication Service",
    creationDate: "2024-06-05",
    assignedTo: "Carlos Ruiz",
    createdBy: "Elena Fernández",
    status: Status.Open,
    priority: Priority.Urgent,
    severity: Severity.Blocker,
    description: "The login page does not load when accessed.",
    stepsToReproduce: [
      "Navigate to the login page.",
      "Wait for the page to load."
    ],
    actualResult: "The page remains blank and does not load.",
    expectedResult: "The login page should load and display the login form.",
    comments: [
      {
        creator: "Elena Fernández",
        content: "This issue is preventing all users from logging in."
      }
    ]
  },
  {
    id: "3",
    title: "Data not syncing between devices",
    project: "Sync Service",
    creationDate: "2024-06-10",
    assignedTo: "María López",
    createdBy: "Luis Martínez",
    status: Status.InProgress,
    priority: Priority.High,
    severity: Severity.Major,
    description: "User data is not syncing between different devices.",
    stepsToReproduce: [
      "Log in to the application on Device A.",
      "Make changes to the data.",
      "Log in to the application on Device B."
    ],
    actualResult: "The changes made on Device A are not reflected on Device B.",
    expectedResult: "Changes should sync and be reflected across all devices.",
    comments: [
      {
        creator: "Luis Martínez",
        content: "This issue was reported by multiple users."
      }
    ]
  },
  {
    id: "4",
    title: "App crashes on startup",
    project: "Mobile Application",
    creationDate: "2024-06-12",
    assignedTo: "Pedro Sánchez",
    createdBy: "Lucía Romero",
    status: Status.Open,
    priority: Priority.Urgent,
    severity: Severity.Blocker,
    description: "The application crashes immediately after startup.",
    stepsToReproduce: [
      "Open the application.",
      "Wait for the startup screen."
    ],
    actualResult: "The application crashes and closes.",
    expectedResult: "The application should start and display the main screen.",
    comments: [
      {
        creator: "Lucía Romero",
        content: "This issue started after the last update."
      }
    ]
  },
  {
    id: "5",
    title: "Slow performance on dashboard",
    project: "Web Dashboard",
    creationDate: "2024-06-15",
    assignedTo: "Raúl Torres",
    createdBy: "Sara Díaz",
    status: Status.InProgress,
    priority: Priority.Medium,
    severity: Severity.Major,
    description: "The dashboard page loads very slowly.",
    stepsToReproduce: [
      "Log in to the web application.",
      "Navigate to the dashboard page."
    ],
    actualResult: "The page takes a long time to load.",
    expectedResult: "The dashboard should load quickly.",
    comments: [
      {
        creator: "Sara Díaz",
        content: "Performance issues observed on all browsers."
      }
    ]
  },
  {
    id: "6",
    title: "Error 404 on help page",
    project: "Support Portal",
    creationDate: "2024-06-18",
    assignedTo: "Laura Jiménez",
    createdBy: "Miguel Ángel",
    status: Status.Resolved,
    priority: Priority.Low,
    severity: Severity.Minor,
    description: "The help page returns a 404 error.",
    stepsToReproduce: [
      "Navigate to the support portal.",
      "Click on the 'Help' link."
    ],
    actualResult: "A 404 error page is displayed.",
    expectedResult: "The help page should be displayed.",
    comments: [
      {
        creator: "Miguel Ángel",
        content: "The link seems to be broken."
      }
    ]
  },
  {
    id: "7",
    title: "Notifications not working",
    project: "Notification System",
    creationDate: "2024-06-20",
    assignedTo: "David Ortiz",
    createdBy: "Laura Martín",
    status: Status.Open,
    priority: Priority.High,
    severity: Severity.Major,
    description: "Notifications are not being sent to users.",
    stepsToReproduce: [
      "Trigger a notification event.",
      "Check if the notification is received."
    ],
    actualResult: "No notification is received.",
    expectedResult: "Users should receive notifications.",
    comments: [
      {
        creator: "Laura Martín",
        content: "No notifications for the past week."
      }
    ]
  },
  {
    id: "8",
    title: "Incorrect calculation of totals",
    project: "Finance Module",
    creationDate: "2024-06-22",
    assignedTo: "Sandra Rodríguez",
    createdBy: "José Antonio",
    status: Status.Open,
    priority: Priority.Medium,
    severity: Severity.Major,
    description: "The totals are calculated incorrectly in the finance reports.",
    stepsToReproduce: [
      "Generate a finance report.",
      "Check the totals."
    ],
    actualResult: "The totals are incorrect.",
    expectedResult: "The totals should be calculated correctly.",
    comments: [
      {
        creator: "José Antonio",
        content: "This issue affects the quarterly reports."
      }
    ]
  },
  {
    id: "9",
    title: "Broken link in email notifications",
    project: "Email Service",
    creationDate: "2024-06-25",
    assignedTo: "Marta Navarro",
    createdBy: "Javier Hernández",
    status: Status.Open,
    priority: Priority.Low,
    severity: Severity.Minor,
    description: "Links in the email notifications are broken.",
    stepsToReproduce: [
      "Receive an email notification.",
      "Click on the link in the email."
    ],
    actualResult: "The link does not work.",
    expectedResult: "The link should redirect to the correct page.",
    comments: [
      {
        creator: "Javier Hernández",
        content: "This issue started after the email template update."
      }
    ]
  },
  {
    id: "10",
    title: "Incorrect user role assignment",
    project: "User Management System",
    creationDate: "2024-06-27",
    assignedTo: "Luis Romero",
    createdBy: "Ana García",
    status: Status.InProgress,
    priority: Priority.High,
    severity: Severity.Critical,
    description: "Users are assigned incorrect roles upon creation.",
    stepsToReproduce: [
      "Create a new user.",
      "Check the assigned role."
    ],
    actualResult: "The user is assigned an incorrect role.",
    expectedResult: "The user should be assigned the correct role.",
    comments: [
      {
        creator: "Ana García",
        content: "This is causing security issues."
      }
    ]
  },
  {
    id: "11",
    title: "Page layout issues in mobile view",
    project: "Responsive Design",
    creationDate: "2024-06-28",
    assignedTo: "Pedro Sánchez",
    createdBy: "Elena Fernández",
    status: Status.Open,
    priority: Priority.Medium,
    severity: Severity.Major,
    description: "The page layout is broken in mobile view.",
    stepsToReproduce: [
      "Open the application on a mobile device.",
      "Navigate to any page."
    ],
    actualResult: "The layout is not responsive.",
    expectedResult: "The layout should adjust to mobile screens.",
    comments: [
      {
        creator: "Elena Fernández",
        content: "Users are experiencing usability issues."
      }
    ]
  },
  {
    id: "12",
    title: "Search function not returning results",
    project: "Search Module",
    creationDate: "2024-06-30",
    assignedTo: "Carlos Ruiz",
    createdBy: "Lucía Romero",
    status: Status.Open,
    priority: Priority.High,
    severity: Severity.Critical,
    description: "The search function does not return any results.",
    stepsToReproduce: [
      "Enter a search query.",
      "Click on the search button."
    ],
    actualResult: "No results are returned.",
    expectedResult: "Relevant results should be displayed.",
    comments: [
      {
        creator: "Lucía Romero",
        content: "Search functionality is critical for user navigation."
      }
    ]
  }
];

export const user = {
  userId: "123456",
  name: "John Doe",
  email: "johndoe@example.com",
  password: "encrypted_password",
  role: "developer",
  //profilePicture: "path/to/profile_picture.jpg",
  bio: "Experienced developer specializing in frontend technologies.",
  contactInformation: {
    phoneNumber: "+1234567890"
  },
  projects: [
    {
      projectId: "p001",
      roleInProject: "Leader"
    },
    {
      projectId: "p002",
      roleInProject: "Member"
    }
  ],
  reportsCreated: [
    "r001",
    "r002",
    "r003"
  ],
  reportsAssigned: [
    "r004",
    "r005"
  ],
  activityLog: [
    {
      activityId: "a001",
      timestamp: "2024-06-25T14:48:00.000Z",
      activityDescription: "Created bug report r001"
    },
    {
      activityId: "a002",
      timestamp: "2024-06-26T09:30:00.000Z",
      activityDescription: "Commented on bug report r002"
    }
  ],
  permissions: {
    canCreateProject: true,
    canAssignBugs: true,
    canDeleteBugs: false
  },
  preferences: {
    notifications: {
      email: true,
      sms: false
    },
    displaySettings: {
      theme: "dark"
    }
  }
};

export const projects: Project[] = [
  {
    id: "p001",
    title: "Project Phoenix",
    description: "A top-secret project aimed at revolutionizing the industry with cutting-edge technology.",
    leader: "Alice Johnson",
    team: ["Alice Johnson", "Bob Smith", "Charlie Brown"],
    startDate: "2024-01-15",
    status: "In Progress",
    totalIncidents: 54
  },
  {
    id: "p002",
    title: "Omega Initiative",
    description: "An initiative to optimize and enhance the performance of our existing systems.",
    leader: "David Green",
    team: ["David Green", "Eva White", "Frank Black"],
    startDate: "2024-03-10",
    status: "In Progress",
    totalIncidents: 20
  },
  {
    id: "p003",
    title: "Apollo Program",
    description: "Developing a new mobile application for a global audience with innovative features.",
    leader: "Grace Blue",
    team: ["Grace Blue", "Harry Red", "Ivy Violet"],
    startDate: "2024-05-20",
    status: "Planned",
    totalIncidents: 0
  },
  {
    id: "p004",
    title: "Vanguard Project",
    description: "A project focused on implementing advanced security measures across our platforms.",
    leader: "Jack Brown",
    team: ["Jack Brown", "Kate Purple", "Leo Orange"],
    startDate: "2024-07-01",
    status: "Not Started",
    totalIncidents: 0
  }
];