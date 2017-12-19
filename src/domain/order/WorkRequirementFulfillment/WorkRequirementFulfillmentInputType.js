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

const WorkRequirementFulfillmentInputType = new GraphQLInputObjectType({
  name: 'WorkRequirementFulfillmentInputType',
  description: 'input type for WorkRequirementFulfillment',

  fields: () => ({
    requirementId: {type: GraphQLString},
    workEffortId: {type: GraphQLString},
    workReqFulfTypeId: {type: GraphQLString}
  })
});

export {WorkRequirementFulfillmentInputType};
    