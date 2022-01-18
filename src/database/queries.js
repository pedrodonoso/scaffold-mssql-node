export const queries = {
  getAllProduct: 'SELECT * FROM Products',
  createNewProduct:
    'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
  getProductById: 'SELECT * FROM Products WHERE Id = @Id',
  deletProduct: 'DELETE FROM [customdatabase].[dbo].[Products] WHERE Id = @Id',
  updateProduct:
    'UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE ID = @Id',
};
