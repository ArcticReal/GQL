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

const LotResponseType = new GraphQLObjectType({
  name: 'LotResponseType',
  description: 'response type for Lot',

  fields: () => ({
    creationDate: {type: GraphQLString},
    expirationDate: {type: GraphQLString},
    lotId: {type: GraphQLString},
    quantity: {type: GraphQLFloat}
  })
});

export {LotResponseType};
    