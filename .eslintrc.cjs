module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["tailwindcss"],
  settings: {
    next: {
      rootDir: ["."]
    },
    tailwindcss: {}
  },
  rules: {
    "tailwindcss/classnames-order": "off",
    "tailwindcss/no-custom-classname": "off"
  }
};
