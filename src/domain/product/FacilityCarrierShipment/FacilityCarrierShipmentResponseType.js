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

const FacilityCarrierShipmentResponseType = new GraphQLObjectType({
  name: 'FacilityCarrierShipmentResponseType',
  description: 'response type for FacilityCarrierShipment',

  fields: () => ({
    facilityId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString}
  })
});

export {FacilityCarrierShipmentResponseType};
    