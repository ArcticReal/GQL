
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {GlAccountCategoryType} from '../accounting/GlAccountCategoryType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';


const GlAccountCategoryMemberType = new GraphQLObjectType({
  name: 'GlAccountCategoryMemberType',
  description: 'Type for GlAccountCategoryMember in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    amountPercentage: {type: GraphQLFloat},
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccountCategoryMember, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${glAccountCategoryMember.glAccountId}`)
    },
    glAccountCategory: {
      type: GlAccountCategoryType,
      args : {glAccountCategoryId: {type: GraphQLString}},
      resolve: (glAccountCategoryMember, args, {loaders}) => loaders.ofbiz.load(`glAccountCategorys/find?glAccountCategoryId=${glAccountCategoryMember.glAccountCategoryId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {GlAccountCategoryMemberType};
    