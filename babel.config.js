module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@mocks": "./src/mocks",
            "@utils": "./src/utils",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@contexts": "./src/contexts",
            "@components": "./src/components",
            "@__tests__": "./__tests__",
          },
        },
      ],
    ],
  };
};
