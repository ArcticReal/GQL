
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
import {GlAccountType} from '../accounting/GlAccount.js';


const FixedAssetTypeGlAccountType = new GraphQLObjectType({
  name: 'FixedAssetTypeGlAccountType',
  description: 'Type for FixedAssetTypeGlAccount in accounting',

  fields: () => ({
    fixedAssetTypeId: {type: GraphQLString},
    depGlAccount: {
      type: GlAccountType,
      args : {depGlAccountId: {type: GraphQLString}},
      resolve: (fixedAssetTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${fixedAssetTypeGlAccount.depGlAccountId}`)
    },
    profitGlAccount: {
      type: GlAccountType,
      args : {profitGlAccountId: {type: GraphQLString}},
      resolve: (fixedAssetTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${fixedAssetTypeGlAccount.profitGlAccountId}`)
    },
    fixedAssetId: {type: GraphQLString},
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (fixedAssetTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${fixedAssetTypeGlAccount.organizationPartyId}`)
    },
    lossGlAccount: {
      type: GlAccountType,
      args : {lossGlAccountId: {type: GraphQLString}},
      resolve: (fixedAssetTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${fixedAssetTypeGlAccount.lossGlAccountId}`)
    },
    accDepGlAccount: {
      type: GlAccountType,
      args : {accDepGlAccountId: {type: GraphQLString}},
      resolve: (fixedAssetTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${fixedAssetTypeGlAccount.accDepGlAccountId}`)
    },
    assetGlAccount: {
      type: GlAccountType,
      args : {assetGlAccountId: {type: GraphQLString}},
      resolve: (fixedAssetTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${fixedAssetTypeGlAccount.assetGlAccountId}`)
    }
  })
});

export {FixedAssetTypeGlAccountType};
    




const FixedAssetTypeGlAccountInputType = new GraphQLInputObjectType({
  name: 'FixedAssetTypeGlAccountInputType',
  description: 'input type for FixedAssetTypeGlAccount',

  fields: () => ({
    accDepGlAccountId: {type: GraphQLString},
    assetGlAccountId: {type: GraphQLString},
    depGlAccountId: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    fixedAssetTypeId: {type: GraphQLString},
    lossGlAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    profitGlAccountId: {type: GraphQLString}
  })
});

export {FixedAssetTypeGlAccountInputType};
    