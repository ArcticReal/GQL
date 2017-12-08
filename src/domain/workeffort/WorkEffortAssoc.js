
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
import {WorkEffortAssocAttributeType} from '../workeffort/WorkEffortAssocAttribute.js';
import {WorkEffortAssocTypeType} from '../workeffort/WorkEffortAssocType.js';


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
    workEffortAssocAttributes: {
      type: new GraphQLList(WorkEffortAssocAttributeType),
      args : {workEffortIdFrom: {type: GraphQLString}},
      resolve: (workEffortAssoc, args, {loaders}) => loaders.ofbizArray.load(`workEffortAssocAttributes/find?workEffortIdFrom=${workEffortAssoc.workEffortIdFrom}`)
    }
  })
});

export {WorkEffortAssocType};
    




const WorkEffortAssocInputType = new GraphQLInputObjectType({
  name: 'WorkEffortAssocInputType',
  description: 'input type for WorkEffortAssoc in workeffort',

  fields: () => ({
    workEffortIdTo: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    workEffortIdFrom: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    workEffortAssocTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortAssocInputType};
    