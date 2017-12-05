
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductType} from '../product/ProductType.js';


const ProductTypeAttr = new GraphQLObjectType({
  name: 'ProductTypeAttrType',
  description: 'Type for ProductTypeAttr in product',

  fields: () => ({
    description: {type: GraphQLString},
    productType: {
      type: ProductTypeType,
      args : {productTypeId: {type: GraphQLString}},
      resolve: (productTypeAttr, args, {loaders}) => loaders.ofbizArray.load(`productTypes/find?=${args.productTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {ProductTypeAttr};
    