//External Imports
import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql';
import { find, filter } from 'lodash';

//Cart
import { CartType } from './cart/cart.js';

//Framework
import { fetchFromUrl, postToUrl, login } from './framework/ofbizCon.js';

//Geo
import { GeoType } from './geo/geo.js';

//Order
import { OrderType } from './order/order.js';

//Product
import { ProductCategoryType, ProductType, ProductListItemType, createProduct, createProductCategory, editProductCategory, deleteProductCategory } from './product/product.js';
import { ProductPromoType } from './product/productPromo.js';

//Mutations
import {mutationFields} from './framework/mutationBuilder.js';

//Etc.
import { deletePost, createPost, PostType, AuthorType } from './someFile.js';
import { posts, authors } from './entityDef.js';
import { LoggedInPersonType } from './loggedInPerson.js';
import { VerifyType, ResendVerificationType } from './verification.js';

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
      resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`products/productList`)
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
      resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find`)
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
    promos: {
      type: new GraphQLList(ProductPromoType),
      args: {

      },
      resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`productPromos/find`)
    },
    promo: {
      type: ProductPromoType,
      args: {
        productPromoId: {
          type: GraphQLString
        },
      },
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`productPromos/${args.productPromoId}`)
    },
    countries: {
      type: new GraphQLList(GeoType),
      args: {

      },
      resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`geo/country`)
    },
    country: {
      type: GeoType,
      args: {
        geoId: {
          type: GraphQLString
        },
      },
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`geo/country/${args.geoId}`) //TODO
    },
    cart: {
      type: CartType,
      args: {

      },
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`cart/show`)
    },
    orders: {
      type: new GraphQLList(OrderType),
      args: {

      },
      resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`order/listAll`)
    },
    order: {
      type: OrderType,
      args: {
        orderId: {
          type: GraphQLString
        }
      },
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`order/${args.orderId}/details`)
    },
    loggedInPerson: {
      type: LoggedInPersonType,
      args: {

      },
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`loggedInPerson`)
    },
    verify: {
      type: VerifyType,
      args: {
        hash: {
          type: GraphQLString
        }
      },
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`account/verify/${args.hash}`)
    },
    resendVerification: {
      type: ResendVerificationType,
      args: {
        hash: {
          type: GraphQLString
        }
      },
resolve: (root, args, {loaders}) => loaders.ofbiz.load(`resendVerificationMail/${args.hash}`)
    }
  })
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: '',

  fields: () => ({
    addPost: createPost,
    deletePost: deletePost,
    createProduct: createProduct,
    createProductCategory: createProductCategory,
    editProductCategory: editProductCategory,
    deleteProductCategory: deleteProductCategory,
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
