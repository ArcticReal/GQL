
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

import {WorkEffortTypeAttrType} from '../workeffort/WorkEffortTypeAttr.js';
import {WorkEffortType} from '../workeffort/WorkEffort.js';


const WorkEffortTypeType = new GraphQLObjectType({
  name: 'WorkEffortTypeType',
  description: 'Type for WorkEffortType in workeffort',

  fields: () => ({
    parentType: {
      type: WorkEffortTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (workEffortType, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEffort/workEffortTypes/find?workEffortTypeId=${workEffortType.parentTypeId}`)
    },
    workEffortTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    workEffortTypes: {
      type: new GraphQLList(WorkEffortTypeType),
      args : {},
      resolve: (workEffortType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortTypes/find?workEffortTypeId=${workEffortType.workEffortTypeId}`)
    },
    workEffortTypeAttrs: {
      type: new GraphQLList(WorkEffortTypeAttrType),
      args : {},
      resolve: (workEffortType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortTypeAttrs/find?workEffortTypeId=${workEffortType.workEffortTypeId}`)
    },
    workEfforts: {
      type: new GraphQLList(WorkEffortType),
      args : {},
      resolve: (workEffortType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEfforts/find?workEffortTypeId=${workEffortType.workEffortTypeId}`)
    }
  })
});

export {WorkEffortTypeType};
    




const WorkEffortTypeInputType = new GraphQLInputObjectType({
  name: 'WorkEffortTypeInputType',
  description: 'input type for WorkEffortType in workeffort',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    workEffortTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {WorkEffortTypeInputType};
    