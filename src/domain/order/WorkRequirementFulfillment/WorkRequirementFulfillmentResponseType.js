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

const WorkRequirementFulfillmentResponseType = new GraphQLObjectType({
  name: 'WorkRequirementFulfillmentResponseType',
  description: 'response type for WorkRequirementFulfillment',

  fields: () => ({
    requirementId: {type: GraphQLString},
    workEffortId: {type: GraphQLString},
    workReqFulfTypeId: {type: GraphQLString}
  })
});

export {WorkRequirementFulfillmentResponseType};
    