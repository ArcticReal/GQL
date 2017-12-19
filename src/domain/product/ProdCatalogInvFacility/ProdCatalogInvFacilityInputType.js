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

const ProdCatalogInvFacilityInputType = new GraphQLInputObjectType({
  name: 'ProdCatalogInvFacilityInputType',
  description: 'input type for ProdCatalogInvFacility',

  fields: () => ({
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProdCatalogInvFacilityInputType};
    