
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

import {WorkEffortAssocTypeType} from '../workeffort/WorkEffortAssocType.js';


const WorkEffortAssocTypeAttrType = new GraphQLObjectType({
  name: 'WorkEffortAssocTypeAttrType',
  description: 'Type for WorkEffortAssocTypeAttr in workeffort',

  fields: () => ({
    description: {type: GraphQLString},
    workEffortAssocType: {
      type: WorkEffortAssocTypeType,
      args : {workEffortAssocTypeId: {type: GraphQLString}},
      resolve: (workEffortAssocTypeAttr, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEffort/workEffortAssocTypes/find?workEffortAssocTypeId=${workEffortAssocTypeAttr.workEffortAssocTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {WorkEffortAssocTypeAttrType};
    




const WorkEffortAssocTypeAttrInputType = new GraphQLInputObjectType({
  name: 'WorkEffortAssocTypeAttrInputType',
  description: 'input type for WorkEffortAssocTypeAttr in workeffort',

  fields: () => ({
    description: {type: GraphQLString},
    workEffortAssocTypeId: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {WorkEffortAssocTypeAttrInputType};
    