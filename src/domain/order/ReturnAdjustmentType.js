
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

import {ReturnAdjustmentType} from '../order/ReturnAdjustment.js';


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
    returnAdjustmentTypes: {
      type: new GraphQLList(ReturnAdjustmentTypeType),
      args : {returnAdjustmentTypeId: {type: GraphQLString}},
      resolve: (returnAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustmentTypes/find?returnAdjustmentTypeId=${returnAdjustmentType.returnAdjustmentTypeId}`)
    },
    returnAdjustments: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {returnAdjustmentTypeId: {type: GraphQLString}},
      resolve: (returnAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustments/find?returnAdjustmentTypeId=${returnAdjustmentType.returnAdjustmentTypeId}`)
    }
  })
});

export {ReturnAdjustmentTypeType};
    




const ReturnAdjustmentTypeInputType = new GraphQLInputObjectType({
  name: 'ReturnAdjustmentTypeInputType',
  description: 'input type for ReturnAdjustmentType in order',

  fields: () => ({
    returnAdjustmentTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {ReturnAdjustmentTypeInputType};
    