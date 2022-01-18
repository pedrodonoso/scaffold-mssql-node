"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductById = exports.getProducts = exports.getProductById = exports.deleteProductById = exports.createNewProduct = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.queries.getAllProduct);

          case 6:
            result = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              status: 200,
              data: {
                products: result.recordset
              },
              message: 'Todos los productos listados.'
            }));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              status: 500,
              data: {},
              message: _context.t0.message
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProducts = getProducts;

var createNewProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, description, quantity, pool, result;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, name = _req$body.name, description = _req$body.description;
            quantity = req.body.quantity;
            if (quantity == null) quantity = 0;
            _context2.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context2.sent;
            _context2.next = 9;
            return pool.request().input('name', _database.sql.VarChar, name).input('description', _database.sql.Text, description).input('quantity', _database.sql.Int, quantity).query(_database.queries.createNewProduct);

          case 9:
            result = _context2.sent;

            if (result) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              status: 400,
              data: {},
              message: 'Producto no creado.'
            }));

          case 12:
            return _context2.abrupt("return", res.status(200).json({
              status: 200,
              data: {
                product: {
                  name: name,
                  description: description,
                  quantity: quantity
                }
              },
              message: 'Producto creado.'
            }));

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0); // rollback

            return _context2.abrupt("return", res.status(500).json({
              status: 500,
              data: {},
              message: _context2.t0.message
            }));

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 15]]);
  }));

  return function createNewProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createNewProduct = createNewProduct;

var getProductById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return (0, _database.getConnection)();

          case 4:
            pool = _context3.sent;
            _context3.next = 7;
            return pool.request().input('Id', id).query(_database.queries.getProductById);

          case 7:
            result = _context3.sent;
            console.log(result.recordset);
            return _context3.abrupt("return", res.status(200).json({
              status: 200,
              data: {
                product: result.recordset
              },
              message: 'Producto creado.'
            }));

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            return _context3.abrupt("return", res.status(500).json({
              status: 500,
              data: {},
              message: _context3.t0.message
            }));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function getProductById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProductById = getProductById;

var deleteProductById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return (0, _database.getConnection)();

          case 4:
            pool = _context4.sent;
            _context4.next = 7;
            return pool.request().input('Id', id).query(_database.queries.deletProduct);

          case 7:
            result = _context4.sent;
            console.log(result.rowsAffected);

            if (result.rowsAffected[0]) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              status: 400,
              data: {},
              message: 'Producto no eliminado.'
            }));

          case 11:
            return _context4.abrupt("return", res.status(200).json({
              status: 200,
              data: {
                deletedProducts: result.rowsAffected[0]
              },
              message: 'Producto eliminado.'
            }));

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);
            return _context4.abrupt("return", res.status(500).json({
              status: 500,
              data: {},
              message: _context4.t0.message
            }));

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 14]]);
  }));

  return function deleteProductById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteProductById = deleteProductById;

var updateProductById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, name, description, quantity, id, pool, result;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, quantity = _req$body2.quantity;
            id = req.params.id;
            _context5.next = 5;
            return (0, _database.getConnection)();

          case 5:
            pool = _context5.sent;
            _context5.next = 8;
            return pool.request().input('name', _database.sql.VarChar, name).input('description', _database.sql.Text, description).input('quantity', _database.sql.Int, quantity).input('id', id).query(_database.queries.updateProduct);

          case 8:
            result = _context5.sent;
            console.log(result);

            if (result) {
              _context5.next = 12;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              status: 400,
              data: {},
              message: 'Producto no actualizado.'
            }));

          case 12:
            return _context5.abrupt("return", res.status(200).json({
              status: 200,
              data: {
                product: {
                  name: name,
                  description: description,
                  quantity: quantity
                }
              },
              message: 'Producto actualizado.'
            }));

          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0); // rollback

            return _context5.abrupt("return", res.status(500).json({
              status: 500,
              data: {},
              message: _context5.t0.message
            }));

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 15]]);
  }));

  return function updateProductById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateProductById = updateProductById;