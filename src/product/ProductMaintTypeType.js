
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductMaintType} from '../product/ProductMaintType.js';


const ProductMaintType = new GraphQLObjectType({
  name: 'ProductMaintTypeType',
  description: 'Type for ProductMaintType in product',

  fields: () => ({
    parentType: {
      type: ProductMaintTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productMaintType, args, {loaders}) => loaders.ofbizArray.load(`productMaintTypes/find?productMaintTypeId=${args.parentTypeId}`)
    },
    description: {type: GraphQLString},
    productMaintTypeId: {type: GraphQLString}
  })
});

export {ProductMaintType};
    