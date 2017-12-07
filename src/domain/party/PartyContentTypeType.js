
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyContentType} from '../party/PartyContentType.js';


const PartyContentTypeType = new GraphQLObjectType({
  name: 'PartyContentTypeType',
  description: 'Type for PartyContentType in party',

  fields: () => ({
    partyContentTypeId: {type: GraphQLString},
    parentType: {
      type: PartyContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (partyContentType, args, {loaders}) => loaders.ofbiz.load(`partyContentTypes/find?partyContentTypeId=${partyContentType.parentTypeId}`)
    },
    description: {type: GraphQLString},
    partyContentType: {
      type: new GraphQLList(PartyContentTypeType),
      args : {partyContentTypeId: {type: GraphQLString}},
      resolve: (partyContentType, args, {loaders}) => loaders.ofbizArray.load(`partyContentTypes/find?partyContentTypeId=${partyContentType.partyContentTypeId}`)
    },
    partyContent: {
      type: new GraphQLList(PartyContentType),
      args : {partyContentTypeId: {type: GraphQLString}},
      resolve: (partyContentType, args, {loaders}) => loaders.ofbizArray.load(`partyContents/find?partyContentTypeId=${partyContentType.partyContentTypeId}`)
    }
  })
});

export {PartyContentTypeType};
    