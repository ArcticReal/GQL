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

const ShipmentReceiptRoleResponseType = new GraphQLObjectType({
  name: 'ShipmentReceiptRoleResponseType',
  description: 'response type for ShipmentReceiptRole',

  fields: () => ({
    partyId: {type: GraphQLString},
    receiptId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {ShipmentReceiptRoleResponseType};
    