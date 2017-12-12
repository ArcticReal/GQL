
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

import {PartyGroupType} from '../party/PartyGroup.js';


const AffiliateType = new GraphQLObjectType({
  name: 'AffiliateType',
  description: 'Type for Affiliate in party',

  fields: () => ({
    affiliateName: {type: GraphQLString},
    dateTimeCreated: {type: GraphQLString},
    yearEstablished: {type: GraphQLString},
    affiliateDescription: {type: GraphQLString},
    sitePageViews: {type: GraphQLString},
    dateTimeApproved: {type: GraphQLString},
    party: {
      type: PartyGroupType,
      args : {partyId: {type: GraphQLString}},
      resolve: (affiliate, args, {loaders}) => loaders.ofbiz.load(`party/party/partyGroups/find?partyId=${affiliate.partyId}`)
    },
    siteVisitors: {type: GraphQLString},
    siteType: {type: GraphQLString}
  })
});

export {AffiliateType};
    




const AffiliateInputType = new GraphQLInputObjectType({
  name: 'AffiliateInputType',
  description: 'input type for Affiliate in party',

  fields: () => ({
    affiliateName: {type: GraphQLString},
    dateTimeCreated: {type: GraphQLString},
    yearEstablished: {type: GraphQLString},
    affiliateDescription: {type: GraphQLString},
    sitePageViews: {type: GraphQLString},
    dateTimeApproved: {type: GraphQLString},
    partyId: {type: GraphQLString},
    siteVisitors: {type: GraphQLString},
    siteType: {type: GraphQLString}
  })
});

export {AffiliateInputType};
    