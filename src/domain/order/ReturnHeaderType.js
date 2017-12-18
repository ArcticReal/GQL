
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

import {ReturnHeaderType} from '../order/ReturnHeader.js';
import {ReturnItemTypeMapType} from '../order/ReturnItemTypeMap.js';


const ReturnHeaderTypeType = new GraphQLObjectType({
  name: 'ReturnHeaderTypeType',
  description: 'Type for ReturnHeaderType in order',

  fields: () => ({
    parentType: {
      type: ReturnHeaderTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (returnHeaderType, args, {loaders}) => loaders.ofbiz.load(`order/returnHeader/returnHeaderTypes/find?returnHeaderTypeId=${returnHeaderType.parentTypeId}`)
    },
    description: {type: GraphQLString},
    returnHeaderTypeId: {type: GraphQLString},
    returnHeaderTypes: {
      type: new GraphQLList(ReturnHeaderTypeType),
      args : {},
      resolve: (returnHeaderType, args, {loaders}) => loaders.ofbizArray.load(`order/returnHeader/returnHeaderTypes/find?returnHeaderTypeId=${returnHeaderType.returnHeaderTypeId}`)
    },
    returnHeaders: {
      type: new GraphQLList(ReturnHeaderType),
      args : {},
      resolve: (returnHeaderType, args, {loaders}) => loaders.ofbizArray.load(`order/returnHeaders/find?returnHeaderTypeId=${returnHeaderType.returnHeaderTypeId}`)
    },
    returnItemTypeMaps: {
      type: new GraphQLList(ReturnItemTypeMapType),
      args : {},
      resolve: (returnHeaderType, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemTypeMaps/find?returnHeaderTypeId=${returnHeaderType.returnHeaderTypeId}`)
    }
  })
});

export {ReturnHeaderTypeType};
    




const ReturnHeaderTypeInputType = new GraphQLInputObjectType({
  name: 'ReturnHeaderTypeInputType',
  description: 'input type for ReturnHeaderType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    returnHeaderTypeId: {type: GraphQLString}
  })
});

export {ReturnHeaderTypeInputType};
    