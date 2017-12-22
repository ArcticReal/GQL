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

const PaymentAttributeResponseType = new GraphQLObjectType({
  name: 'PaymentAttributeResponseType',
  description: 'response type for PaymentAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    paymentId: {type: GraphQLString}
  })
});

export {PaymentAttributeResponseType};
    