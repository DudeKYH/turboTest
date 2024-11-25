export default {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // Node.js 환경용 (필요하면 브라우저 타겟 설정 가능)
        },
      },
    ],
  ],
  include: ["apps", "packages"],
};
