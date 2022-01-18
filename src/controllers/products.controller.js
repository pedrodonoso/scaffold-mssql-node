import { getConnection, sql } from '../database/connection';

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM Products');
    return res.status(200).json({
      status: 200,
      data: { products: result.recordset },
      message: '',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      data: {},
      message: error.message,
    });
  }
};

export const createNewProduct = async (req, res) => {
  try {
    const { name, description } = req.body;
    let { quantity } = req.body;

    if (quantity == null) quantity = 0;

    const pool = await getConnection();
    const result = pool.request().input('name', sql.VarChar, 'PRODUCT TEST');

    console.log(name, description, quantity);
    return res.status(200).json({
      status: 200,
      data: { product : result},
      message: 'Producto creado.',
    });
  } catch (error) {
    console.error(error);
    // rollback
    return res.status(500).json({
      status: 500,
      data: {},
      message: error.message,
    });
  }
};
