
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {ContentType} from '../content/ContentType.js';
import {PartyContentTypeType} from '../party/PartyContentTypeType.js';


const PartyContentType = new GraphQLObjectType({
  name: 'PartyContentType',
  description: 'Type for PartyContent in party',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyContentType: {
      type: PartyContentTypeType,
      args : {partyContentTypeId: {type: GraphQLString}},
      resolve: (partyContent, args, {loaders}) => loaders.ofbiz.load(`partyContentTypes/find?partyContentTypeId=${partyContent.partyContentTypeId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (partyContent, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${partyContent.contentId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyContent, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyContent.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PartyContentType};
    