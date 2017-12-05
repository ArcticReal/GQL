
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategory} from '../product/ProductCategory.js';


const ProductCategoryAttribute = new GraphQLObjectType({
  name: 'ProductCategoryAttributeType',
  description: 'Type for ProductCategoryAttribute in product',

  fields: () => ({
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryAttribute, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?=${args.productCategoryId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {ProductCategoryAttribute};
    