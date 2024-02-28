import dotenv from "dotenv-safe";
import path from "path";
import expressApp from "@/express-app";

dotenv.config({
  path: path.join(
    __dirname,
    "..",
    `.env.${process.env.NODE_ENV === "production" ? "prod" : "local"}`
  ),
  example: path.join(__dirname, "..", ".env.example"),
});

console.log("ENV");
console.log(process.env);

const port = process.env.PORT || 3010;
expressApp.listen(port, () => {
  console.log(`Server started at ${port}`);
});
