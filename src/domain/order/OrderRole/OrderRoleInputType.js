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

const OrderRoleInputType = new GraphQLInputObjectType({
  name: 'OrderRoleInputType',
  description: 'input type for OrderRole',

  fields: () => ({
    orderId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {OrderRoleInputType};
    