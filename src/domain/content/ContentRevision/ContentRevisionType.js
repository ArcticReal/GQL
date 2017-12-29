
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
import {ContentType} from '../../content/Content/ContentType.js';
import {ContentRevisionItemType} from '../../content/ContentRevisionItem/ContentRevisionItemType.js';


const ContentRevisionType = new GraphQLObjectType({
  name: 'ContentRevisionType',
  description: 'Type for ContentRevision in content',

  fields: () => ({
    comments: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (contentRevision, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${contentRevision.contentId}`)
    },
    contentRevisionSeqId: {type: GraphQLString},
    committedByParty: {
      type: PartyType,
      args : {committedByPartyId: {type: GraphQLString}},
      resolve: (contentRevision, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${contentRevision.committedByPartyId}`)
    },
    contentRevisionItems: {
      type: new GraphQLList(ContentRevisionItemType),
      args : {},
      resolve: (contentRevision, args, {loaders}) => loaders.ofbizArray.load(`content/content/contentRevisionItems/find?contentId=${contentRevision.contentId}`)
    }
  })
});

export {ContentRevisionType};
    