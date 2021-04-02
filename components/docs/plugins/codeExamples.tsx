import { CodeBlockProps } from "./codeBlock";

export const packageJsonAfterInstallation = (pkgName): CodeBlockProps => {
  const code = `
{
  // ...
  "dependencies": {
    "${pkgName}": "...",
    // ...
  },
  "grouparoo": {
    "plugins": [
      "${pkgName}",
      // ...
    ]
  }
}
  `.trim();

  return { code, language: "json" };
};
