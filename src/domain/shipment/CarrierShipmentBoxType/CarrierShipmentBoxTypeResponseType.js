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

const CarrierShipmentBoxTypeResponseType = new GraphQLObjectType({
  name: 'CarrierShipmentBoxTypeResponseType',
  description: 'response type for CarrierShipmentBoxType',

  fields: () => ({
    oversizeCode: {type: GraphQLString},
    packagingTypeCode: {type: GraphQLString},
    partyId: {type: GraphQLString},
    shipmentBoxTypeId: {type: GraphQLString}
  })
});

export {CarrierShipmentBoxTypeResponseType};
    