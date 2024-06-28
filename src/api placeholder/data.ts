import { type Incident } from "@/types";
export const incidentReports: Incident[] = [
  {
    id: "1",
    title: "Error when saving changes in user profile",
    project: "User Management System",
    creationDate: "2024-06-01",
    assignedTo: "Juan Pérez",
    createdBy: "Ana García",
    tag: "Bug",
    priority: "High",
    severity: "Critical",
    description:
      "When trying to save changes in the user profile, an error message is displayed and changes are not saved.",
    stepsToReproduce: [
      "Log in to the application.",
      "Go to the profile page.",
      "Modify any profile field.",
      "Click on 'Save changes'.",
    ],
    actualResult:
      "An error message stating 'Changes could not be saved' appears.",
    expectedResult:
      "Profile changes should be saved successfully, and a confirmation message should appear.",
    comments: [
      {
        creator: "Ana García",
        content: "This error started appearing after the latest system update.",
      },
    ],
  },
  {
    id: "2",
    title: "Homepage loading delay",
    project: "E-commerce Platform",
    creationDate: "2024-06-05",
    assignedTo: "Luis Hernández",
    createdBy: "María López",
    tag: "Performance",
    priority: "Medium",
    severity: "Moderate",
    description:
      "The homepage of the e-commerce platform takes more than 10 seconds to load.",
    stepsToReproduce: [
      "Open the e-commerce platform in a web browser.",
      "Observe the loading time of the homepage.",
    ],
    actualResult: "The homepage takes more than 10 seconds to load.",
    expectedResult: "The homepage should load in less than 3 seconds.",
    comments: [
      {
        creator: "María López",
        content:
          "This issue has been reported by several users in recent weeks.",
      },
    ],
  },
  {
    id: "3",
    title: "Unable to add products to shopping cart",
    project: "E-commerce Platform",
    creationDate: "2024-06-10",
    assignedTo: "Carla Martínez",
    createdBy: "José Rodríguez",
    tag: "Bug",
    priority: "High",
    severity: "Critical",
    description:
      "When trying to add a product to the shopping cart, the 'Add to cart' button does not work.",
    stepsToReproduce: [
      "Navigate to any product in the e-commerce platform.",
      "Click on 'Add to cart'.",
    ],
    actualResult: "Nothing happens when clicking on the 'Add to cart' button.",
    expectedResult:
      "The product should be added to the shopping cart, and a confirmation notification should appear.",
    comments: [
      {
        creator: "José Rodríguez",
        content:
          "This issue is impacting sales and needs to be resolved as soon as possible.",
      },
    ],
  },
  {
    id: "4",
    title: "Error 500 on checkout page",
    project: "E-commerce Platform",
    creationDate: "2024-06-15",
    assignedTo: "Pedro Gómez",
    createdBy: "Laura Fernández",
    tag: "Bug",
    priority: "High",
    severity: "Critical",
    description:
      "When trying to finalize a purchase, the checkout page displays an error 500.",
    stepsToReproduce: [
      "Add products to the shopping cart.",
      "Go to the checkout page.",
      "Attempt to finalize the purchase.",
    ],
    actualResult:
      "An error 500 is displayed, and the purchase cannot be completed.",
    expectedResult:
      "The purchase should be completed successfully without displaying errors.",
    comments: [
      {
        creator: "Laura Fernández",
        content:
          "This issue is critical as it prevents users from completing their purchases.",
      },
    ],
  },
];
