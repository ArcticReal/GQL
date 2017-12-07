
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortGoodStandardType} from '../workeffort/WorkEffortGoodStandardType.js';


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
    workEffortGoodStandard: {
      type: new GraphQLList(WorkEffortGoodStandardType),
      args : {workEffortGoodStdTypeId: {type: GraphQLString}},
      resolve: (workEffortGoodStandardType, args, {loaders}) => loaders.ofbizArray.load(`workEffortGoodStandards/find?workEffortGoodStdTypeId=${workEffortGoodStandardType.workEffortGoodStdTypeId}`)
    },
    workEffortGoodStandardType: {
      type: new GraphQLList(WorkEffortGoodStandardTypeType),
      args : {workEffortGoodStdTypeId: {type: GraphQLString}},
      resolve: (workEffortGoodStandardType, args, {loaders}) => loaders.ofbizArray.load(`workEffortGoodStandardTypes/find?workEffortGoodStdTypeId=${workEffortGoodStandardType.workEffortGoodStdTypeId}`)
    }
  })
});

export {WorkEffortGoodStandardTypeType};
    