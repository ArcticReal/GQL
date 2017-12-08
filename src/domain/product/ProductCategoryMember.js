
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
import {ProductType} from '../product/Product.js';


const ProductCategoryMemberType = new GraphQLObjectType({
  name: 'ProductCategoryMemberType',
  description: 'Type for ProductCategoryMember in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryMember, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${productCategoryMember.productCategoryId}`)
    },
    comments: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productCategoryMember, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productCategoryMember.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryMemberType};
    




const ProductCategoryMemberInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryMemberInputType',
  description: 'input type for ProductCategoryMember in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    comments: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryMemberInputType};
    