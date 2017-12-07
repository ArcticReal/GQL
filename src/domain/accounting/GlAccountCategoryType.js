
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {GlAccountCategoryTypeType} from '../accounting/GlAccountCategoryTypeType.js';
import {GlAccountCategoryMemberType} from '../accounting/GlAccountCategoryMemberType.js';


const GlAccountCategoryType = new GraphQLObjectType({
  name: 'GlAccountCategoryType',
  description: 'Type for GlAccountCategory in accounting',

  fields: () => ({
    glAccountCategoryType: {
      type: GlAccountCategoryTypeType,
      args : {glAccountCategoryTypeId: {type: GraphQLString}},
      resolve: (glAccountCategory, args, {loaders}) => loaders.ofbiz.load(`glAccountCategoryTypes/find?glAccountCategoryTypeId=${glAccountCategory.glAccountCategoryTypeId}`)
    },
    glAccountCategoryId: {type: GraphQLString},
    description: {type: GraphQLString},
    glAccountCategoryMember: {
      type: new GraphQLList(GlAccountCategoryMemberType),
      args : {glAccountCategoryId: {type: GraphQLString}},
      resolve: (glAccountCategory, args, {loaders}) => loaders.ofbizArray.load(`glAccountCategoryMembers/find?glAccountCategoryId=${glAccountCategory.glAccountCategoryId}`)
    }
  })
});

export {GlAccountCategoryType};
    