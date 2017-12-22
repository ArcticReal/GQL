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

const BillingAccountTermAttrResponseType = new GraphQLObjectType({
  name: 'BillingAccountTermAttrResponseType',
  description: 'response type for BillingAccountTermAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    billingAccountTermId: {type: GraphQLString}
  })
});

export {BillingAccountTermAttrResponseType};
    