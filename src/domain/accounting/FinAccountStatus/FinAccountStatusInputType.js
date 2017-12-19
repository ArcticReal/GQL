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

const FinAccountStatusInputType = new GraphQLInputObjectType({
  name: 'FinAccountStatusInputType',
  description: 'input type for FinAccountStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusEndDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {FinAccountStatusInputType};
    