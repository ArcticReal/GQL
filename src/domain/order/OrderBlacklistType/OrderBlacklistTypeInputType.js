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

const OrderBlacklistTypeInputType = new GraphQLInputObjectType({
  name: 'OrderBlacklistTypeInputType',
  description: 'input type for OrderBlacklistType',

  fields: () => ({
    description: {type: GraphQLString},
    orderBlacklistTypeId: {type: GraphQLString}
  })
});

export {OrderBlacklistTypeInputType};
    