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

const FacilityResponseType = new GraphQLObjectType({
  name: 'FacilityResponseType',
  description: 'response type for Facility',

  fields: () => ({
    closedDate: {type: GraphQLString},
    defaultDaysToShip: {type: GraphQLInt},
    defaultDimensionUomId: {type: GraphQLString},
    defaultInventoryItemTypeId: {type: GraphQLString},
    defaultWeightUomId: {type: GraphQLString},
    description: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    facilityName: {type: GraphQLString},
    facilitySize: {type: GraphQLFloat},
    facilitySizeUomId: {type: GraphQLString},
    facilityTypeId: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    oldSquareFootage: {type: GraphQLInt},
    openedDate: {type: GraphQLString},
    ownerPartyId: {type: GraphQLString},
    parentFacilityId: {type: GraphQLString},
    primaryFacilityGroupId: {type: GraphQLString},
    productStoreId: {type: GraphQLString}
  })
});

export {FacilityResponseType};
    