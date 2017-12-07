
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortAssocTypeAttrType} from '../workeffort/WorkEffortAssocTypeAttrType.js';
import {WorkEffortAssocType} from '../workeffort/WorkEffortAssocType.js';


const WorkEffortAssocTypeType = new GraphQLObjectType({
  name: 'WorkEffortAssocTypeType',
  description: 'Type for WorkEffortAssocType in workeffort',

  fields: () => ({
    parentType: {
      type: WorkEffortAssocTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (workEffortAssocType, args, {loaders}) => loaders.ofbiz.load(`workEffortAssocTypes/find?workEffortAssocTypeId=${workEffortAssocType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    workEffortAssocTypeId: {type: GraphQLString},
    workEffortAssoc: {
      type: new GraphQLList(WorkEffortAssocType),
      args : {workEffortAssocTypeId: {type: GraphQLString}},
      resolve: (workEffortAssocType, args, {loaders}) => loaders.ofbizArray.load(`workEffortAssocs/find?workEffortAssocTypeId=${workEffortAssocType.workEffortAssocTypeId}`)
    },
    workEffortAssocType: {
      type: new GraphQLList(WorkEffortAssocTypeType),
      args : {workEffortAssocTypeId: {type: GraphQLString}},
      resolve: (workEffortAssocType, args, {loaders}) => loaders.ofbizArray.load(`workEffortAssocTypes/find?workEffortAssocTypeId=${workEffortAssocType.workEffortAssocTypeId}`)
    },
    workEffortAssocTypeAttr: {
      type: new GraphQLList(WorkEffortAssocTypeAttrType),
      args : {workEffortAssocTypeId: {type: GraphQLString}},
      resolve: (workEffortAssocType, args, {loaders}) => loaders.ofbizArray.load(`workEffortAssocTypeAttrs/find?workEffortAssocTypeId=${workEffortAssocType.workEffortAssocTypeId}`)
    }
  })
});

export {WorkEffortAssocTypeType};
    