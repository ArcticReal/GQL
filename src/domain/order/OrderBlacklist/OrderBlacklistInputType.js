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

const OrderBlacklistInputType = new GraphQLInputObjectType({
  name: 'OrderBlacklistInputType',
  description: 'input type for OrderBlacklist',

  fields: () => ({
    blacklistString: {type: GraphQLString},
    orderBlacklistTypeId: {type: GraphQLString}
  })
});

export {OrderBlacklistInputType};
    