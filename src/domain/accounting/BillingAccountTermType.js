
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BillingAccountType} from '../accounting/BillingAccountType.js';
import {BillingAccountTermAttrType} from '../accounting/BillingAccountTermAttrType.js';
import {TermTypeType} from '../party/TermTypeType.js';


const BillingAccountTermType = new GraphQLObjectType({
  name: 'BillingAccountTermType',
  description: 'Type for BillingAccountTerm in accounting',

  fields: () => ({
    billingAccountTermId: {type: GraphQLString},
    termDays: {type: GraphQLInt},
    termType: {
      type: TermTypeType,
      args : {termTypeId: {type: GraphQLString}},
      resolve: (billingAccountTerm, args, {loaders}) => loaders.ofbiz.load(`termTypes/find?termTypeId=${billingAccountTerm.termTypeId}`)
    },
    billingAccount: {
      type: BillingAccountType,
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (billingAccountTerm, args, {loaders}) => loaders.ofbiz.load(`billingAccounts/find?billingAccountId=${billingAccountTerm.billingAccountId}`)
    },
    uomId: {type: GraphQLString},
    termValue: {type: GraphQLFloat},
    billingAccountTermAttr: {
      type: new GraphQLList(BillingAccountTermAttrType),
      args : {billingAccountTermId: {type: GraphQLString}},
      resolve: (billingAccountTerm, args, {loaders}) => loaders.ofbizArray.load(`billingAccountTermAttrs/find?billingAccountTermId=${billingAccountTerm.billingAccountTermId}`)
    }
  })
});

export {BillingAccountTermType};
    