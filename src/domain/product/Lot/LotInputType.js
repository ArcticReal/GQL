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

const LotInputType = new GraphQLInputObjectType({
  name: 'LotInputType',
  description: 'input type for Lot',

  fields: () => ({
    creationDate: {type: GraphQLString},
    expirationDate: {type: GraphQLString},
    lotId: {type: GraphQLString},
    quantity: {type: GraphQLFloat}
  })
});

export {LotInputType};
    