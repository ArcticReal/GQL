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

const PaymentAttributeInputType = new GraphQLInputObjectType({
  name: 'PaymentAttributeInputType',
  description: 'input type for PaymentAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    paymentId: {type: GraphQLString}
  })
});

export {PaymentAttributeInputType};
    