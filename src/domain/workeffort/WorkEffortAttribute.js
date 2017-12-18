
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


const WorkEffortAttributeType = new GraphQLObjectType({
  name: 'WorkEffortAttributeType',
  description: 'Type for WorkEffortAttribute in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortAttribute, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortAttribute.workEffortId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {WorkEffortAttributeType};
    




const WorkEffortAttributeInputType = new GraphQLInputObjectType({
  name: 'WorkEffortAttributeInputType',
  description: 'input type for WorkEffortAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortAttributeInputType};
    