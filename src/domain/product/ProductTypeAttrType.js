
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductTypeType} from '../product/ProductTypeType.js';


const ProductTypeAttrType = new GraphQLObjectType({
  name: 'ProductTypeAttrType',
  description: 'Type for ProductTypeAttr in product',

  fields: () => ({
    description: {type: GraphQLString},
    productType: {
      type: ProductTypeType,
      args : {productTypeId: {type: GraphQLString}},
      resolve: (productTypeAttr, args, {loaders}) => loaders.ofbiz.load(`productTypes/find?productTypeId=${productTypeAttr.productTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {ProductTypeAttrType};
    