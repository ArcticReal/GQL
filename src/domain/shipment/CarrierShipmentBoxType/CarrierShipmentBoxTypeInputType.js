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

const CarrierShipmentBoxTypeInputType = new GraphQLInputObjectType({
  name: 'CarrierShipmentBoxTypeInputType',
  description: 'input type for CarrierShipmentBoxType',

  fields: () => ({
    oversizeCode: {type: GraphQLString},
    packagingTypeCode: {type: GraphQLString},
    partyId: {type: GraphQLString},
    shipmentBoxTypeId: {type: GraphQLString}
  })
});

export {CarrierShipmentBoxTypeInputType};
    