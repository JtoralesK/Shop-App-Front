import { User } from "../../utilities/users/index";
interface Input {
  id: number;
  name: keyof User;
  type: string;
  placeholder: string;
  label: string;
  required: boolean;
  pattern: string;
  errorMessage: string;
}
export const inputs: Input[] = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Joe",
    errorMessage: "It should be at least 3 characters!",
    label: "First name",
    required: true,
    pattern: "\\b[a-zA-ZñÑ]{3,}\\b",
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    placeholder: "Doe",
    errorMessage: "It should be at least 3 characters!",
    label: "Last name",
    required: true,
    pattern: "\\b[a-zA-ZñÑ]{3,}\\b",
  },
  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "joe@example.com",
    errorMessage: "Please enter a valid email address!",
    label: "Email",
    required: true,
    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
  },
  {
    id: 4,
    name: "phoneNumber",
    type: "tel",
    placeholder: "+1234567890",
    errorMessage: "Please enter a valid cellphone number!",
    label: "Cellphone",
    required: true,
    pattern: "\\+?[0-9]{7,15}",
  },
];

export const addressInputs: Input[] = [
  {
    id: 1,
    name: "postalCode",
    type: "text",
    placeholder: "12345",
    errorMessage: "Please enter a valid postal code!",
    label: "Postal Code",
    required: true,
    pattern: "^\\d{4,}$",
  },
  {
    id: 2,
    name: "city",
    type: "text",
    placeholder: "New York",
    errorMessage: "Please enter a valid city name!",
    label: "City",
    required: true,
    pattern: "\\b[a-zA-ZñÑ]{3,}\\b",
  },
  {
    id: 3,
    name: "country",
    type: "text",
    placeholder: "Country",
    errorMessage: "Please enter a valid country name!",
    label: "Country",
    required: true,
    pattern: ".{3,}",
  },
];
export const passwordInputs = [
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "New Password",
    errorMessage: "Password must be at least 8 characters long!",
    label: "New Password",
    required: true,
    pattern: "^(?=.*[A-Z])(?=.*\\d).{8,}$",
  },
  {
    id: 5,
    name: "confirmedPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Passwords do not match!",
    label: "Confirmed Password",
    required: true,
    pattern: "^(?=.*[A-Z])(?=.*\\d).{8,}$",
  },
];
