'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _lodash = require('lodash');

var _ofbizCon = require('./framework/ofbizCon.js');

var _product = require('./product/product.js');

var _someFile = require('./someFile.js');

var _entityDef = require('./entityDef.js');

var RootQueryType = new _graphql.GraphQLObjectType({
  name: 'rootQueries',
  description: '...',

  fields: function fields() {
    return {

      author: {
        type: _someFile.AuthorType,
        args: {
          id: { type: _graphql.GraphQLString }
        },
        resolve: function resolve(root, args) {
          return (0, _lodash.find)(_entityDef.authors, { id: args.id });
        }
      },
      posts: {
        type: new _graphql.GraphQLList(_someFile.PostType),
        resolve: function resolve() {
          return _entityDef.posts;
        }
      },
      products: {
        type: new _graphql.GraphQLList(_product.ProductType),
        args: {},
        resolve: function resolve(root, args, _ref) {
          var loaders = _ref.loaders;
          return loaders.ofbiz.load('products/productList');
        }
      },
      product: {
        type: _product.ProductType,
        args: {
          productId: { type: _graphql.GraphQLString }
        },
        resolve: function resolve(root, args, _ref2) {
          var loaders = _ref2.loaders;
          return loaders.ofbiz.load('products/' + args.productId);
        }
      },
      productCategories: {
        type: new _graphql.GraphQLList(_product.ProductCategoryType),
        resolve: function resolve(root, args, _ref3) {
          var loaders = _ref3.loaders;
          return loaders.ofbiz.load('productCategorys/find');
        }
      },
      productCategory: {
        type: _product.ProductCategoryType,
        args: {
          productCategoryId: { type: _graphql.GraphQLString }
        },
        resolve: function resolve(root, args, _ref4) {
          var loaders = _ref4.loaders;
          return loaders.ofbiz.load('productCategorys/' + args.productCategoryId);
        }
      }
    };
  }
});

var LoginResponse = new _graphql.GraphQLObjectType({
  name: 'LoginResponse',
  description: ' indictes what happened to your login',

  fields: function fields() {
    return {
      message: { type: _graphql.GraphQLString },
      status: { type: _graphql.GraphQLString }

    };
  }
});

var MutationType = new _graphql.GraphQLObjectType({
  name: 'Mutation',
  description: '',

  fields: function fields() {
    return {
      addPost: _someFile.createPost,
      deletePost: _someFile.deletePost,
      createProduct: _product.createProduct,
      login: {
        type: LoginResponse,
        description: 'Login to the ofbiz service',
        args: {
          username: { type: _graphql.GraphQLString },
          password: { type: _graphql.GraphQLString }

        },
        resolve: function resolve(root, args, _ref5) {
          var res = _ref5.res;

          return (0, _ofbizCon.login)('login', args.username, args.password).then(function (loginRes) {
            res.set('Set-Cookie', loginRes.setCookie);
            return loginRes;
          });
        }
      }
    };
  }
});

exports.default = new _graphql.GraphQLSchema({
  query: RootQueryType,
  mutation: MutationType

});