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

const PartyIcsAvsOverrideInputType = new GraphQLInputObjectType({
  name: 'PartyIcsAvsOverrideInputType',
  description: 'input type for PartyIcsAvsOverride',

  fields: () => ({
    avsDeclineString: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {PartyIcsAvsOverrideInputType};
    