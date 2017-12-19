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

const FixedAssetRegistrationInputType = new GraphQLInputObjectType({
  name: 'FixedAssetRegistrationInputType',
  description: 'input type for FixedAssetRegistration',

  fields: () => ({
    fixedAssetId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    govAgencyPartyId: {type: GraphQLString},
    licenseNumber: {type: GraphQLString},
    registrationDate: {type: GraphQLString},
    registrationNumber: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetRegistrationInputType};
    