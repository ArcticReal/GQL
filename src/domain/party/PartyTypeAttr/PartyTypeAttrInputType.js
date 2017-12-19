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

const PartyTypeAttrInputType = new GraphQLInputObjectType({
  name: 'PartyTypeAttrInputType',
  description: 'input type for PartyTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    partyTypeId: {type: GraphQLString}
  })
});

export {PartyTypeAttrInputType};
    