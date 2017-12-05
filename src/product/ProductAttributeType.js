
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Product} from '../product/Product.js';


const ProductAttribute = new GraphQLObjectType({
  name: 'ProductAttributeType',
  description: 'Type for ProductAttribute in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productAttribute, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString},
    attrType: {type: GraphQLInt}
  })
});

export {ProductAttribute};
    