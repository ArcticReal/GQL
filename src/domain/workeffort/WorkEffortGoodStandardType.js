
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

import {WorkEffortGoodStandardType} from '../workeffort/WorkEffortGoodStandard.js';


const WorkEffortGoodStandardTypeType = new GraphQLObjectType({
  name: 'WorkEffortGoodStandardTypeType',
  description: 'Type for WorkEffortGoodStandardType in workeffort',

  fields: () => ({
    workEffortGoodStdTypeId: {type: GraphQLString},
    parentType: {
      type: WorkEffortGoodStandardTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (workEffortGoodStandardType, args, {loaders}) => loaders.ofbiz.load(`workEffortGoodStandardTypes/find?workEffortGoodStdTypeId=${workEffortGoodStandardType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    workEffortGoodStandards: {
      type: new GraphQLList(WorkEffortGoodStandardType),
      args : {workEffortGoodStdTypeId: {type: GraphQLString}},
      resolve: (workEffortGoodStandardType, args, {loaders}) => loaders.ofbizArray.load(`workEffortGoodStandards/find?workEffortGoodStdTypeId=${workEffortGoodStandardType.workEffortGoodStdTypeId}`)
    },
    workEffortGoodStandardTypes: {
      type: new GraphQLList(WorkEffortGoodStandardTypeType),
      args : {workEffortGoodStdTypeId: {type: GraphQLString}},
      resolve: (workEffortGoodStandardType, args, {loaders}) => loaders.ofbizArray.load(`workEffortGoodStandardTypes/find?workEffortGoodStdTypeId=${workEffortGoodStandardType.workEffortGoodStdTypeId}`)
    }
  })
});

export {WorkEffortGoodStandardTypeType};
    




const WorkEffortGoodStandardTypeInputType = new GraphQLInputObjectType({
  name: 'WorkEffortGoodStandardTypeInputType',
  description: 'input type for WorkEffortGoodStandardType in workeffort',

  fields: () => ({
    workEffortGoodStdTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {WorkEffortGoodStandardTypeInputType};
    