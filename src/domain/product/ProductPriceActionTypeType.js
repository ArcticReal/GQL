
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPriceActionType} from '../product/ProductPriceActionType.js';


const ProductPriceActionTypeType = new GraphQLObjectType({
  name: 'ProductPriceActionTypeType',
  description: 'Type for ProductPriceActionType in product',

  fields: () => ({
    description: {type: GraphQLString},
    productPriceActionTypeId: {type: GraphQLString},
    productPriceAction: {
      type: new GraphQLList(ProductPriceActionType),
      args : {productPriceActionTypeId: {type: GraphQLString}},
      resolve: (productPriceActionType, args, {loaders}) => loaders.ofbizArray.load(`productPriceActions/find?productPriceActionTypeId=${productPriceActionType.productPriceActionTypeId}`)
    }
  })
});

export {ProductPriceActionTypeType};
    