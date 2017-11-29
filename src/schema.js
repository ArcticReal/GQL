import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean,
} from 'graphql';
import { find, filter } from 'lodash';

import { fetchFromUrl, postToUrl, login } from './framework/ofbizCon.js';

import { ProductCategoryType, ProductType, ProductListItemType, createProduct,
} from './product/product.js';

import { GeoType,
} from './geo/geo.js';

import { deletePost, createPost, PostType, AuthorType,
} from './someFile.js';

import { posts, authors,
} from './entityDef.js';

const RootQueryType = new GraphQLObjectType({
  name: 'rootQueries',
  description: '...',

  fields: () => ({
    author: {
      type: AuthorType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: (root, args) => find(authors, {
        id: args.id
      })
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: () => posts
    },
    products: {
      type: new GraphQLList(ProductType),
      args: {

      },
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`products/productList`)
    },
    product: {
      type: ProductType,
      args: {
        productId: {
          type: GraphQLString
        },
      },
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`products/${args.productId}`)
    },
    productCategories: {
      type: new GraphQLList(ProductCategoryType),
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find`)
    },
    productCategory: {
      type: ProductCategoryType,
      args: {
        productCategoryId: {
          type: GraphQLString
        },
      },
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`productCategorys/${args.productCategoryId}`)
    },
    countries: {
      type: new GraphQLList(GeoType),
      args: {

      },
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`geo/country`)
    },
    country: {
      type: GeoType,
      args: {
        geoId: {
          type: GraphQLString
        },
      },
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`geo/${args.geoId}/`) //TODO
    },
  })
});

const LoginResponse = new GraphQLObjectType({
  name: 'LoginResponse',
  description: ' indictes what happened to your login',

  fields: () => ({
    message: {
      type: GraphQLString
    },
    status: {
      type: GraphQLString
    },

  })
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: '',

  fields: () => ({
    addPost: createPost,
    deletePost: deletePost,
    createProduct: createProduct,
    login: {
      type: LoginResponse,
      description: 'Login to the ofbiz service',
      args: {
        username: {
          type: GraphQLString
        },
        password: {
          type: GraphQLString
        },

      },
      resolve: (root, args, {res}) => {
        return login(`login`, args.username, args.password).then(loginRes => {
          res.set('Set-Cookie', loginRes.setCookie);
          return loginRes;
        });

      }
    },
  })
});

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: MutationType,
});
