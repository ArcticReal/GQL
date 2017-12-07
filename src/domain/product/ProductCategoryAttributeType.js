
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


const ProductCategoryAttributeType = new GraphQLObjectType({
  name: 'ProductCategoryAttributeType',
  description: 'Type for ProductCategoryAttribute in product',

  fields: () => ({
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryAttribute, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${productCategoryAttribute.productCategoryId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {ProductCategoryAttributeType};
    