
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
import {Product} from '../product/Product.js';


const ProductCategoryMember = new GraphQLObjectType({
  name: 'ProductCategoryMemberType',
  description: 'Type for ProductCategoryMember in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryMember, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?=${args.productCategoryId}`)
    },
    comments: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productCategoryMember, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductCategoryMember};
    