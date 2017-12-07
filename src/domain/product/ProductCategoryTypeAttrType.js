
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategoryTypeType} from '../product/ProductCategoryTypeType.js';


const ProductCategoryTypeAttrType = new GraphQLObjectType({
  name: 'ProductCategoryTypeAttrType',
  description: 'Type for ProductCategoryTypeAttr in product',

  fields: () => ({
    productCategoryType: {
      type: ProductCategoryTypeType,
      args : {productCategoryTypeId: {type: GraphQLString}},
      resolve: (productCategoryTypeAttr, args, {loaders}) => loaders.ofbiz.load(`productCategoryTypes/find?productCategoryTypeId=${productCategoryTypeAttr.productCategoryTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {ProductCategoryTypeAttrType};
    