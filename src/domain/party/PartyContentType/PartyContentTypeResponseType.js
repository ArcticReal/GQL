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

const PartyContentTypeResponseType = new GraphQLObjectType({
  name: 'PartyContentTypeResponseType',
  description: 'response type for PartyContentType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    partyContentTypeId: {type: GraphQLString}
  })
});

export {PartyContentTypeResponseType};
    