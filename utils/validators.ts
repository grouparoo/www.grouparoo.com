import validator from "validator";

export namespace EmailValidators {
  export const illegalDomains = [
    "gmail.com",
    "yahoo.com",
    "aol.com",
    "hotmail.com",
    "outlook.com",
    "icloud.com",
    "msn.com",
  ];

  export function validate(email) {
    let isValid;

    !validator.isEmail
      ? (isValid = false)
      : illegalDomains.some((domain) => email.includes(domain))
      ? (isValid = false)
      : (isValid = true);
    return isValid;
  }
}
