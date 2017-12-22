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

const OrderBlacklistResponseType = new GraphQLObjectType({
  name: 'OrderBlacklistResponseType',
  description: 'response type for OrderBlacklist',

  fields: () => ({
    blacklistString: {type: GraphQLString},
    orderBlacklistTypeId: {type: GraphQLString}
  })
});

export {OrderBlacklistResponseType};
    