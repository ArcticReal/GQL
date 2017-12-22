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

const CarrierShipmentMethodResponseType = new GraphQLObjectType({
  name: 'CarrierShipmentMethodResponseType',
  description: 'response type for CarrierShipmentMethod',

  fields: () => ({
    carrierServiceCode: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    sequenceNumber: {type: GraphQLInt},
    shipmentMethodTypeId: {type: GraphQLString}
  })
});

export {CarrierShipmentMethodResponseType};
    