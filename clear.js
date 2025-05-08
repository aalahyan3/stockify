import DbClinet from "./database/db.js";

try {
  await DbClinet.query('BEGIN');
  await DbClinet.query("DELETE FROM users");
  await DbClinet.query('COMMIT');
} catch (err) {
  await DbClinet.query('ROLLBACK');
  throw err;
}