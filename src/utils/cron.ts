import { CronJob } from "cron";
import http from "http";
import config from "../config/config";
const job = new CronJob("*/14 * * * *", function () {
  http
    .get(config.apiUrl, (res) => {
      if (res.statusCode === 200) {
        console.log("Cron request sent");
      } else {
        console.log("Cron request failed");
      }
    })
    .on("error", (e) => {
      console.error(`Error while sending cron request:\n\t${e}`);
    });
});

export default job;
