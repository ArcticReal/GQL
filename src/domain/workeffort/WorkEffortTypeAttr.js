
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

import {WorkEffortTypeType} from '../workeffort/WorkEffortType.js';


const WorkEffortTypeAttrType = new GraphQLObjectType({
  name: 'WorkEffortTypeAttrType',
  description: 'Type for WorkEffortTypeAttr in workeffort',

  fields: () => ({
    workEffortType: {
      type: WorkEffortTypeType,
      args : {workEffortTypeId: {type: GraphQLString}},
      resolve: (workEffortTypeAttr, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEffort/workEffortTypes/find?workEffortTypeId=${workEffortTypeAttr.workEffortTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {WorkEffortTypeAttrType};
    




const WorkEffortTypeAttrInputType = new GraphQLInputObjectType({
  name: 'WorkEffortTypeAttrInputType',
  description: 'input type for WorkEffortTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    workEffortTypeId: {type: GraphQLString}
  })
});

export {WorkEffortTypeAttrInputType};
    