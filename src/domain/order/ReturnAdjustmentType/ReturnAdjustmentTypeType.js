
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

import {ReturnAdjustmentType} from '../../order/ReturnAdjustment/ReturnAdjustmentType.js';


const ReturnAdjustmentTypeType = new GraphQLObjectType({
  name: 'ReturnAdjustmentTypeType',
  description: 'Type for ReturnAdjustmentType in order',

  fields: () => ({
    returnAdjustmentTypeId: {type: GraphQLString},
    parentType: {
      type: ReturnAdjustmentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (returnAdjustmentType, args, {loaders}) => loaders.ofbiz.load(`order/returnAdjustment/returnAdjustmentTypes/find?returnAdjustmentTypeId=${returnAdjustmentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    returnAdjustmentTypes: {
      type: new GraphQLList(ReturnAdjustmentTypeType),
      args : {},
      resolve: (returnAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`order/returnAdjustment/returnAdjustmentTypes/find?returnAdjustmentTypeId=${returnAdjustmentType.returnAdjustmentTypeId}`)
    },
    returnAdjustments: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {},
      resolve: (returnAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`order/returnAdjustments/find?returnAdjustmentTypeId=${returnAdjustmentType.returnAdjustmentTypeId}`)
    }
  })
});

export {ReturnAdjustmentTypeType};
    