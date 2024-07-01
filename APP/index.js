import express from "express";
import router from "./router/router.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log(`Server funcionando en puerto: `, 3000);
});