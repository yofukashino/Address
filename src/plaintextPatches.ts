import Types from "@types";

export default [
  {
    find: '("discodo")',
    warn: false,
    replacements: [
      {
        match: /\.tutorialContainer(?!onContextMenu:)/,
        replace: (prefix: string) =>
          `${prefix},onContextMenu:(e)=>replugged.webpack.wpRequire("HomeContext")?.open(e)`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
