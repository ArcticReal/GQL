
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

import {PartyContentType} from '../../party/PartyContent/PartyContentType.js';


const PartyContentTypeType = new GraphQLObjectType({
  name: 'PartyContentTypeType',
  description: 'Type for PartyContentType in party',

  fields: () => ({
    partyContentTypeId: {type: GraphQLString},
    parentType: {
      type: PartyContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (partyContentType, args, {loaders}) => loaders.ofbiz.load(`party/party/partyContentTypes/find?partyContentTypeId=${partyContentType.parentTypeId}`)
    },
    description: {type: GraphQLString},
    partyContentTypes: {
      type: new GraphQLList(PartyContentTypeType),
      args : {},
      resolve: (partyContentType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyContentTypes/find?partyContentTypeId=${partyContentType.partyContentTypeId}`)
    },
    partyContents: {
      type: new GraphQLList(PartyContentType),
      args : {},
      resolve: (partyContentType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyContents/find?partyContentTypeId=${partyContentType.partyContentTypeId}`)
    }
  })
});

export {PartyContentTypeType};
    