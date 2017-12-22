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

const ShipmentItemFeatureResponseType = new GraphQLObjectType({
  name: 'ShipmentItemFeatureResponseType',
  description: 'response type for ShipmentItemFeature',

  fields: () => ({
    productFeatureId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShipmentItemFeatureResponseType};
    