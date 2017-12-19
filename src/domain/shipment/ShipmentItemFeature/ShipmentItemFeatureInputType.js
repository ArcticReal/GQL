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

const ShipmentItemFeatureInputType = new GraphQLInputObjectType({
  name: 'ShipmentItemFeatureInputType',
  description: 'input type for ShipmentItemFeature',

  fields: () => ({
    productFeatureId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShipmentItemFeatureInputType};
    