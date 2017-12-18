
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

import {BillingAccountType} from '../accounting/BillingAccount.js';
import {BillingAccountTermAttrType} from '../accounting/BillingAccountTermAttr.js';
import {TermTypeType} from '../party/TermType.js';


const BillingAccountTermType = new GraphQLObjectType({
  name: 'BillingAccountTermType',
  description: 'Type for BillingAccountTerm in accounting',

  fields: () => ({
    billingAccountTermId: {type: GraphQLString},
    termDays: {type: GraphQLInt},
    termType: {
      type: TermTypeType,
      args : {termTypeId: {type: GraphQLString}},
      resolve: (billingAccountTerm, args, {loaders}) => loaders.ofbiz.load(`party/termTypes/find?termTypeId=${billingAccountTerm.termTypeId}`)
    },
    billingAccount: {
      type: BillingAccountType,
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (billingAccountTerm, args, {loaders}) => loaders.ofbiz.load(`accounting/billingAccounts/find?billingAccountId=${billingAccountTerm.billingAccountId}`)
    },
    uomId: {type: GraphQLString},
    termValue: {type: GraphQLFloat},
    billingAccountTermAttrs: {
      type: new GraphQLList(BillingAccountTermAttrType),
      args : {},
      resolve: (billingAccountTerm, args, {loaders}) => loaders.ofbizArray.load(`accounting/billingAccount/billingAccountTermAttrs/find?billingAccountTermId=${billingAccountTerm.billingAccountTermId}`)
    }
  })
});

export {BillingAccountTermType};
    




const BillingAccountTermInputType = new GraphQLInputObjectType({
  name: 'BillingAccountTermInputType',
  description: 'input type for BillingAccountTerm',

  fields: () => ({
    billingAccountId: {type: GraphQLString},
    billingAccountTermId: {type: GraphQLString},
    termDays: {type: GraphQLInt},
    termTypeId: {type: GraphQLString},
    termValue: {type: GraphQLFloat},
    uomId: {type: GraphQLString}
  })
});

export {BillingAccountTermInputType};
    