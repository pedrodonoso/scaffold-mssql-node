import { getConnection, sql, queries } from '../database';

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProduct);
    return res.status(200).json({
      status: 200,
      data: { products: result.recordset },
      message: 'Todos los productos listados.',
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
    const result = await pool
      .request()
      .input('name', sql.VarChar, name)
      .input('description', sql.Text, description)
      .input('quantity', sql.Int, quantity)
      .query(queries.createNewProduct);
    if (!result) {
      return res.status(400).json({
        status: 400,
        data: {},
        message: 'Producto no creado.',
      });
    }

    return res.status(200).json({
      status: 200,
      data: {
        product: {
          name: name,
          description: description,
          quantity: quantity,
        },
      },
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

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('Id', id)
      .query(queries.getProductById);

    console.log(result.recordset);
    return res.status(200).json({
      status: 200,
      data: {
        product: result.recordset,
      },
      message: 'Producto creado.',
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

export const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('Id', id)
      .query(queries.deletProduct);
    console.log(result.rowsAffected);
    if (!result.rowsAffected[0]) {
      return res.status(400).json({
        status: 400,
        data: {},
        message: 'Producto no eliminado.',
      });
    }
    return res.status(200).json({
      status: 200,
      data: {
        deletedProducts: result.rowsAffected[0],
      },
      message: 'Producto eliminado.',
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



export const updateProductById = async (req, res) => {
  try {
    const { name, description, quantity } = req.body;
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
      .request()
      .input('name', sql.VarChar, name)
      .input('description', sql.Text, description)
      .input('quantity', sql.Int, quantity)
      .input('id', id)
      .query(queries.updateProduct);

    console.log(result)
    if (!result) {
      return res.status(400).json({
        status: 400,
        data: {},
        message: 'Producto no actualizado.',
      });
    }

    return res.status(200).json({
      status: 200,
      data: {
        product: {
          name: name,
          description: description,
          quantity: quantity,
        },
      },
      message: 'Producto actualizado.',
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
