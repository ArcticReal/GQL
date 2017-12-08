
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
      resolve: (partyGroup, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyGroup.partyId}`)
    },
    officeSiteName: {type: GraphQLString},
    annualRevenue: {type: GraphQLFloat},
    logoImageUrl: {type: GraphQLString},
    affiliates: {
      type: new GraphQLList(AffiliateType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyGroup, args, {loaders}) => loaders.ofbizArray.load(`affiliates/find?partyId=${partyGroup.partyId}`)
    },
    partyInvitationGroupAssocs: {
      type: new GraphQLList(PartyInvitationGroupAssocType),
      args : {partyId: {type: GraphQLString}},
      resolve: (partyGroup, args, {loaders}) => loaders.ofbizArray.load(`partyInvitationGroupAssocs/find?partyId=${partyGroup.partyId}`)
    }
  })
});

export {PartyGroupType};
    




const PartyGroupInputType = new GraphQLInputObjectType({
  name: 'PartyGroupInputType',
  description: 'input type for PartyGroup in party',

  fields: () => ({
    groupName: {type: GraphQLString},
    groupNameLocal: {type: GraphQLString},
    comments: {type: GraphQLString},
    numEmployees: {type: GraphQLInt},
    tickerSymbol: {type: GraphQLString},
    partyId: {type: GraphQLString},
    officeSiteName: {type: GraphQLString},
    annualRevenue: {type: GraphQLFloat},
    logoImageUrl: {type: GraphQLString}
  })
});

export {PartyGroupInputType};
    