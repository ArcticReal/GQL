
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

import {PartyContentType} from '../party/PartyContent.js';


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
    partyContentTypes: {
      type: new GraphQLList(PartyContentTypeType),
      args : {partyContentTypeId: {type: GraphQLString}},
      resolve: (partyContentType, args, {loaders}) => loaders.ofbizArray.load(`partyContentTypes/find?partyContentTypeId=${partyContentType.partyContentTypeId}`)
    },
    partyContents: {
      type: new GraphQLList(PartyContentType),
      args : {partyContentTypeId: {type: GraphQLString}},
      resolve: (partyContentType, args, {loaders}) => loaders.ofbizArray.load(`partyContents/find?partyContentTypeId=${partyContentType.partyContentTypeId}`)
    }
  })
});

export {PartyContentTypeType};
    




const PartyContentTypeInputType = new GraphQLInputObjectType({
  name: 'PartyContentTypeInputType',
  description: 'input type for PartyContentType in party',

  fields: () => ({
    partyContentTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {PartyContentTypeInputType};
    