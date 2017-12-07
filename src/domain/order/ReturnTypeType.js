
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
import {ReturnAdjustmentType} from '../order/ReturnAdjustmentType.js';


const ReturnTypeType = new GraphQLObjectType({
  name: 'ReturnTypeType',
  description: 'Type for ReturnType in order',

  fields: () => ({
    returnTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    sequenceId: {type: GraphQLString},
    returnItem: {
      type: new GraphQLList(ReturnItemType),
      args : {returnTypeId: {type: GraphQLString}},
      resolve: (returnType, args, {loaders}) => loaders.ofbizArray.load(`returnItems/find?returnTypeId=${returnType.returnTypeId}`)
    },
    returnAdjustment: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {returnTypeId: {type: GraphQLString}},
      resolve: (returnType, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustments/find?returnTypeId=${returnType.returnTypeId}`)
    }
  })
});

export {ReturnTypeType};
    