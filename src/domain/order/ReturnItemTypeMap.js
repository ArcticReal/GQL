
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

import {ReturnHeaderTypeType} from '../order/ReturnHeaderType.js';


const ReturnItemTypeMapType = new GraphQLObjectType({
  name: 'ReturnItemTypeMapType',
  description: 'Type for ReturnItemTypeMap in order',

  fields: () => ({
    returnItemTypeId: {type: GraphQLString},
    returnItemMapKey: {type: GraphQLString},
    returnHeaderType: {
      type: ReturnHeaderTypeType,
      args : {returnHeaderTypeId: {type: GraphQLString}},
      resolve: (returnItemTypeMap, args, {loaders}) => loaders.ofbiz.load(`order/returnHeader/returnHeaderTypes/find?returnHeaderTypeId=${returnItemTypeMap.returnHeaderTypeId}`)
    }
  })
});

export {ReturnItemTypeMapType};
    




const ReturnItemTypeMapInputType = new GraphQLInputObjectType({
  name: 'ReturnItemTypeMapInputType',
  description: 'input type for ReturnItemTypeMap in order',

  fields: () => ({
    returnItemTypeId: {type: GraphQLString},
    returnItemMapKey: {type: GraphQLString},
    returnHeaderTypeId: {type: GraphQLString}
  })
});

export {ReturnItemTypeMapInputType};
    