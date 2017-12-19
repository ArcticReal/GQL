
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

import {ReturnItemType} from '../../order/ReturnItem/ReturnItemType.js';


const ReturnItemTypeType = new GraphQLObjectType({
  name: 'ReturnItemTypeType',
  description: 'Type for ReturnItemType in order',

  fields: () => ({
    parentType: {
      type: ReturnItemTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (returnItemType, args, {loaders}) => loaders.ofbiz.load(`order/returnItem/returnItemTypes/find?returnItemTypeId=${returnItemType.parentTypeId}`)
    },
    returnItemTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    returnItems: {
      type: new GraphQLList(ReturnItemType),
      args : {},
      resolve: (returnItemType, args, {loaders}) => loaders.ofbizArray.load(`order/returnItems/find?returnItemTypeId=${returnItemType.returnItemTypeId}`)
    },
    returnItemTypes: {
      type: new GraphQLList(ReturnItemTypeType),
      args : {},
      resolve: (returnItemType, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemTypes/find?returnItemTypeId=${returnItemType.returnItemTypeId}`)
    }
  })
});

export {ReturnItemTypeType};
    