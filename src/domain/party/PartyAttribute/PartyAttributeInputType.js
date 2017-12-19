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

const PartyAttributeInputType = new GraphQLInputObjectType({
  name: 'PartyAttributeInputType',
  description: 'input type for PartyAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {PartyAttributeInputType};
    