
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {UserLogin} from '../product/UserLogin.js';


const ProductPriceChange = new GraphQLObjectType({
  name: 'ProductPriceChangeType',
  description: 'Type for ProductPriceChange in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    changedDate: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    productId: {type: GraphQLString},
    price: {type: GraphQLFloat},
    oldPrice: {type: GraphQLFloat},
    changedByUserLogin: {
      type: UserLoginType,
      args : {changedByUserLogin: {type: GraphQLString}},
      resolve: (productPriceChange, args, {loaders}) => loaders.ofbizArray.load(`userLogins/find?userLoginId=${args.changedByUserLogin}`)
    },
    productPriceChangeId: {type: GraphQLString},
    productPricePurposeId: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    productPriceTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductPriceChange};
    