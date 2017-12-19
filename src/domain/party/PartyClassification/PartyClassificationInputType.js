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

const PartyClassificationInputType = new GraphQLInputObjectType({
  name: 'PartyClassificationInputType',
  description: 'input type for PartyClassification',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyClassificationGroupId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyClassificationInputType};
    