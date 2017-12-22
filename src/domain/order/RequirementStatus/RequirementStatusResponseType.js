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

const RequirementStatusResponseType = new GraphQLObjectType({
  name: 'RequirementStatusResponseType',
  description: 'response type for RequirementStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    requirementId: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {RequirementStatusResponseType};
    