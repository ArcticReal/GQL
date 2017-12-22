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

const PartyIcsAvsOverrideResponseType = new GraphQLObjectType({
  name: 'PartyIcsAvsOverrideResponseType',
  description: 'response type for PartyIcsAvsOverride',

  fields: () => ({
    avsDeclineString: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {PartyIcsAvsOverrideResponseType};
    