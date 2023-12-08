// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,ts}",
            "./node_modules/flowbite/**/*.js"
  ], // Cambié "ts" a "js"
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
