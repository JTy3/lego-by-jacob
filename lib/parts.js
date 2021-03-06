import { sql_query } from "../lib/db";

export async function getAllPartIds() {
  try {
    const result = await sql_query(`
        SELECT part_num FROM parts
    `);
    let response = JSON.parse(JSON.stringify(result));
    return response.map((sets) => {
      return {
        params: {
          id: sets.set_num,
        },
      };
    });
  } catch (e) {
    console.log(e);
    throw Error;
  }
}

export async function getSetPartsList(setId) {
  try {
    const result = await sql_query(`
      SELECT ip.*, p.name as part_name, c.name as color_name, c.rgb as color_code FROM inventory_parts as ip
      JOIN colors as c ON ip.color_id = c.id
      JOIN parts as p on ip.part_num = p.part_num
      WHERE inventory_id IN (SELECT id FROM inventories WHERE set_num = '${setId}')
    `);
    let response = JSON.parse(JSON.stringify(result));
    return response;
  } catch (e) {
    console.log(e);
    throw Error;
  }
}
