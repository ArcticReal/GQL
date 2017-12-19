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

const AffiliateInputType = new GraphQLInputObjectType({
  name: 'AffiliateInputType',
  description: 'input type for Affiliate',

  fields: () => ({
    affiliateDescription: {type: GraphQLString},
    affiliateName: {type: GraphQLString},
    dateTimeApproved: {type: GraphQLString},
    dateTimeCreated: {type: GraphQLString},
    partyId: {type: GraphQLString},
    sitePageViews: {type: GraphQLString},
    siteType: {type: GraphQLString},
    siteVisitors: {type: GraphQLString},
    yearEstablished: {type: GraphQLString}
  })
});

export {AffiliateInputType};
    