
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

import {ProductCategoryType} from '../product/ProductCategory.js';


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
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {ProductCategoryAttributeType};
    




const ProductCategoryAttributeInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryAttributeInputType',
  description: 'input type for ProductCategoryAttribute in product',

  fields: () => ({
    productCategoryId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {ProductCategoryAttributeInputType};
    