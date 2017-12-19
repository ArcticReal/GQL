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

const FacilityCarrierShipmentInputType = new GraphQLInputObjectType({
  name: 'FacilityCarrierShipmentInputType',
  description: 'input type for FacilityCarrierShipment',

  fields: () => ({
    facilityId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString}
  })
});

export {FacilityCarrierShipmentInputType};
    