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

const ContactListInputType = new GraphQLInputObjectType({
  name: 'ContactListInputType',
  description: 'input type for ContactList',

  fields: () => ({
    comments: {type: GraphQLString},
    contactListId: {type: GraphQLString},
    contactListName: {type: GraphQLString},
    contactListTypeId: {type: GraphQLString},
    contactMechTypeId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    description: {type: GraphQLString},
    isPublic: {type: GraphQLBoolean},
    lastModifiedByUserLogin: {type: GraphQLString},
    marketingCampaignId: {type: GraphQLString},
    optOutScreen: {type: GraphQLString},
    ownerPartyId: {type: GraphQLString},
    singleUse: {type: GraphQLBoolean},
    verifyEmailFrom: {type: GraphQLString},
    verifyEmailScreen: {type: GraphQLString},
    verifyEmailSubject: {type: GraphQLString},
    verifyEmailWebSiteId: {type: GraphQLString}
  })
});

export {ContactListInputType};
    