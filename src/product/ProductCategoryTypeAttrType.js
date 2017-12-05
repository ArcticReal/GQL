
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategoryType} from '../product/ProductCategoryType.js';


const ProductCategoryTypeAttr = new GraphQLObjectType({
  name: 'ProductCategoryTypeAttrType',
  description: 'Type for ProductCategoryTypeAttr in product',

  fields: () => ({
    productCategoryType: {
      type: ProductCategoryTypeType,
      args : {productCategoryTypeId: {type: GraphQLString}},
      resolve: (productCategoryTypeAttr, args, {loaders}) => loaders.ofbizArray.load(`productCategoryTypes/find?=${args.productCategoryTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {ProductCategoryTypeAttr};
    