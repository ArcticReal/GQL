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

const PaymentTypeAttrResponseType = new GraphQLObjectType({
  name: 'PaymentTypeAttrResponseType',
  description: 'response type for PaymentTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    paymentTypeId: {type: GraphQLString}
  })
});

export {PaymentTypeAttrResponseType};
    