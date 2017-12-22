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

const OrderRoleResponseType = new GraphQLObjectType({
  name: 'OrderRoleResponseType',
  description: 'response type for OrderRole',

  fields: () => ({
    orderId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {OrderRoleResponseType};
    