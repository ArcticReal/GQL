
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

import {ProductType} from '../product/Product.js';


const ProductAttributeType = new GraphQLObjectType({
  name: 'ProductAttributeType',
  description: 'Type for ProductAttribute in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productAttribute, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productAttribute.productId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrType: {type: GraphQLString}
  })
});

export {ProductAttributeType};
    




const ProductAttributeInputType = new GraphQLInputObjectType({
  name: 'ProductAttributeInputType',
  description: 'input type for ProductAttribute in product',

  fields: () => ({
    productId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrType: {type: GraphQLString}
  })
});

export {ProductAttributeInputType};
    