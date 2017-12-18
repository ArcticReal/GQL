
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPriceActionType} from '../product/ProductPriceAction.js';


const ProductPriceActionTypeType = new GraphQLObjectType({
  name: 'ProductPriceActionTypeType',
  description: 'Type for ProductPriceActionType in product',

  fields: () => ({
    description: {type: GraphQLString},
    productPriceActionTypeId: {type: GraphQLString},
    productPriceActions: {
      type: new GraphQLList(ProductPriceActionType),
      args : {},
      resolve: (productPriceActionType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPriceActions/find?productPriceActionTypeId=${productPriceActionType.productPriceActionTypeId}`)
    }
  })
});

export {ProductPriceActionTypeType};
    




const ProductPriceActionTypeInputType = new GraphQLInputObjectType({
  name: 'ProductPriceActionTypeInputType',
  description: 'input type for ProductPriceActionType',

  fields: () => ({
    description: {type: GraphQLString},
    productPriceActionTypeId: {type: GraphQLString}
  })
});

export {ProductPriceActionTypeInputType};
    