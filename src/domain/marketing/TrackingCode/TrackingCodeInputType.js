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

const TrackingCodeInputType = new GraphQLInputObjectType({
  name: 'TrackingCodeInputType',
  description: 'input type for TrackingCode',

  fields: () => ({
    billableLifetime: {type: GraphQLInt},
    comments: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    description: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    groupId: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    marketingCampaignId: {type: GraphQLString},
    overrideCss: {type: GraphQLString},
    overrideLogo: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    redirectUrl: {type: GraphQLString},
    subgroupId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    trackableLifetime: {type: GraphQLInt},
    trackingCodeId: {type: GraphQLString},
    trackingCodeTypeId: {type: GraphQLString}
  })
});

export {TrackingCodeInputType};
    