import express from "express";
import path from "path";
import fs from "fs";
import {dbTblName} from "core/config";
import strings from "core/strings";
import tracer from "core/tracer";
import consts from "core/consts";
import helpers from "core/helpers";
import db from "core/db";
import {sprintf} from "sprintf-js";

const getJobRolesProc = async (req, res, next) => {
  const lang = req.get(consts.lang) || consts.defaultLanguage;
  const langs = strings[lang];
  let {userId, page, pageSize} = req.body;

  page || (page = 1);
  pageSize || (pageSize = consts.defaultPageSize);
  const start = pageSize * (page - 1);

  let sql = sprintf("SELECT D.*, P.income_pending FROM %s D LEFT JOIN pendings_driver P ON P.id = D.id WHERE D.fleet_id = $1 AND D.deleted_at IS NULL ORDER BY created_at OFFSET $2 LIMIT $3;", dbTblName.drivers);
  try {
    let result = await db.query(sql, [userId, start, pageSize]);
    const {rows} = result;
    let number = start;
    for (let row of rows) {
      row["number"] = ++number;
    }
    sql = sprintf("SELECT COUNT(*) count FROM %s WHERE fleet_id = $1 AND deleted_at IS NULL;", dbTblName.drivers);
    let count = await db.query(sql, [userId]);
    count = count.rows;
    let pageCount = 0;
    count.length > 0 && (pageCount = Math.ceil(count[0]['count'] / pageSize));

    res.status(200).send({
      result: langs.success,
      count: count[0]['count'],
      pageCount,
      data: rows,
    });
  } catch (err) {
    tracer.error(err);
    tracer.error(__filename);
    res.status(200).send({
      result: langs.error,
      message: langs.unknownServerError,
      err,
    });
  }
};

const router = express.Router();

router.post("/list", getJobRolesProc);

export default router;
