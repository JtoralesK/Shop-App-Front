import { showToastError } from "@/app/utilities/toastMessages";
import { SaveUserAction } from "@/app/lib/actions/user";

export const action = async (FormData: FormData) => {
  const { image, genderType, roleType, password, confirmedPassword } =
    Object.fromEntries(FormData);
  if (parseInt(genderType.toString()) == 0) {
    showToastError("Gender is required");
    return;
  }
  if (parseInt(roleType.toString()) == 0) {
    showToastError("Role is required");
    return;
  }
  console.log(password, confirmedPassword);
  if (password !== confirmedPassword) {
    showToastError("Passwords do not match");
    return;
  }
  if (!image) {
    showToastError("Image is required");
    return;
  }
  SaveUserAction(FormData);
};
