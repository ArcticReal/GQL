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

const ProductStoreShipmentMethResponseType = new GraphQLObjectType({
  name: 'ProductStoreShipmentMethResponseType',
  description: 'response type for ProductStoreShipmentMeth',

  fields: () => ({
    allowCompanyAddr: {type: GraphQLBoolean},
    allowUspsAddr: {type: GraphQLBoolean},
    allowancePercent: {type: GraphQLFloat},
    companyPartyId: {type: GraphQLString},
    configProps: {type: GraphQLString},
    excludeFeatureGroup: {type: GraphQLString},
    excludeGeoId: {type: GraphQLString},
    includeFeatureGroup: {type: GraphQLString},
    includeGeoId: {type: GraphQLString},
    includeNoChargeItems: {type: GraphQLBoolean},
    maxSize: {type: GraphQLFloat},
    maxTotal: {type: GraphQLFloat},
    maxWeight: {type: GraphQLFloat},
    minSize: {type: GraphQLFloat},
    minTotal: {type: GraphQLFloat},
    minWeight: {type: GraphQLFloat},
    minimumPrice: {type: GraphQLFloat},
    partyId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    productStoreShipMethId: {type: GraphQLString},
    requireCompanyAddr: {type: GraphQLBoolean},
    requireUspsAddr: {type: GraphQLBoolean},
    roleTypeId: {type: GraphQLString},
    sequenceNumber: {type: GraphQLInt},
    serviceName: {type: GraphQLString},
    shipmentCustomMethodId: {type: GraphQLString},
    shipmentGatewayConfigId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString}
  })
});

export {ProductStoreShipmentMethResponseType};
    