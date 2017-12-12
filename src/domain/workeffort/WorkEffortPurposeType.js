
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';


const WorkEffortPurposeTypeType = new GraphQLObjectType({
  name: 'WorkEffortPurposeTypeType',
  description: 'Type for WorkEffortPurposeType in workeffort',

  fields: () => ({
    parentType: {
      type: WorkEffortPurposeTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (workEffortPurposeType, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEffort/workEffortPurposeTypes/find?workEffortPurposeTypeId=${workEffortPurposeType.parentTypeId}`)
    },
    workEffortPurposeTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    workEfforts: {
      type: new GraphQLList(WorkEffortType),
      args : {},
      resolve: (workEffortPurposeType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEfforts/find?workEffortPurposeTypeId=${workEffortPurposeType.workEffortPurposeTypeId}`)
    },
    workEffortPurposeTypes: {
      type: new GraphQLList(WorkEffortPurposeTypeType),
      args : {},
      resolve: (workEffortPurposeType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortPurposeTypes/find?workEffortPurposeTypeId=${workEffortPurposeType.workEffortPurposeTypeId}`)
    }
  })
});

export {WorkEffortPurposeTypeType};
    




const WorkEffortPurposeTypeInputType = new GraphQLInputObjectType({
  name: 'WorkEffortPurposeTypeInputType',
  description: 'input type for WorkEffortPurposeType in workeffort',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    workEffortPurposeTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {WorkEffortPurposeTypeInputType};
    