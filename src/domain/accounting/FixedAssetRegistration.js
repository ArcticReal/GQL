
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

import {PartyType} from '../party/Party.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';


const FixedAssetRegistrationType = new GraphQLObjectType({
  name: 'FixedAssetRegistrationType',
  description: 'Type for FixedAssetRegistration in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    registrationNumber: {type: GraphQLString},
    registrationDate: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetRegistration, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${fixedAssetRegistration.fixedAssetId}`)
    },
    licenseNumber: {type: GraphQLString},
    govAgencyParty: {
      type: PartyType,
      args : {govAgencyPartyId: {type: GraphQLString}},
      resolve: (fixedAssetRegistration, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${fixedAssetRegistration.govAgencyPartyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetRegistrationType};
    




const FixedAssetRegistrationInputType = new GraphQLInputObjectType({
  name: 'FixedAssetRegistrationInputType',
  description: 'input type for FixedAssetRegistration in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    registrationNumber: {type: GraphQLString},
    registrationDate: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    licenseNumber: {type: GraphQLString},
    govAgencyPartyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FixedAssetRegistrationInputType};
    