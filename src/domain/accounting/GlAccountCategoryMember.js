
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

import {GlAccountCategoryType} from '../accounting/GlAccountCategory.js';
import {GlAccountType} from '../accounting/GlAccount.js';


const GlAccountCategoryMemberType = new GraphQLObjectType({
  name: 'GlAccountCategoryMemberType',
  description: 'Type for GlAccountCategoryMember in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    amountPercentage: {type: GraphQLFloat},
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccountCategoryMember, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${glAccountCategoryMember.glAccountId}`)
    },
    glAccountCategory: {
      type: GlAccountCategoryType,
      args : {glAccountCategoryId: {type: GraphQLString}},
      resolve: (glAccountCategoryMember, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountCategorys/find?glAccountCategoryId=${glAccountCategoryMember.glAccountCategoryId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {GlAccountCategoryMemberType};
    




const GlAccountCategoryMemberInputType = new GraphQLInputObjectType({
  name: 'GlAccountCategoryMemberInputType',
  description: 'input type for GlAccountCategoryMember',

  fields: () => ({
    amountPercentage: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    glAccountCategoryId: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {GlAccountCategoryMemberInputType};
    