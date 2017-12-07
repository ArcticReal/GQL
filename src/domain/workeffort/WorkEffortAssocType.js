
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {WorkEffortAssocAttributeType} from '../workeffort/WorkEffortAssocAttributeType.js';
import {WorkEffortAssocTypeType} from '../workeffort/WorkEffortAssocTypeType.js';


const WorkEffortAssocType = new GraphQLObjectType({
  name: 'WorkEffortAssocType',
  description: 'Type for WorkEffortAssoc in workeffort',

  fields: () => ({
    workEffortTo: {
      type: WorkEffortType,
      args : {workEffortIdTo: {type: GraphQLString}},
      resolve: (workEffortAssoc, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortAssoc.workEffortIdTo}`)
    },
    fromDate: {type: GraphQLString},
    workEffortFrom: {
      type: WorkEffortType,
      args : {workEffortIdFrom: {type: GraphQLString}},
      resolve: (workEffortAssoc, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortAssoc.workEffortIdFrom}`)
    },
    sequenceNum: {type: GraphQLInt},
    workEffortAssocType: {
      type: WorkEffortAssocTypeType,
      args : {workEffortAssocTypeId: {type: GraphQLString}},
      resolve: (workEffortAssoc, args, {loaders}) => loaders.ofbiz.load(`workEffortAssocTypes/find?workEffortAssocTypeId=${workEffortAssoc.workEffortAssocTypeId}`)
    },
    thruDate: {type: GraphQLString},
    workEffortAssocAttribute: {
      type: new GraphQLList(WorkEffortAssocAttributeType),
      args : {workEffortIdFrom: {type: GraphQLString}},
      resolve: (workEffortAssoc, args, {loaders}) => loaders.ofbizArray.load(`workEffortAssocAttributes/find?workEffortIdFrom=${workEffortAssoc.workEffortIdFrom}`)
    }
  })
});

export {WorkEffortAssocType};
    