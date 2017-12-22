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

const OrderBlacklistTypeResponseType = new GraphQLObjectType({
  name: 'OrderBlacklistTypeResponseType',
  description: 'response type for OrderBlacklistType',

  fields: () => ({
    description: {type: GraphQLString},
    orderBlacklistTypeId: {type: GraphQLString}
  })
});

export {OrderBlacklistTypeResponseType};
    