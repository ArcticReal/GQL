
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

import {ReturnItemType} from '../order/ReturnItem.js';
import {ReturnAdjustmentType} from '../order/ReturnAdjustment.js';


const ReturnTypeType = new GraphQLObjectType({
  name: 'ReturnTypeType',
  description: 'Type for ReturnType in order',

  fields: () => ({
    returnTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    sequenceId: {type: GraphQLString},
    returnItems: {
      type: new GraphQLList(ReturnItemType),
      args : {},
      resolve: (returnType, args, {loaders}) => loaders.ofbizArray.load(`order/returnItems/find?returnTypeId=${returnType.returnTypeId}`)
    },
    returnAdjustments: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {},
      resolve: (returnType, args, {loaders}) => loaders.ofbizArray.load(`order/returnAdjustments/find?returnTypeId=${returnType.returnTypeId}`)
    }
  })
});

export {ReturnTypeType};
    




const ReturnTypeInputType = new GraphQLInputObjectType({
  name: 'ReturnTypeInputType',
  description: 'input type for ReturnType',

  fields: () => ({
    description: {type: GraphQLString},
    returnTypeId: {type: GraphQLString},
    sequenceId: {type: GraphQLString}
  })
});

export {ReturnTypeInputType};
    