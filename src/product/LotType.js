
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const Lot = new GraphQLObjectType({
  name: 'LotType',
  description: 'Type for Lot in product',

  fields: () => ({
    quantity: {type: GraphQLFloat},
    lotId: {type: GraphQLString},
    creationDate: {type: GraphQLString},
    expirationDate: {type: GraphQLString}
  })
});

export {Lot};
    