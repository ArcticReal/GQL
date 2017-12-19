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

const CartAbandonedLineInputType = new GraphQLInputObjectType({
  name: 'CartAbandonedLineInputType',
  description: 'input type for CartAbandonedLine',

  fields: () => ({
    cartAbandonedLineSeqId: {type: GraphQLString},
    configId: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    reserv2ndPPPerc: {type: GraphQLFloat},
    reservLength: {type: GraphQLFloat},
    reservNthPPPerc: {type: GraphQLFloat},
    reservPersons: {type: GraphQLFloat},
    reservStart: {type: GraphQLString},
    totalWithAdjustments: {type: GraphQLFloat},
    unitPrice: {type: GraphQLFloat},
    visitId: {type: GraphQLString},
    wasReserved: {type: GraphQLBoolean}
  })
});

export {CartAbandonedLineInputType};
    