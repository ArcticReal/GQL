
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductAssocType} from '../product/ProductAssocType.js';


const ProductAssocType = new GraphQLObjectType({
  name: 'ProductAssocTypeType',
  description: 'Type for ProductAssocType in product',

  fields: () => ({
    parentType: {
      type: ProductAssocTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productAssocType, args, {loaders}) => loaders.ofbizArray.load(`productAssocTypes/find?productAssocTypeId=${args.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productAssocTypeId: {type: GraphQLString}
  })
});

export {ProductAssocType};
    