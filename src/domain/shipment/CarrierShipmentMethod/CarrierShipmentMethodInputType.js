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

const CarrierShipmentMethodInputType = new GraphQLInputObjectType({
  name: 'CarrierShipmentMethodInputType',
  description: 'input type for CarrierShipmentMethod',

  fields: () => ({
    carrierServiceCode: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    sequenceNumber: {type: GraphQLInt},
    shipmentMethodTypeId: {type: GraphQLString}
  })
});

export {CarrierShipmentMethodInputType};
    