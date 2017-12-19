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

const PartyContentTypeInputType = new GraphQLInputObjectType({
  name: 'PartyContentTypeInputType',
  description: 'input type for PartyContentType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    partyContentTypeId: {type: GraphQLString}
  })
});

export {PartyContentTypeInputType};
    