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

const FinAccountStatusResponseType = new GraphQLObjectType({
  name: 'FinAccountStatusResponseType',
  description: 'response type for FinAccountStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusEndDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {FinAccountStatusResponseType};
    