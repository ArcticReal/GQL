
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

import {WorkRequirementFulfillmentType} from '../../order/WorkRequirementFulfillment/WorkRequirementFulfillmentType.js';


const WorkReqFulfTypeType = new GraphQLObjectType({
  name: 'WorkReqFulfTypeType',
  description: 'Type for WorkReqFulfType in order',

  fields: () => ({
    workReqFulfTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    workRequirementFulfillments: {
      type: new GraphQLList(WorkRequirementFulfillmentType),
      args : {},
      resolve: (workReqFulfType, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/workRequirementFulfillments/find?workReqFulfTypeId=${workReqFulfType.workReqFulfTypeId}`)
    }
  })
});

export {WorkReqFulfTypeType};
    