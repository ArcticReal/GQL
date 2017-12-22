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

const PartyAttributeResponseType = new GraphQLObjectType({
  name: 'PartyAttributeResponseType',
  description: 'response type for PartyAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {PartyAttributeResponseType};
    