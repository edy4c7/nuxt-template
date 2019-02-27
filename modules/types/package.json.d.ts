declare module '*/package.json' {
  import _packageJson from "package-json"
  const packageJson: _packageJson.PackageJson;
  export default packageJson;
}
