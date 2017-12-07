
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ReturnItemType} from '../order/ReturnItemType.js';


const ReturnItemTypeType = new GraphQLObjectType({
  name: 'ReturnItemTypeType',
  description: 'Type for ReturnItemType in order',

  fields: () => ({
    parentType: {
      type: ReturnItemTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (returnItemType, args, {loaders}) => loaders.ofbiz.load(`returnItemTypes/find?returnItemTypeId=${returnItemType.parentTypeId}`)
    },
    returnItemTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    returnItem: {
      type: new GraphQLList(ReturnItemType),
      args : {returnItemTypeId: {type: GraphQLString}},
      resolve: (returnItemType, args, {loaders}) => loaders.ofbizArray.load(`returnItems/find?returnItemTypeId=${returnItemType.returnItemTypeId}`)
    },
    returnItemType: {
      type: new GraphQLList(ReturnItemTypeType),
      args : {returnItemTypeId: {type: GraphQLString}},
      resolve: (returnItemType, args, {loaders}) => loaders.ofbizArray.load(`returnItemTypes/find?returnItemTypeId=${returnItemType.returnItemTypeId}`)
    }
  })
});

export {ReturnItemTypeType};
    