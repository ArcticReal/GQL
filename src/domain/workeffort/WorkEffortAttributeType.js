
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


const WorkEffortAttributeType = new GraphQLObjectType({
  name: 'WorkEffortAttributeType',
  description: 'Type for WorkEffortAttribute in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortAttribute, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortAttribute.workEffortId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {WorkEffortAttributeType};
    