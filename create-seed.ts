import childProcess from "node:child_process";
import minimist from "minimist";

const createSeed = () => {
  const args = process.argv.slice(2);
  const { table } = minimist(args);

  console.log(`Creating seed for ${table}`);

  const child = childProcess.spawn(
    "pnpm",
    [
      "nhost",
      "dev",
      "hasura",
      "seed",
      "create",
      table, // Migration name
      "--endpoint",
      "https://local.hasura.nhost.run",
      "--admin-secret",
      "nhost-admin-secret",
      "--database-name",
      "default",
      "--from-table",
      table,
    ],
    {
      stdio: "inherit",
    }
  );
};

if (require.main === module) {
  createSeed();
}
