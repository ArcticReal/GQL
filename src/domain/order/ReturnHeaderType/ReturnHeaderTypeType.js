
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

import {ReturnHeaderType} from '../../order/ReturnHeader/ReturnHeaderType.js';
import {ReturnItemTypeMapType} from '../../order/ReturnItemTypeMap/ReturnItemTypeMapType.js';


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
    