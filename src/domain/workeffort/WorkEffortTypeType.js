
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortTypeAttrType} from '../workeffort/WorkEffortTypeAttrType.js';
import {WorkEffortType} from '../workeffort/WorkEffortType.js';


const WorkEffortTypeType = new GraphQLObjectType({
  name: 'WorkEffortTypeType',
  description: 'Type for WorkEffortType in workeffort',

  fields: () => ({
    parentType: {
      type: WorkEffortTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (workEffortType, args, {loaders}) => loaders.ofbiz.load(`workEffortTypes/find?workEffortTypeId=${workEffortType.parentTypeId}`)
    },
    workEffortTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    workEffortType: {
      type: new GraphQLList(WorkEffortTypeType),
      args : {workEffortTypeId: {type: GraphQLString}},
      resolve: (workEffortType, args, {loaders}) => loaders.ofbizArray.load(`workEffortTypes/find?workEffortTypeId=${workEffortType.workEffortTypeId}`)
    },
    workEffortTypeAttr: {
      type: new GraphQLList(WorkEffortTypeAttrType),
      args : {workEffortTypeId: {type: GraphQLString}},
      resolve: (workEffortType, args, {loaders}) => loaders.ofbizArray.load(`workEffortTypeAttrs/find?workEffortTypeId=${workEffortType.workEffortTypeId}`)
    },
    workEffort: {
      type: new GraphQLList(WorkEffortType),
      args : {workEffortTypeId: {type: GraphQLString}},
      resolve: (workEffortType, args, {loaders}) => loaders.ofbizArray.load(`workEfforts/find?workEffortTypeId=${workEffortType.workEffortTypeId}`)
    }
  })
});

export {WorkEffortTypeType};
    