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

const BillingAccountTermAttrInputType = new GraphQLInputObjectType({
  name: 'BillingAccountTermAttrInputType',
  description: 'input type for BillingAccountTermAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    billingAccountTermId: {type: GraphQLString}
  })
});

export {BillingAccountTermAttrInputType};
    