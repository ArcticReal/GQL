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

const QuoteItemInputType = new GraphQLInputObjectType({
  name: 'QuoteItemInputType',
  description: 'input type for QuoteItem',

  fields: () => ({
    comments: {type: GraphQLString},
    configId: {type: GraphQLString},
    custRequestId: {type: GraphQLString},
    custRequestItemSeqId: {type: GraphQLString},
    deliverableTypeId: {type: GraphQLString},
    estimatedDeliveryDate: {type: GraphQLString},
    isPromo: {type: GraphQLBoolean},
    leadTimeDays: {type: GraphQLInt},
    productFeatureId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    quoteId: {type: GraphQLString},
    quoteItemSeqId: {type: GraphQLString},
    quoteUnitPrice: {type: GraphQLFloat},
    reservLength: {type: GraphQLFloat},
    reservPersons: {type: GraphQLFloat},
    reservStart: {type: GraphQLString},
    selectedAmount: {type: GraphQLFloat},
    skillTypeId: {type: GraphQLString},
    uomId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {QuoteItemInputType};
    