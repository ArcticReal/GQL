
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

import {WorkEffortAssocType} from '../../workeffort/WorkEffortAssoc/WorkEffortAssocType.js';


const WorkEffortAssocAttributeType = new GraphQLObjectType({
  name: 'WorkEffortAssocAttributeType',
  description: 'Type for WorkEffortAssocAttribute in workeffort',

  fields: () => ({
    workEffortIdTo: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    workEffortFrom: {
      type: WorkEffortAssocType,
      args : {workEffortIdFrom: {type: GraphQLString}},
      resolve: (workEffortAssocAttribute, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEffort/workEffortAssocs/find?workEffortIdFrom=${workEffortAssocAttribute.workEffortIdFrom}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    workEffortAssocTypeId: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {WorkEffortAssocAttributeType};
    