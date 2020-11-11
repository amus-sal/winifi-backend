export default {
  db: {
    MYSQLUSER: "winficoc_api_aht",
    MYSQLPASS: "Gtc6dxRK7jT7Gjb",
    MYSQLHOST: "winfico.com",
    MYSQLNAME: "winficoc_winfi",
    MYSQLPORT: "3306",
  },
  log: {
    appenders: {
      File: {
        type: "dateFile",
        filename: "/folders/log/sessionworker",
        pattern: "yyyyMMdd.log",
        alwaysIncludePattern: true,
        keepFileExt: true,
        backups: 5,
        layout: {
          type: "pattern",
          pattern: "[%d] %z [%p] - %m",
        },
      },
      err: {
        type: "stderr",
      },
      out: {
        type: "stdout",
      },
    },
    categories: {
      default: {
        appenders: ["out"],
        level: "info",
      },
      sessionManager: {
        appenders: ["dateFile", "out"],
        level: "info",
      },
    },
  },
};
