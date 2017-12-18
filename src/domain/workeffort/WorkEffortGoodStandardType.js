
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
      resolve: (workEffortGoodStandardType, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEffort/workEffortGoodStandardTypes/find?workEffortGoodStdTypeId=${workEffortGoodStandardType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    workEffortGoodStandards: {
      type: new GraphQLList(WorkEffortGoodStandardType),
      args : {},
      resolve: (workEffortGoodStandardType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortGoodStandards/find?workEffortGoodStdTypeId=${workEffortGoodStandardType.workEffortGoodStdTypeId}`)
    },
    workEffortGoodStandardTypes: {
      type: new GraphQLList(WorkEffortGoodStandardTypeType),
      args : {},
      resolve: (workEffortGoodStandardType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortGoodStandardTypes/find?workEffortGoodStdTypeId=${workEffortGoodStandardType.workEffortGoodStdTypeId}`)
    }
  })
});

export {WorkEffortGoodStandardTypeType};
    




const WorkEffortGoodStandardTypeInputType = new GraphQLInputObjectType({
  name: 'WorkEffortGoodStandardTypeInputType',
  description: 'input type for WorkEffortGoodStandardType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    workEffortGoodStdTypeId: {type: GraphQLString}
  })
});

export {WorkEffortGoodStandardTypeInputType};
    