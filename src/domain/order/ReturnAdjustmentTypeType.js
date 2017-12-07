
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ReturnAdjustmentType} from '../order/ReturnAdjustmentType.js';


const ReturnAdjustmentTypeType = new GraphQLObjectType({
  name: 'ReturnAdjustmentTypeType',
  description: 'Type for ReturnAdjustmentType in order',

  fields: () => ({
    returnAdjustmentTypeId: {type: GraphQLString},
    parentType: {
      type: ReturnAdjustmentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (returnAdjustmentType, args, {loaders}) => loaders.ofbiz.load(`returnAdjustmentTypes/find?returnAdjustmentTypeId=${returnAdjustmentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    returnAdjustmentType: {
      type: new GraphQLList(ReturnAdjustmentTypeType),
      args : {returnAdjustmentTypeId: {type: GraphQLString}},
      resolve: (returnAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustmentTypes/find?returnAdjustmentTypeId=${returnAdjustmentType.returnAdjustmentTypeId}`)
    },
    returnAdjustment: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {returnAdjustmentTypeId: {type: GraphQLString}},
      resolve: (returnAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustments/find?returnAdjustmentTypeId=${returnAdjustmentType.returnAdjustmentTypeId}`)
    }
  })
});

export {ReturnAdjustmentTypeType};
    