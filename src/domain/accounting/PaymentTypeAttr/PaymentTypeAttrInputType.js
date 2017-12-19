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

const PaymentTypeAttrInputType = new GraphQLInputObjectType({
  name: 'PaymentTypeAttrInputType',
  description: 'input type for PaymentTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    paymentTypeId: {type: GraphQLString}
  })
});

export {PaymentTypeAttrInputType};
    