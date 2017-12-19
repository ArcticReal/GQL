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

const PartyClassificationTypeInputType = new GraphQLInputObjectType({
  name: 'PartyClassificationTypeInputType',
  description: 'input type for PartyClassificationType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    partyClassificationTypeId: {type: GraphQLString}
  })
});

export {PartyClassificationTypeInputType};
    