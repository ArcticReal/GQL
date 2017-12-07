
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortTypeType} from '../workeffort/WorkEffortTypeType.js';


const WorkEffortTypeAttrType = new GraphQLObjectType({
  name: 'WorkEffortTypeAttrType',
  description: 'Type for WorkEffortTypeAttr in workeffort',

  fields: () => ({
    workEffortType: {
      type: WorkEffortTypeType,
      args : {workEffortTypeId: {type: GraphQLString}},
      resolve: (workEffortTypeAttr, args, {loaders}) => loaders.ofbiz.load(`workEffortTypes/find?workEffortTypeId=${workEffortTypeAttr.workEffortTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {WorkEffortTypeAttrType};
    