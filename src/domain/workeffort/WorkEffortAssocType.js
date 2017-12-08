
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

import {WorkEffortAssocTypeAttrType} from '../workeffort/WorkEffortAssocTypeAttr.js';
import {WorkEffortAssocType} from '../workeffort/WorkEffortAssoc.js';


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
    workEffortAssocs: {
      type: new GraphQLList(WorkEffortAssocType),
      args : {workEffortAssocTypeId: {type: GraphQLString}},
      resolve: (workEffortAssocType, args, {loaders}) => loaders.ofbizArray.load(`workEffortAssocs/find?workEffortAssocTypeId=${workEffortAssocType.workEffortAssocTypeId}`)
    },
    workEffortAssocTypes: {
      type: new GraphQLList(WorkEffortAssocTypeType),
      args : {workEffortAssocTypeId: {type: GraphQLString}},
      resolve: (workEffortAssocType, args, {loaders}) => loaders.ofbizArray.load(`workEffortAssocTypes/find?workEffortAssocTypeId=${workEffortAssocType.workEffortAssocTypeId}`)
    },
    workEffortAssocTypeAttrs: {
      type: new GraphQLList(WorkEffortAssocTypeAttrType),
      args : {workEffortAssocTypeId: {type: GraphQLString}},
      resolve: (workEffortAssocType, args, {loaders}) => loaders.ofbizArray.load(`workEffortAssocTypeAttrs/find?workEffortAssocTypeId=${workEffortAssocType.workEffortAssocTypeId}`)
    }
  })
});

export {WorkEffortAssocTypeType};
    




const WorkEffortAssocTypeInputType = new GraphQLInputObjectType({
  name: 'WorkEffortAssocTypeInputType',
  description: 'input type for WorkEffortAssocType in workeffort',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    workEffortAssocTypeId: {type: GraphQLString}
  })
});

export {WorkEffortAssocTypeInputType};
    