import { EmailValidators } from "../../utils/validators";

describe("#email validator", () => {
  test("it allows a valid company email", () => {
    const testEmail = "demo@grouparoo.com";

    const res = EmailValidators.validate(testEmail);
    expect(res).toBeTruthy;
  });
  test("it does not allow an invalid email", () => {
    const testEmail = "demo@grouparoo";

    const res = EmailValidators.validate(testEmail);
    expect(res).toBeFalsy;
  });
  test("it does not allow a valid personal email", () => {
    const testEmail = "demo@gmail.com";

    const res = EmailValidators.validate(testEmail);
    expect(res).toBeFalsy;
  });
});
