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

const PartyClassificationResponseType = new GraphQLObjectType({
  name: 'PartyClassificationResponseType',
  description: 'response type for PartyClassification',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyClassificationGroupId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyClassificationResponseType};
    