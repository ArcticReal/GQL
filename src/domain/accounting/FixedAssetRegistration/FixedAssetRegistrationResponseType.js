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

const FixedAssetRegistrationResponseType = new GraphQLObjectType({
  name: 'FixedAssetRegistrationResponseType',
  description: 'response type for FixedAssetRegistration',

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

export {FixedAssetRegistrationResponseType};
    