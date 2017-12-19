
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

import {WorkEffortAssocTypeAttrType} from '../../workeffort/WorkEffortAssocTypeAttr/WorkEffortAssocTypeAttrType.js';
import {WorkEffortAssocType} from '../../workeffort/WorkEffortAssoc/WorkEffortAssocType.js';


const WorkEffortAssocTypeType = new GraphQLObjectType({
  name: 'WorkEffortAssocTypeType',
  description: 'Type for WorkEffortAssocType in workeffort',

  fields: () => ({
    parentType: {
      type: WorkEffortAssocTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (workEffortAssocType, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEffort/workEffortAssocTypes/find?workEffortAssocTypeId=${workEffortAssocType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    workEffortAssocTypeId: {type: GraphQLString},
    workEffortAssocs: {
      type: new GraphQLList(WorkEffortAssocType),
      args : {},
      resolve: (workEffortAssocType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortAssocs/find?workEffortAssocTypeId=${workEffortAssocType.workEffortAssocTypeId}`)
    },
    workEffortAssocTypes: {
      type: new GraphQLList(WorkEffortAssocTypeType),
      args : {},
      resolve: (workEffortAssocType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortAssocTypes/find?workEffortAssocTypeId=${workEffortAssocType.workEffortAssocTypeId}`)
    },
    workEffortAssocTypeAttrs: {
      type: new GraphQLList(WorkEffortAssocTypeAttrType),
      args : {},
      resolve: (workEffortAssocType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortAssocTypeAttrs/find?workEffortAssocTypeId=${workEffortAssocType.workEffortAssocTypeId}`)
    }
  })
});

export {WorkEffortAssocTypeType};
    