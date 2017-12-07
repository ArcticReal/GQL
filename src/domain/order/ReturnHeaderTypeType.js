
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ReturnHeaderType} from '../order/ReturnHeaderType.js';
import {ReturnItemTypeMapType} from '../order/ReturnItemTypeMapType.js';


const ReturnHeaderTypeType = new GraphQLObjectType({
  name: 'ReturnHeaderTypeType',
  description: 'Type for ReturnHeaderType in order',

  fields: () => ({
    parentType: {
      type: ReturnHeaderTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (returnHeaderType, args, {loaders}) => loaders.ofbiz.load(`returnHeaderTypes/find?returnHeaderTypeId=${returnHeaderType.parentTypeId}`)
    },
    description: {type: GraphQLString},
    returnHeaderTypeId: {type: GraphQLString},
    returnHeaderType: {
      type: new GraphQLList(ReturnHeaderTypeType),
      args : {returnHeaderTypeId: {type: GraphQLString}},
      resolve: (returnHeaderType, args, {loaders}) => loaders.ofbizArray.load(`returnHeaderTypes/find?returnHeaderTypeId=${returnHeaderType.returnHeaderTypeId}`)
    },
    returnHeader: {
      type: new GraphQLList(ReturnHeaderType),
      args : {returnHeaderTypeId: {type: GraphQLString}},
      resolve: (returnHeaderType, args, {loaders}) => loaders.ofbizArray.load(`returnHeaders/find?returnHeaderTypeId=${returnHeaderType.returnHeaderTypeId}`)
    },
    returnItemTypeMap: {
      type: new GraphQLList(ReturnItemTypeMapType),
      args : {returnHeaderTypeId: {type: GraphQLString}},
      resolve: (returnHeaderType, args, {loaders}) => loaders.ofbizArray.load(`returnItemTypeMaps/find?returnHeaderTypeId=${returnHeaderType.returnHeaderTypeId}`)
    }
  })
});

export {ReturnHeaderTypeType};
    