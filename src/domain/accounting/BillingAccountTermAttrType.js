
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BillingAccountTermType} from '../accounting/BillingAccountTermType.js';


const BillingAccountTermAttrType = new GraphQLObjectType({
  name: 'BillingAccountTermAttrType',
  description: 'Type for BillingAccountTermAttr in accounting',

  fields: () => ({
    billingAccountTerm: {
      type: BillingAccountTermType,
      args : {billingAccountTermId: {type: GraphQLString}},
      resolve: (billingAccountTermAttr, args, {loaders}) => loaders.ofbiz.load(`billingAccountTerms/find?billingAccountTermId=${billingAccountTermAttr.billingAccountTermId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {BillingAccountTermAttrType};
    