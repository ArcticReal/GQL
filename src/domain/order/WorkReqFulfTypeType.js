
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkRequirementFulfillmentType} from '../order/WorkRequirementFulfillmentType.js';


const WorkReqFulfTypeType = new GraphQLObjectType({
  name: 'WorkReqFulfTypeType',
  description: 'Type for WorkReqFulfType in order',

  fields: () => ({
    workReqFulfTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    workRequirementFulfillment: {
      type: new GraphQLList(WorkRequirementFulfillmentType),
      args : {workReqFulfTypeId: {type: GraphQLString}},
      resolve: (workReqFulfType, args, {loaders}) => loaders.ofbizArray.load(`workRequirementFulfillments/find?workReqFulfTypeId=${workReqFulfType.workReqFulfTypeId}`)
    }
  })
});

export {WorkReqFulfTypeType};
    