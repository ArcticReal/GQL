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

const ShipmentReceiptRoleInputType = new GraphQLInputObjectType({
  name: 'ShipmentReceiptRoleInputType',
  description: 'input type for ShipmentReceiptRole',

  fields: () => ({
    partyId: {type: GraphQLString},
    receiptId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {ShipmentReceiptRoleInputType};
    