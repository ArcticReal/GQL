
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

import {PartyType} from '../../party/Party/PartyType.js';
import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';


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
      resolve: (fixedAssetRegistration, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${fixedAssetRegistration.fixedAssetId}`)
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
    