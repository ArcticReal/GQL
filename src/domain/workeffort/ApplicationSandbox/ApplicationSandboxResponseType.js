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

const ApplicationSandboxResponseType = new GraphQLObjectType({
  name: 'ApplicationSandboxResponseType',
  description: 'response type for ApplicationSandbox',

  fields: () => ({
    applicationId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    runtimeDataId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {ApplicationSandboxResponseType};
    