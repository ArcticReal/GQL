
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
import {PartyContentTypeType} from '../party/PartyContentType.js';


const PartyContentType = new GraphQLObjectType({
  name: 'PartyContentType',
  description: 'Type for PartyContent in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyContentType: {
      type: PartyContentTypeType,
      args : {partyContentTypeId: {type: GraphQLString}},
      resolve: (partyContent, args, {loaders}) => loaders.ofbiz.load(`party/party/partyContentTypes/find?partyContentTypeId=${partyContent.partyContentTypeId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (partyContent, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${partyContent.contentId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyContent, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${partyContent.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PartyContentType};
    




const PartyContentInputType = new GraphQLInputObjectType({
  name: 'PartyContentInputType',
  description: 'input type for PartyContent in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyContentTypeId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyContentInputType};
    