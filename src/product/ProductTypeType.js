
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


const ProductType = new GraphQLObjectType({
  name: 'ProductTypeType',
  description: 'Type for ProductType in product',

  fields: () => ({
    isPhysical: {type: GraphQLBoolean},
    parentType: {
      type: ProductTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productType, args, {loaders}) => loaders.ofbizArray.load(`productTypes/find?productTypeId=${args.parentTypeId}`)
    },
    isDigital: {type: GraphQLBoolean},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productTypeId: {type: GraphQLString}
  })
});

export {ProductType};
    