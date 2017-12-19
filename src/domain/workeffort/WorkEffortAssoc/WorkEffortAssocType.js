
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

import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {WorkEffortAssocAttributeType} from '../../workeffort/WorkEffortAssocAttribute/WorkEffortAssocAttributeType.js';
import {WorkEffortAssocTypeType} from '../../workeffort/WorkEffortAssocType/WorkEffortAssocTypeType.js';


const WorkEffortAssocType = new GraphQLObjectType({
  name: 'WorkEffortAssocType',
  description: 'Type for WorkEffortAssoc in workeffort',

  fields: () => ({
    workEffortTo: {
      type: WorkEffortType,
      args : {workEffortIdTo: {type: GraphQLString}},
      resolve: (workEffortAssoc, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortAssoc.workEffortIdTo}`)
    },
    fromDate: {type: GraphQLString},
    workEffortFrom: {
      type: WorkEffortType,
      args : {workEffortIdFrom: {type: GraphQLString}},
      resolve: (workEffortAssoc, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortAssoc.workEffortIdFrom}`)
    },
    sequenceNum: {type: GraphQLInt},
    workEffortAssocType: {
      type: WorkEffortAssocTypeType,
      args : {workEffortAssocTypeId: {type: GraphQLString}},
      resolve: (workEffortAssoc, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEffort/workEffortAssocTypes/find?workEffortAssocTypeId=${workEffortAssoc.workEffortAssocTypeId}`)
    },
    thruDate: {type: GraphQLString},
    workEffortAssocAttributes: {
      type: new GraphQLList(WorkEffortAssocAttributeType),
      args : {},
      resolve: (workEffortAssoc, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortAssocAttributes/find?workEffortIdFrom=${workEffortAssoc.workEffortIdFrom}`)
    }
  })
});

export {WorkEffortAssocType};
    