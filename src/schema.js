//External Imports
import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql';
import { find, filter } from 'lodash';

//Cart
import { CartType } from './cart/cart.js';

//Framework
import { fetchFromUrl, postToUrl, login } from './framework/ofbizCon.js';

//Geo
import { GeoType } from './geo/geo.js';

//order
import {OrderHeaderType} from './domain/order/OrderHeaderType.js';

//Product
import {ProductCategoryType} from './domain/product/ProductCategoryType.js';
import {ProductType} from './domain/product/ProductType.js';




import { ProductPromoType } from './domain/product/ProductPromoType.js';

//Mutations
import {mutationFields} from './framework/mutationBuilder.js';

//Etc.
import { LoggedInPersonType } from './loggedInPerson.js';
import { VerifyType, ResendVerificationType } from './verification.js';

const RootQueryType = new GraphQLObjectType({
  name: 'rootQueries',
  description: '...',

  fields: () => ({
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
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`geo/country/${args.geoId}`)
    },
    cart: {
      type: CartType,
      resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`cart/show`)
    },
    orders: {
      type: new GraphQLList(OrderHeaderType),
      args: {

      },
      resolve: (root, args, {loaders}) => loaders.ofbizArray.load(`orderHeaders/find`)
    },
    order: {
      type: OrderHeaderType,
      args: {
        orderId: {
          type: GraphQLString
        }
      },
      resolve: (root, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/${args.orderId}`)
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
  name: 'Mutations',
  description: 'root for mutations',

  fields: () => (
    mutationFields
  )
});

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: MutationType,
});
