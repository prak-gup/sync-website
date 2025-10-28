import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  // Relax lint rules for vendored/demo Reactbits components to allow iteration.
  {
    files: ["src/components/[A-Z]*.tsx"],
    rules: {
      // TypeScript strictness
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/ban-ts-comment": ["warn", { "ts-expect-error": "allow-with-description" }],
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
      "@typescript-eslint/no-unused-expressions": "warn",

      // Stylistic
      "prefer-const": "off",

      // React hooks: keep core rule, relax exhaustive-deps noise
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Next.js/a11y: relax for showcase assets
      "@next/next/no-img-element": "off",
      "jsx-a11y/alt-text": "warn",
    },
  },
];

export default eslintConfig;
