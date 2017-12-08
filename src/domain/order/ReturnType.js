
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
      args : {returnTypeId: {type: GraphQLString}},
      resolve: (returnType, args, {loaders}) => loaders.ofbizArray.load(`returnItems/find?returnTypeId=${returnType.returnTypeId}`)
    },
    returnAdjustments: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {returnTypeId: {type: GraphQLString}},
      resolve: (returnType, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustments/find?returnTypeId=${returnType.returnTypeId}`)
    }
  })
});

export {ReturnTypeType};
    




const ReturnTypeInputType = new GraphQLInputObjectType({
  name: 'ReturnTypeInputType',
  description: 'input type for ReturnType in order',

  fields: () => ({
    returnTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    sequenceId: {type: GraphQLString}
  })
});

export {ReturnTypeInputType};
    