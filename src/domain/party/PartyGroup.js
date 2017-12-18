
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
import {PartyInvitationGroupAssocType} from '../party/PartyInvitationGroupAssoc.js';
import {AffiliateType} from '../party/Affiliate.js';


const PartyGroupType = new GraphQLObjectType({
  name: 'PartyGroupType',
  description: 'Type for PartyGroup in party',

  fields: () => ({
    groupName: {type: GraphQLString},
    groupNameLocal: {type: GraphQLString},
    comments: {type: GraphQLString},
    numEmployees: {type: GraphQLInt},
    tickerSymbol: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyGroup, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${partyGroup.partyId}`)
    },
    officeSiteName: {type: GraphQLString},
    annualRevenue: {type: GraphQLFloat},
    logoImageUrl: {type: GraphQLString},
    affiliates: {
      type: new GraphQLList(AffiliateType),
      args : {},
      resolve: (partyGroup, args, {loaders}) => loaders.ofbizArray.load(`party/affiliates/find?partyId=${partyGroup.partyId}`)
    },
    partyInvitationGroupAssocs: {
      type: new GraphQLList(PartyInvitationGroupAssocType),
      args : {},
      resolve: (partyGroup, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyInvitationGroupAssocs/find?partyId=${partyGroup.partyId}`)
    }
  })
});

export {PartyGroupType};
    




const PartyGroupInputType = new GraphQLInputObjectType({
  name: 'PartyGroupInputType',
  description: 'input type for PartyGroup',

  fields: () => ({
    annualRevenue: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    groupName: {type: GraphQLString},
    groupNameLocal: {type: GraphQLString},
    logoImageUrl: {type: GraphQLString},
    numEmployees: {type: GraphQLInt},
    officeSiteName: {type: GraphQLString},
    partyId: {type: GraphQLString},
    tickerSymbol: {type: GraphQLString}
  })
});

export {PartyGroupInputType};
    