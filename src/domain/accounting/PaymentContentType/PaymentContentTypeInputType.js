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

const PaymentContentTypeInputType = new GraphQLInputObjectType({
  name: 'PaymentContentTypeInputType',
  description: 'input type for PaymentContentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    paymentContentTypeId: {type: GraphQLString}
  })
});

export {PaymentContentTypeInputType};
    