
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
import {ContentType} from '../content/Content.js';
import {ContentRevisionItemType} from '../content/ContentRevisionItem.js';


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
      args : {contentId: {type: GraphQLString}},
      resolve: (contentRevision, args, {loaders}) => loaders.ofbizArray.load(`contentRevisionItems/find?contentId=${contentRevision.contentId}`)
    }
  })
});

export {ContentRevisionType};
    




const ContentRevisionInputType = new GraphQLInputObjectType({
  name: 'ContentRevisionInputType',
  description: 'input type for ContentRevision in content',

  fields: () => ({
    comments: {type: GraphQLString},
    contentId: {type: GraphQLString},
    contentRevisionSeqId: {type: GraphQLString},
    committedByPartyId: {type: GraphQLString}
  })
});

export {ContentRevisionInputType};
    