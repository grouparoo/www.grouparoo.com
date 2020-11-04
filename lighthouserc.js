module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:54321/"],
      startServerCommand: "PORT=54321 npm start",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
