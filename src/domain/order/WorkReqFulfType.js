
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

import {WorkRequirementFulfillmentType} from '../order/WorkRequirementFulfillment.js';


const WorkReqFulfTypeType = new GraphQLObjectType({
  name: 'WorkReqFulfTypeType',
  description: 'Type for WorkReqFulfType in order',

  fields: () => ({
    workReqFulfTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    workRequirementFulfillments: {
      type: new GraphQLList(WorkRequirementFulfillmentType),
      args : {workReqFulfTypeId: {type: GraphQLString}},
      resolve: (workReqFulfType, args, {loaders}) => loaders.ofbizArray.load(`workRequirementFulfillments/find?workReqFulfTypeId=${workReqFulfType.workReqFulfTypeId}`)
    }
  })
});

export {WorkReqFulfTypeType};
    




const WorkReqFulfTypeInputType = new GraphQLInputObjectType({
  name: 'WorkReqFulfTypeInputType',
  description: 'input type for WorkReqFulfType in order',

  fields: () => ({
    workReqFulfTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {WorkReqFulfTypeInputType};
    