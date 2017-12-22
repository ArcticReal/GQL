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

const PartyTypeAttrResponseType = new GraphQLObjectType({
  name: 'PartyTypeAttrResponseType',
  description: 'response type for PartyTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    partyTypeId: {type: GraphQLString}
  })
});

export {PartyTypeAttrResponseType};
    