const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint, printf, colorize } = format;
require("winston-mongodb")

const myFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] (${level}): ${message}`;
});

const logger = createLogger({
    level: 'debug',
    format: combine(
        timestamp(),
        colorize(), 
        myFormat
        ///// json bo'lishi uchun
        // prettyPrint()
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: "./log/all-log.log"}),
        new transports.MongoDB({db: "mongodb+srv://asaddevo211_db_user:B2SPbv63vrOtCiu2@cluster0.mzopaf4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"})
    ]
})
   
module.exports = logger